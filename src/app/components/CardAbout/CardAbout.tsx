import styles from './CardAbout.module.scss'

interface CardProps {
    title: string;
    text: string;
    icon?: React.ElementType;
}

const CardAbout = ({ icon: Icon, title, text }: CardProps) => {

    return (
        <div className={styles.card}>
            {Icon && (
                <span>
                    <Icon size={38} />
                </span>
            )}
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default CardAbout;