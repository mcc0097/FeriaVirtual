'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import KPICard from '@/components/admin/KPICard/KPICard';

/**
 * Company Dashboard Page
 * Dashboard view for company representatives with key metrics
 */
export default function CompanyDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mock data for company metrics - will be replaced with API calls
  const companyMetrics = {
    liveAttendees: 247,
    totalAttendees: 1834,
    totalStands: 5,
    jobApplications: 42,
    standVisits: 3156
  };

  useEffect(() => {
    // Change page title
    document.title = 'Company Dashboard - Virtual Fair';

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
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboardLayout}>
      {/* Navigation Bar */}
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

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Company Dashboard</h1>
          <p className={styles.pageSubtitle}>
            Welcome back, {user.username || user.email}! Here's your event overview
          </p>
        </div>

        {/* KPI Cards Grid */}
        <div className={styles.kpiGrid}>
          <KPICard
            icon="🔴"
            title="Live Attendees"
            value={companyMetrics.liveAttendees}
            change="Currently online"
            changeType="positive"
            iconColor="purple"
          />

          <KPICard
            icon="👥"
            title="Total Attendees"
            value={companyMetrics.totalAttendees}
            change="↑ 15.3% from last week"
            changeType="positive"
            iconColor="blue"
          />

          <KPICard
            icon="🏢"
            title="Stands/Exhibitors"
            value={companyMetrics.totalStands}
            change="Active stands"
            changeType="positive"
            iconColor="green"
          />

          <KPICard
            icon="📝"
            title="Job Applications"
            value={companyMetrics.jobApplications}
            change="↑ 8 new today"
            changeType="positive"
            iconColor="orange"
          />

          <KPICard
            icon="👁️"
            title="Stand Visits"
            value={companyMetrics.standVisits}
            change="↑ 24.7% from yesterday"
            changeType="positive"
            iconColor="blue"
          />
        </div>

        {/* Quick Actions Section */}
        <div className={styles.quickActionsSection}>
          <h2 className={styles.sectionTitle}>Quick Actions</h2>
          <div className={styles.actionsGrid}>
            <button className={styles.actionCard}>
              <span className={styles.actionIcon}>📊</span>
              <span className={styles.actionTitle}>View Analytics</span>
            </button>
            <button className={styles.actionCard}>
              <span className={styles.actionIcon}>✉️</span>
              <span className={styles.actionTitle}>Message Attendees</span>
            </button>
            <button className={styles.actionCard}>
              <span className={styles.actionIcon}>📢</span>
              <span className={styles.actionTitle}>Create Announcement</span>
            </button>
            <button className={styles.actionCard}>
              <span className={styles.actionIcon}>⚙️</span>
              <span className={styles.actionTitle}>Manage Stands</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}