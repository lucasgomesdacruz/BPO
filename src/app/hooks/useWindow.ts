"use client"
import { useEffect, useState } from "react";


type Size = {
    width: number | undefined;
    height: number | undefined;
}

function useWindowSize(): Size {
    const [ windowSize, setWindowSize ] = useState<Size>({
        width: undefined,
        height: undefined
    })
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: globalThis.innerWidth,
                height: globalThis.innerHeight,
            })
        }
        globalThis.addEventListener("resize", handleResize);
        handleResize();
        return () => globalThis.removeEventListener("resize", handleResize)
    }, []);
    return windowSize
}

export default useWindowSize;