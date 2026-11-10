interface CardProps {
    title: string;
    text: string;
    icon?: React.ElementType;
    subText?: string;
    buttonText?: string;
}

const CardAbout = ({ icon: Icon, title, text, subText, buttonText }: CardProps) => {
    return (
        <div className="flex h-full flex-col items-center justify-between rounded-lg border-t-[5px] border-transparent bg-[linear-gradient(white,white)_padding-box,linear-gradient(to_right,#14b8a6,#0d9488,#0f766e)_border-box] p-6 text-center shadow-[0_8px_12px_-4px_rgba(0,0,0,0.2)] transition duration-200 md:hover:-translate-y-1 md:hover:shadow-[0_12px_20px_-6px_rgba(0,0,0,0.25)]">
            {Icon && (
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-[linear-gradient(to_right,#14b8a6,#0d9488,#0f766e)] text-white transition duration-500">
                    <Icon size={38} />
                </span>
            )}
            <h3 className="mb-4 text-[1.15rem] font-semibold leading-7 text-slate-900">{title}</h3>
            <p className="mb-4 text-sm leading-6 text-(--color-tercery)">{text}</p>
            {subText && <p className="mb-4 text-sm leading-6 text-(--color-tercery)">{subText}</p>}
            {buttonText && (
                <button className="mt-auto flex h-8 w-[80%] items-center justify-center rounded-md bg-(--color-variable-primary) text-sm font-medium text-white transition-colors duration-300 md:hover:bg-(--color-primary)">
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default CardAbout;