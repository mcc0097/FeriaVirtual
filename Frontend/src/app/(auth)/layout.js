//layout for authentication pages
import styles from './auth.module.css';

export default function AuthLayout({ children }) {
  return (
    <div className={styles.authLayout}>
      <div className={styles.authContainer}>
        {children}
      </div>
    </div>
  );
}