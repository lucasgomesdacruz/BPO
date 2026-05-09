import styles from './Badge.module.scss'

interface badgeProps {
    text: string;
}

const Badge = ({ text }: badgeProps) => {

    return (
        <span className={styles.badge}>
            {text}
        </span>
    )

}

export default Badge