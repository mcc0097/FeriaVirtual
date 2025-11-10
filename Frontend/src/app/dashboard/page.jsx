// This is the dashboard page component

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/modules/dashboard.module.css';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // States for image previews
  const [logoPreview, setLogoPreview] = useState('');
  const [bannerPreview, setBannerPreview] = useState('');
  const [cartelPreview, setCartelPreview] = useState('');

  // States for selected files
  const [logoFile, setLogoFile] = useState(null);
  const [bannerFile, setBannerFile] = useState(null);
  const [cartelFile, setCartelFile] = useState(null);

  useEffect(() => {
    // Verify if the user is authenticated
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token) {
      // If there is no token, redirect to login
      router.push('/login');
    } else {
      // If there is user data, display it
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Error parsing user data');
      }
    }

    // Load saved images from localStorage if they exist
    const savedLogo = localStorage.getItem('companyLogo');
    const savedBanner = localStorage.getItem('companyBanner');
    const savedCartel = localStorage.getItem('companyCartel');

    if (savedLogo) setLogoPreview(savedLogo);
    if (savedBanner) setBannerPreview(savedBanner);
    if (savedCartel) setCartelPreview(savedCartel);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  /**
   * Handle logo file selection
   */
  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        // Save to localStorage
        localStorage.setItem('companyLogo', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Handle banner file selection
   */
  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBannerFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result);
        localStorage.setItem('companyBanner', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Handle poster file selection
   */
  const handleCartelChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCartelFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCartelPreview(reader.result);
        localStorage.setItem('companyCartel', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Remove logo
   */
  const handleRemoveLogo = () => {
    setLogoPreview('');
    setLogoFile(null);
    localStorage.removeItem('companyLogo');
    const input = document.getElementById('logoInput');
    if (input) input.value = '';
  };

  /**
   * Remove banner
   */
  const handleRemoveBanner = () => {
    setBannerPreview('');
    setBannerFile(null);
    localStorage.removeItem('companyBanner');
    const input = document.getElementById('bannerInput');
    if (input) input.value = '';
  };

  /**
   * Remove poster
   */
  const handleRemoveCartel = () => {
    setCartelPreview('');
    setCartelFile(null);
    localStorage.removeItem('companyCartel');
    const input = document.getElementById('cartelInput');
    if (input) input.value = '';
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
                <div
                  className={styles.dropdownItem}
                  onClick={() => window.open('/dashboard-admin', '_blank')}
                >
                  Admin Panel
                </div>
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

        {/* Company images section */}
        <div className={styles.companyImagesSection}>
          <h2 className={styles.sectionTitle}>Imágenes de tu empresa</h2>

          <div className={styles.imagesGrid}>
            {/* Logo Container */}
            <div className={styles.imageContainer}>
              <h3 className={styles.imageTitle}>Logo</h3>
              <input
                type="file"
                id="logoInput"
                accept="image/*"
                onChange={handleLogoChange}
                className={styles.fileInput}
              />
              <label htmlFor="logoInput" className={styles.uploadButton}>
                {logoPreview ? 'Cambiar Logo' : 'Subir Logo'}
              </label>

              {logoPreview && (
                <div className={styles.imagePreview}>
                  <img src={logoPreview} alt="Logo preview" className={styles.logoImage} />
                  <button
                    type="button"
                    onClick={handleRemoveLogo}
                    className={styles.removeButton}
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>

            {/* Banner Container */}
            <div className={styles.imageContainer}>
              <h3 className={styles.imageTitle}>Banner</h3>
              <input
                type="file"
                id="bannerInput"
                accept="image/*"
                onChange={handleBannerChange}
                className={styles.fileInput}
              />
              <label htmlFor="bannerInput" className={styles.uploadButton}>
                {bannerPreview ? 'Cambiar Banner' : 'Subir Banner'}
              </label>

              {bannerPreview && (
                <div className={styles.imagePreview}>
                  <img src={bannerPreview} alt="Banner preview" className={styles.bannerImage} />
                  <button
                    type="button"
                    onClick={handleRemoveBanner}
                    className={styles.removeButton}
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>

            {/* Poster Container */}
            <div className={styles.imageContainer}>
              <h3 className={styles.imageTitle}>Cartel</h3>
              <input
                type="file"
                id="cartelInput"
                accept="image/*"
                onChange={handleCartelChange}
                className={styles.fileInput}
              />
              <label htmlFor="cartelInput" className={styles.uploadButton}>
                {cartelPreview ? 'Cambiar Cartel' : 'Subir Cartel'}
              </label>

              {cartelPreview && (
                <div className={styles.imagePreview}>
                  <img src={cartelPreview} alt="Cartel preview" className={styles.cartelImage} />
                  <button
                    type="button"
                    onClick={handleRemoveCartel}
                    className={styles.removeButton}
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
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
