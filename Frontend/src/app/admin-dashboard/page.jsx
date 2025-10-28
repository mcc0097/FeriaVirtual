'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/modules/admin-dashboard.module.css';

const AdminDashboard = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('Usuario');

  // Función para obtener y decodificar el token
  const getToken = () => localStorage.getItem('auth_token');

  const decodeToken = (token) => {
    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload);
      return JSON.parse(decoded);
    } catch (error) {
      return null;
    }
  };

  const checkAuth = () => {
    const token = getToken();
    if (!token) {
      router.push('/login'); // Redirige si no hay token
      return;
    }

    const user = decodeToken(token);
    if (!user) {
      router.push('/login');
      return;
    }

    setUserName(user.username || 'Usuario');

    if (user.role !== 'admin') {
      router.push('/403');
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    router.push('/login');
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles['login-status']}>
          ¡Welcome, {userName}!
        </div>

        <div className={styles.logo}>Logo</div>

        <button className={styles.logout} onClick={logout}>
          Log out
        </button>
      </nav>

      {/* Cards */}
      <main className={styles.container}>
        <div className={styles.card}>
          <div className={styles['card-placeholder']}>Imagen</div>
          <h2 className={styles['card-title']}>Empresas</h2>
          <div className={styles['card-footer']}></div>
        </div>

        <div className={styles.card}>
          <div className={styles['card-placeholder']}>Imagen</div>
          <h2 className={styles['card-title']}>Ofertas</h2>
          <div className={styles['card-footer']}></div>
        </div>

        <div className={styles.card}>
          <div className={styles['card-placeholder']}>Imagen</div>
          <h2 className={styles['card-title']}>Usuarios</h2>
          <div className={styles['card-footer']}></div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
