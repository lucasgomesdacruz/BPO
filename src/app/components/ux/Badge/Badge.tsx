import styles from './Badge.module.scss'

interface BadgeProps {
    text: string;
}

const Badge = ({ text }: BadgeProps) => {

    return (
        <span className={styles.badge}>
            {text}
        </span>
    )

}

export default Badge