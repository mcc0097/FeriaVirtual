/**
 * Footer Component
 * Reusable footer with copyright and legal links
 */

import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    © {currentYear} Davante | MEDAC
                </p>
                <div className={styles.links}>
                    <a href="/legal-notice" className={styles.link}>
                        Aviso legal
                    </a>
                    <span className={styles.separator}>|</span>
                    <a href="/privacy-policy" className={styles.link}>
                        Política de privacidad
                    </a>
                    <span className={styles.separator}>|</span>
                    <a href="/cookies-policy" className={styles.link}>
                        Política de cookies
                    </a>
                </div>
            </div>
        </footer>
    );
}