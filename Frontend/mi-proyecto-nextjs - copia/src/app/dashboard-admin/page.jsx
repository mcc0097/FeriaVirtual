'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './page.module.css';
// Import data
import { kpiData, attendeesData, interactionsData, topStands } from '@/constants/mockData';
// Import components
import Navbar from '@/components/layout/Navbar/Navbar';
import KPICard from '@/components/admin/KPICard/KPICard';
// Import utilities
import { getToken, decodeToken, logout } from '@/lib/utils/auth';

/**
 * Admin Dashboard Page
 * Main dashboard view for administrators with KPIs, charts and tables
 */
export default function AdminDashboard() {

    // State for username
    const [userName, setUserName] = useState('Usuario');

    /**
     * Check authentication on component mount
     * Gets user info from token if available
     */
    useEffect(() => {
        // Change page title
        document.title = 'Dashboard Admin - Virtual Fair';

        // Temporarily disabled authentication check
        // const token = getToken();

        // if (!token) {
        //   window.location.href = '/login';
        //   return;
        // }

        // try {
        //   const user = decodeToken(token);
        //   setUserName(user.username || 'Usuario');

        //   if (user.role !== 'admin') {
        //     window.location.href = '/403';
        //   }
        // } catch (error) {
        //   window.location.href = '/login';
        // }
    }, []);

    /**
     * Handles logout action
     */
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            {/* Navigation Bar */}
            <Navbar userName={userName} onLogout={handleLogout} />

            {/* Main Container */}
            <main className={styles.container}>
                <h1 className={styles.pageTitle}>Admin Dashboard</h1>
                <p className={styles.pageSubtitle}>Virtual Fair Management - Real-time Overview</p>

                {/* KPI Cards */}
                <div className={styles.kpiGrid}>
                    <KPICard
                        icon="👥"
                        title="Total Attendees"
                        value={kpiData.totalAttendees}
                        change="↑ 12.5% from yesterday"
                        changeType="positive"
                        iconColor="blue"
                    />

                    <KPICard
                        icon="🏢"
                        title="Active Exhibitors"
                        value={kpiData.activeExhibitors}
                        change="↑ 5 new today"
                        changeType="positive"
                        iconColor="green"
                    />

                    <KPICard
                        icon="💬"
                        title="Total Interactions"
                        value={kpiData.totalInteractions}
                        change="↑ 18.3% from yesterday"
                        changeType="positive"
                        iconColor="orange"
                    />

                    <KPICard
                        icon="📡"
                        title="Live Events"
                        value={kpiData.liveEvents}
                        change="🔴 Active now"
                        changeType="positive"
                        iconColor="purple"
                    />
                </div>

                {/* Charts */}
                <div className={styles.chartsGrid}>
                    {/* Chart 1 - Attendees Over Time (Line Chart) */}
                    <div className={styles.chartCard}>
                        <h2 className={styles.chartTitle}>📊 Attendees Over Time</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={attendeesData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="day" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="attendees"
                                    stroke="#003594"
                                    strokeWidth={3}
                                    name="Attendees"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Chart 2 - Interactions by Category (Bar Chart) */}
                    <div className={styles.chartCard}>
                        <h2 className={styles.chartTitle}>🎯 Interactions by Category</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={interactionsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="category" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar
                                    dataKey="count"
                                    fill="#667eea"
                                    name="Interactions"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Top Stands Table */}
                <div className={styles.tableCard}>
                    <h2 className={styles.tableTitle}>🏆 Top 5 Most Visited Stands</h2>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Stand Name</th>
                                <th>Category</th>
                                <th>Visits</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topStands.map((stand, index) => (
                                <tr key={stand.id}>
                                    <td>#{index + 1}</td>
                                    <td className={styles.standName}>{stand.name}</td>
                                    <td>{stand.category}</td>
                                    <td>{stand.visits.toLocaleString()}</td>
                                    <td>
                                        <span className={`${styles.badge} ${styles.badgeActive}`}>
                                            Active
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}