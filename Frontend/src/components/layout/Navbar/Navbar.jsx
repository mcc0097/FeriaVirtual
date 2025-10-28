/**
 * Navbar Component
 * Reusable navigation bar with logo, welcome message and logout button
 * 
 * @param {Object} props - Component props
 * @param {string} props.userName - Name of the logged-in user
 * @param {Function} props.onLogout - Function to call when logout button is clicked
 */

import styles from './Navbar.module.css';

export default function Navbar({ userName = 'User', onLogout }) {

    /**
     * Handles logo click - scrolls to top of page
     */
    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.loginStatus}>
                ¡Welcome, {userName}!
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/images/Davante_logotipo_white.png"
                alt="Davante"
                className={styles.logo}
                onClick={handleLogoClick}
            />

            <button className={styles.logout} onClick={onLogout}>
                Log out
            </button>
        </nav>
    );
}