/**
 * KPICard Component
 * Displays a Key Performance Indicator card with icon, title, value and change percentage
 *
 * @param {Object} props - Component props
 * @param {string} props.icon - Emoji icon to display
 * @param {string} props.title - Card title (e.g., "Total Attendees")
 * @param {number} props.value - Main value to display
 * @param {string} props.change - Change text (e.g., "↑ 12.5% from yesterday")
 * @param {string} props.changeType - Type of change: "positive" or "negative"
 * @param {string} props.iconColor - Icon background color: "blue", "green", "orange", "purple"
 */

import styles from './KPICard.module.css';

export default function KPICard({ icon, title, value, change, changeType = 'positive', iconColor = 'blue' }) {
    return (
        <div className={styles.kpiCard}>
            <div className={styles.kpiHeader}>
                <div className={`${styles.kpiIcon} ${styles[`kpiIcon${iconColor.charAt(0).toUpperCase() + iconColor.slice(1)}`]}`}>
                    {icon}
                </div>
                <div className={styles.kpiTitle}>{title}</div>
            </div>
            <div className={styles.kpiValue}>
                {typeof value === 'number' ? value.toLocaleString() : value}
            </div>
            <div className={`${styles.kpiChange} ${styles[`kpiChange${changeType.charAt(0).toUpperCase() + changeType.slice(1)}`]}`}>
                {change}
            </div>
        </div>
    );
}