//this is the dashboard page component

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/modules/dashboard.module.css';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Verify if the user is authenticated
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token) {
      // if there is no token, redirect to login
      router.push('/login');
    } else {
      // if there is user data, display it
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Error parsing user data');
      }
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.dashboardLayout}>
      <nav className={styles.navbar}>
        <span className={styles.logo}>Virtual Fair Dashboard</span>
        <div className={styles.navItems}>
          <div className={styles.dropdownContainer}>
            <button 
              className={styles.profileButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {user.username || user.email}
            </button>
            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownItem}>Profile</div>
                <div className={styles.dropdownItem}>Settings</div>
                <div className={styles.dropdownItem}>Notifications</div>
                <div className={styles.dropdownDivider} />
                <div className={styles.dropdownItem}>Help</div>
                <div className={styles.dropdownItem}>Admin Panel</div>
                <div className={styles.dropdownDivider} />
                <div 
                  className={styles.dropdownItem}
                  onClick={handleLogout}
                >
                  Log out
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className={styles.mainContent}>
        <div className={styles.welcomeCard}>
          <h1 className={styles.welcomeTitle}>¡Bienvenido {user.username || user.email}!</h1>
          <p>Has iniciado sesión correctamente en el panel de control.</p>
          <button 
            onClick={handleLogout}
            className={styles.logoutButton}
          >
            Cerrar Sesión
          </button>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>Estado</div>
            <div className={styles.statValue}>Activo</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>Sesión</div>
            <div className={styles.statValue}>Verificada</div>
          </div>
        </div>
      </main>
    </div>
  );
}