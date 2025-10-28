/**
 * Mock data for the Virtual Fair Admin Dashboard
 * This file contains simulated data for development and testing purposes
 * In production, this data will come from the API/Database
 */

/**
 * Key Performance Indicators (KPIs) data
 * @type {Object}
 */
export const kpiData = {
    totalAttendees: 1247,
    activeExhibitors: 38,
    totalInteractions: 5623,
    liveEvents: 4
};

/**
 * Attendees data over time (for line chart)
 * @type {Array<{day: string, attendees: number}>}
 */
export const attendeesData = [
    { day: 'Mon', attendees: 820 },
    { day: 'Tue', attendees: 950 },
    { day: 'Wed', attendees: 1050 },
    { day: 'Thu', attendees: 1180 },
    { day: 'Fri', attendees: 1247 }
];

/**
 * Interactions data by category (for bar chart)
 * @type {Array<{category: string, count: number}>}
 */
export const interactionsData = [
    { category: 'Chats', count: 2345 },
    { category: 'Visits', count: 1876 },
    { category: 'Downloads', count: 892 },
    { category: 'Calls', count: 510 }
];

/**
 * Top 5 most visited stands
 * @type {Array<{id: number, name: string, category: string, visits: number, status: string}>}
 */
export const topStands = [
    { id: 1, name: 'TechNova Solutions', category: 'Technology', visits: 342, status: 'active' },
    { id: 2, name: 'Green Energy Corp', category: 'Energy', visits: 298, status: 'active' },
    { id: 3, name: 'HealthPlus Medical', category: 'Healthcare', visits: 276, status: 'active' },
    { id: 4, name: 'EduTech Academy', category: 'Education', visits: 251, status: 'active' },
    { id: 5, name: 'FoodHub International', category: 'Food', visits: 234, status: 'active' }
];