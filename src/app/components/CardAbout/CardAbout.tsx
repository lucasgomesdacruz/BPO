import styles from './CardAbout.module.scss'

interface CardProps {
    title: string;
    text: string;
    icon?: React.ElementType;
    subText?: string;
    buttonText?: string;
}

const CardAbout = ({ icon: Icon, title, text, subText, buttonText }: CardProps) => {

    return (
        <div className={styles.card}>
            {Icon && (
                <span>
                    <Icon size={38} />
                </span>
            )}
            <h3>{title}</h3>
            <p>{text}</p>
            <p>{subText}</p>
            {buttonText && (
                <button className={styles.button_services}>
                    {buttonText}
                </button>
            )}
        </div>
    )
}

export default CardAbout;