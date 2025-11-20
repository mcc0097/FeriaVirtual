'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import styles from './page.module.css';
// Import data
import { kpiData, attendeesData, interactionsData, topStands } from '@/constants/mockData';
// Import components
import Navbar from '@/components/layout/Navbar/Navbar';
import KPICard from '@/components/admin/KPICard/KPICard';
import Footer from '@/components/layout/Footer/Footer';
// Import utilities
import { getToken, decodeToken, logout } from '@/lib/utils/auth.js';

/**
 * Admin Dashboard Page
 * Main dashboard view for administrators with KPIs, charts and tables
 */
export default function AdminDashboard() {

    // State for username
    const [userName, setUserName] = useState('Usuario');

    // State for time filter
    const [timeFilter, setTimeFilter] = useState('today');

    // State for search
    const [searchTerm, setSearchTerm] = useState('');

    /**
     * Check authentication on component mount
     */
    useEffect(() => {
        document.title = 'Dashboard Admin - Virtual Fair';
    }, []);

    /**
     * Handles logout action
     */
    const handleLogout = () => {
        logout();
    };

    /**
     * Filter stands based on search term
     */
    const filteredStands = topStands.filter(stand =>
        stand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        stand.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Data for pie chart (stand categories distribution)
    const categoryData = [
        { name: 'Technology', value: 35, color: '#003594' },
        { name: 'Finance', value: 25, color: '#667eea' },
        { name: 'Healthcare', value: 20, color: '#10b981' },
        { name: 'Education', value: 12, color: '#f59e0b' },
        { name: 'Others', value: 8, color: '#ef4444' }
    ];

    return (
        <>
            {/* Navigation Bar */}
            <Navbar userName={userName} onLogout={handleLogout} />

            {/* Main Container */}
            <main className={styles.container}>

                {/* Header Section */}
                <div className={styles.header}>
                    <div>
                        <h1 className={styles.pageTitle}>Admin Dashboard</h1>
                        <p className={styles.pageSubtitle}>Virtual Fair Management - Real-time Overview</p>
                    </div>

                    {/* Time Filter */}
                    <div className={styles.timeFilter}>
                        <button
                            className={`${styles.filterBtn} ${timeFilter === 'today' ? styles.filterBtnActive : ''}`}
                            onClick={() => setTimeFilter('today')}
                        >
                            Today
                        </button>
                        <button
                            className={`${styles.filterBtn} ${timeFilter === 'week' ? styles.filterBtnActive : ''}`}
                            onClick={() => setTimeFilter('week')}
                        >
                            This Week
                        </button>
                        <button
                            className={`${styles.filterBtn} ${timeFilter === 'month' ? styles.filterBtnActive : ''}`}
                            onClick={() => setTimeFilter('month')}
                        >
                            This Month
                        </button>
                    </div>
                </div>

                {/* Alerts Section */}
                <div className={styles.alertsSection}>
                    <div className={styles.alertCard}>
                        <div className={styles.alertIcon}>⚠️</div>
                        <div className={styles.alertContent}>
                            <h3 className={styles.alertTitle}>Server Maintenance</h3>
                            <p className={styles.alertText}>Scheduled maintenance on Sunday 3 AM - 5 AM</p>
                        </div>
                    </div>
                    <div className={`${styles.alertCard} ${styles.alertSuccess}`}>
                        <div className={styles.alertIcon}>✅</div>
                        <div className={styles.alertContent}>
                            <h3 className={styles.alertTitle}>Peak Traffic Handled</h3>
                            <p className={styles.alertText}>Successfully managed 2000+ concurrent users</p>
                        </div>
                    </div>
                </div>

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

                {/* Charts Section */}
                <div className={styles.chartsGrid}>
                    {/* Chart 1 - Attendees Over Time */}
                    <div className={styles.chartCard}>
                        <div className={styles.chartHeader}>
                            <h2 className={styles.chartTitle}>📊 Attendees Over Time</h2>
                            <span className={styles.chartSubtitle}>Last 5 days</span>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={attendeesData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="day" stroke="#666" />
                                <YAxis stroke="#666" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #ddd',
                                        borderRadius: '8px'
                                    }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="attendees"
                                    stroke="#003594"
                                    strokeWidth={3}
                                    name="Attendees"
                                    dot={{ fill: '#003594', r: 5 }}
                                    activeDot={{ r: 7 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Chart 2 - Interactions by Category */}
                    <div className={styles.chartCard}>
                        <div className={styles.chartHeader}>
                            <h2 className={styles.chartTitle}>🎯 Interactions by Category</h2>
                            <span className={styles.chartSubtitle}>Total interactions: 5,623</span>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={interactionsData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="category" stroke="#666" />
                                <YAxis stroke="#666" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #ddd',
                                        borderRadius: '8px'
                                    }}
                                />
                                <Legend />
                                <Bar
                                    dataKey="count"
                                    fill="#667eea"
                                    name="Interactions"
                                    radius={[8, 8, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Chart 3 - Category Distribution (Pie Chart) */}
                    <div className={styles.chartCard}>
                        <div className={styles.chartHeader}>
                            <h2 className={styles.chartTitle}>📊 Stand Categories</h2>
                            <span className={styles.chartSubtitle}>Distribution by sector</span>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className={styles.quickActions}>
                    <h2 className={styles.sectionTitle}>⚡ Quick Actions</h2>
                    <div className={styles.actionsGrid}>
                        <button className={styles.actionCard}>
                            <span className={styles.actionIcon}>➕</span>
                            <span className={styles.actionText}>Add Exhibitor</span>
                        </button>
                        <button className={styles.actionCard}>
                            <span className={styles.actionIcon}>📅</span>
                            <span className={styles.actionText}>Schedule Event</span>
                        </button>
                        <button className={styles.actionCard}>
                            <span className={styles.actionIcon}>📧</span>
                            <span className={styles.actionText}>Send Newsletter</span>
                        </button>
                        <button className={styles.actionCard}>
                            <span className={styles.actionIcon}>📊</span>
                            <span className={styles.actionText}>Export Report</span>
                        </button>
                    </div>
                </div>

                {/* Top Stands Table */}
                <div className={styles.tableCard}>
                    <div className={styles.tableHeader}>
                        <h2 className={styles.tableTitle}>🏆 Top Most Visited Stands</h2>
                        <input
                            type="text"
                            placeholder="Search stands..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Stand Name</th>
                                    <th>Category</th>
                                    <th>Visits</th>
                                    <th>Interactions</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStands.map((stand, index) => (
                                    <tr key={stand.id}>
                                        <td>
                                            <div className={styles.rankBadge}>
                                                #{index + 1}
                                            </div>
                                        </td>
                                        <td className={styles.standName}>
                                            <div className={styles.standNameWrapper}>
                                                <div className={styles.standAvatar}>{stand.name.charAt(0)}</div>
                                                {stand.name}
                                            </div>
                                        </td>
                                        <td>
                                            <span className={styles.categoryTag}>{stand.category}</span>
                                        </td>
                                        <td>{stand.visits.toLocaleString()}</td>
                                        <td>{Math.floor(stand.visits * 0.3).toLocaleString()}</td>
                                        <td>
                                            <span className={`${styles.badge} ${styles.badgeActive}`}>
                                                ● Active
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.actionButtons}>
                                                <button className={styles.actionBtn} title="View Details">👁️</button>
                                                <button className={styles.actionBtn} title="Edit">✏️</button>
                                                <button className={styles.actionBtn} title="Settings">⚙️</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}