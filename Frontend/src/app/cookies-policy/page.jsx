'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { logout } from '@/lib/utils/auth';

export default function CookiesPolicy() {

    useEffect(() => {
        document.title = 'Cookies Policy - Virtual Fair';
    }, []);

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <Navbar userName="Usuario" onLogout={handleLogout} />

            <main className={styles.container}>
                <h1 className={styles.title}>Cookies Policy</h1>
                <p className={styles.lastUpdate}>Last updated: November 3, 2025</p>

                <div className={styles.content}>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. What Are Cookies?</h2>
                        <p className={styles.text}>
                            Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when
                            you visit websites. They help websites remember your preferences and improve your browsing experience.
                        </p>
                        <p className={styles.text}>
                            Cookies contain information such as language preferences, session identifiers, and user settings.
                            They do not contain personal information unless you have explicitly provided it.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Types of Cookies We Use</h2>

                        <h3 className={styles.subsectionTitle}>Essential Cookies (Always Active)</h3>
                        <p className={styles.text}>
                            These cookies are necessary for the website to function properly. They enable core functionality
                            such as security, authentication, and accessibility features.
                        </p>
                        <div className={styles.cookieTable}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Cookie Name</th>
                                        <th>Purpose</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>auth_token</td>
                                        <td>Authentication and session management</td>
                                        <td>30 days</td>
                                    </tr>
                                    <tr>
                                        <td>csrf_token</td>
                                        <td>Security - prevents cross-site request forgery</td>
                                        <td>Session</td>
                                    </tr>
                                    <tr>
                                        <td>session_id</td>
                                        <td>Maintains user session state</td>
                                        <td>Session</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className={styles.subsectionTitle}>Performance Cookies</h3>
                        <p className={styles.text}>
                            These cookies collect information about how visitors use our website, such as which pages are visited
                            most often. This data helps us improve website performance and user experience.
                        </p>
                        <div className={styles.cookieTable}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Cookie Name</th>
                                        <th>Purpose</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>_ga</td>
                                        <td>Google Analytics - distinguishes users</td>
                                        <td>2 years</td>
                                    </tr>
                                    <tr>
                                        <td>_gid</td>
                                        <td>Google Analytics - distinguishes users</td>
                                        <td>24 hours</td>
                                    </tr>
                                    <tr>
                                        <td>analytics_session</td>
                                        <td>Tracks page views and interactions</td>
                                        <td>30 minutes</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className={styles.subsectionTitle}>Functionality Cookies</h3>
                        <p className={styles.text}>
                            These cookies allow the website to remember choices you make (such as language, region, or display
                            preferences) and provide enhanced, personalized features.
                        </p>
                        <div className={styles.cookieTable}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Cookie Name</th>
                                        <th>Purpose</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>language_pref</td>
                                        <td>Stores user language preference</td>
                                        <td>1 year</td>
                                    </tr>
                                    <tr>
                                        <td>theme_mode</td>
                                        <td>Remembers display theme (light/dark)</td>
                                        <td>1 year</td>
                                    </tr>
                                    <tr>
                                        <td>user_preferences</td>
                                        <td>Stores various user settings</td>
                                        <td>1 year</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className={styles.subsectionTitle}>Marketing Cookies</h3>
                        <p className={styles.text}>
                            These cookies track your browsing activity to deliver relevant advertisements. They may be set by
                            third-party advertising networks with our permission.
                        </p>
                        <div className={styles.cookieTable}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Cookie Name</th>
                                        <th>Purpose</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>_fbp</td>
                                        <td>Facebook Pixel - ad targeting and measurement</td>
                                        <td>3 months</td>
                                    </tr>
                                    <tr>
                                        <td>IDE</td>
                                        <td>Google DoubleClick - ad serving</td>
                                        <td>1 year</td>
                                    </tr>
                                    <tr>
                                        <td>marketing_consent</td>
                                        <td>Stores marketing preferences</td>
                                        <td>1 year</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Third-Party Cookies</h2>
                        <p className={styles.text}>
                            We use services from third-party providers that may set cookies on your device:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Google Analytics:</strong> Web analytics service to understand user behavior</li>
                            <li><strong>Facebook Pixel:</strong> Conversion tracking and audience building</li>
                            <li><strong>LinkedIn Insight Tag:</strong> Professional audience analytics</li>
                            <li><strong>Hotjar:</strong> User behavior analytics and feedback tools</li>
                        </ul>
                        <p className={styles.text}>
                            These third parties have their own privacy policies. We recommend reviewing them:
                        </p>
                        <ul className={styles.list}>
                            <li>Google Analytics: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                            <li>Facebook: <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                            <li>LinkedIn: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Cookie Management and Consent</h2>
                        <p className={styles.text}>
                            When you first visit our website, you will see a cookie banner requesting your consent for
                            non-essential cookies. You can:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Accept all cookies:</strong> Allow all cookies for the best experience</li>
                            <li><strong>Customize settings:</strong> Choose which cookie categories to accept</li>
                            <li><strong>Reject non-essential cookies:</strong> Only essential cookies will be used</li>
                        </ul>
                        <p className={styles.text}>
                            You can change your cookie preferences at any time by clicking the "Cookie Settings" link in
                            the footer or by accessing your browser settings.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Browser Cookie Settings</h2>
                        <p className={styles.text}>
                            Most web browsers allow you to control cookies through their settings. Here's how to manage
                            cookies in popular browsers:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                            <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                            <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                            <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                        </ul>
                        <p className={styles.text}>
                            Note: Blocking all cookies may affect website functionality and your user experience.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Do Not Track Signals</h2>
                        <p className={styles.text}>
                            Some browsers offer a "Do Not Track" (DNT) feature that sends a signal to websites requesting
                            not to be tracked. Currently, there is no industry standard for responding to DNT signals.
                            We respect your privacy choices and provide cookie management options as described above.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Updates to This Policy</h2>
                        <p className={styles.text}>
                            We may update this cookies policy periodically to reflect changes in our practices or applicable
                            laws. The "Last updated" date at the top indicates when this policy was last revised. Continued
                            use of our website after changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Contact Us</h2>
                        <p className={styles.text}>
                            If you have questions about our use of cookies or this cookies policy, please contact us:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Email:</strong> privacy@davante.com</li>
                            <li><strong>Phone:</strong> +34 910 123 456</li>
                            <li><strong>Address:</strong> Calle Innovación 123, 28001 Madrid, Spain</li>
                        </ul>
                    </section>

                </div>
            </main>

            <Footer />
        </>
    );
}