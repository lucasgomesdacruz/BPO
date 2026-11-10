"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

type CarouselProps<T> = {
    items: T[]
    itemTemplate: (item: T, index: number) => React.ReactNode
    className?: string
    showIndicators?: boolean
}

function Carousel<T>({
    items,
    itemTemplate,
    className,
    showIndicators = false,
}: CarouselProps<T>) {
    const [index, setIndex] = React.useState(0)

    const [dragStartX, setDragStartX] = React.useState<number | null>(null)

    const handleDragStart = (clientX: number) => {
        setDragStartX(clientX)
    }

    const handleDragEnd = (clientX: number) => {
        if (dragStartX === null) return

        const deltaX = dragStartX - clientX

        if (Math.abs(deltaX) < 40) {
            setDragStartX(null)
            return
        }

        if (deltaX > 0) {
            setIndex((current) => (current + 1) % items.length)
        } else {
            setIndex((current) => (current - 1 + items.length) % items.length)
        }

        setDragStartX(null)
    }

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        handleDragStart(event.touches[0].clientX)
    }

    const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        handleDragEnd(event.changedTouches[0].clientX)
    }

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        handleDragStart(event.clientX)
    }

    const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
        handleDragEnd(event.clientX)
    }

    if (!items.length) return null

    return (
        <div className={cn("w-full", className)}>
            <div
                className="relative overflow-visible rounded-lg px-6"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
            >
                {items.length > 1 && (
                    <>
                        <button
                            type="button"
                            className="absolute left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition active:scale-100"
                            onClick={() => setIndex((current) => (current - 1 + items.length) % items.length)}
                            aria-label="Slide anterior"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>

                        <button
                            type="button"
                            className="absolute right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition active:scale-100"
                            onClick={() => setIndex((current) => (current + 1) % items.length)}
                            aria-label="Próximo slide"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </>
                )}

                <div className="transition-transform duration-300 ease-out">
                    {itemTemplate(items[index], index)}
                </div>

                {items.length > 1 && showIndicators && (
                    <div className="mt-4 flex items-center justify-center gap-2">
                        {items.map((_, itemIndex) => (
                            <button
                                key={itemIndex}
                                type="button"
                                aria-label={`Ir para o item ${itemIndex + 1}`}
                                onClick={() => setIndex(itemIndex)}
                                className={cn(
                                    "h-2.5 w-2.5 rounded-full transition-colors",
                                    itemIndex === index ? "bg-(--color-variable-primary)" : "bg-slate-300"
                                )}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export { Carousel }
