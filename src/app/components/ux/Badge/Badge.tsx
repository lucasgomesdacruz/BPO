interface BadgeProps {
    text: string;
}

const Badge = ({ text }: BadgeProps) => {
    return (
        <span className="mb-6 inline-flex items-center rounded-full bg-[#ccf7f7] px-4 py-2 text-sm font-medium text-[#003737]">
            {text}
        </span>
    );
};

export default Badge