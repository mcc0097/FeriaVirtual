'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { logout } from '@/lib/utils/auth';

export default function PrivacyPolicy() {

    useEffect(() => {
        document.title = 'Privacy Policy - Virtual Fair';
    }, []);

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <Navbar userName="Usuario" onLogout={handleLogout} />

            <main className={styles.container}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.lastUpdate}>Last updated: November 3, 2025</p>

                <div className={styles.content}>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Data Controller</h2>
                        <p className={styles.text}>
                            In accordance with the General Data Protection Regulation (GDPR) and Organic Law 3/2018,
                            on the Protection of Personal Data, we inform you that:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Controller:</strong> Davante Virtual Fairs S.L.</li>
                            <li><strong>Tax ID:</strong> B-12345678</li>
                            <li><strong>Address:</strong> Calle Innovación 123, 28001 Madrid, Spain</li>
                            <li><strong>Email:</strong> privacy@davante.com</li>
                            <li><strong>DPO Contact:</strong> dpo@davante.com</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. What Data We Collect</h2>
                        <p className={styles.text}>We collect the following types of personal data:</p>

                        <h3 className={styles.subsectionTitle}>Registration Data:</h3>
                        <ul className={styles.list}>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Company name and tax ID (for exhibitors)</li>
                            <li>Job title and professional information</li>
                        </ul>

                        <h3 className={styles.subsectionTitle}>Usage Data:</h3>
                        <ul className={styles.list}>
                            <li>IP address and device information</li>
                            <li>Browser type and version</li>
                            <li>Pages visited and time spent</li>
                            <li>Interactions with virtual stands</li>
                            <li>Chat conversations with exhibitors</li>
                        </ul>

                        <h3 className={styles.subsectionTitle}>Optional Data:</h3>
                        <ul className={styles.list}>
                            <li>Profile photo</li>
                            <li>Company logo (for exhibitors)</li>
                            <li>Social media links</li>
                            <li>Professional interests and preferences</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Purpose of Data Processing</h2>
                        <p className={styles.text}>We process your personal data for the following purposes:</p>
                        <ul className={styles.list}>
                            <li><strong>Service provision:</strong> To manage your account and provide access to the virtual fair platform</li>
                            <li><strong>Communication:</strong> To send event updates, notifications, and respond to inquiries</li>
                            <li><strong>Analytics:</strong> To improve our services and user experience</li>
                            <li><strong>Marketing:</strong> To send promotional communications (with your consent)</li>
                            <li><strong>Legal compliance:</strong> To fulfill legal obligations and protect our rights</li>
                            <li><strong>Security:</strong> To detect and prevent fraud and unauthorized access</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Legal Basis for Processing</h2>
                        <p className={styles.text}>We process your data based on:</p>
                        <ul className={styles.list}>
                            <li><strong>Contract:</strong> To fulfill our service agreement with you</li>
                            <li><strong>Consent:</strong> For marketing communications and optional features</li>
                            <li><strong>Legitimate interest:</strong> For analytics, security, and service improvement</li>
                            <li><strong>Legal obligation:</strong> To comply with applicable laws and regulations</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Data Retention</h2>
                        <p className={styles.text}>
                            We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Account data:</strong> Until you request deletion or 3 years of inactivity</li>
                            <li><strong>Transaction records:</strong> 6 years (legal requirement)</li>
                            <li><strong>Marketing data:</strong> Until you withdraw consent</li>
                            <li><strong>Analytics data:</strong> Anonymized after 2 years</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Data Sharing</h2>
                        <p className={styles.text}>
                            We may share your data with:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Service providers:</strong> Hosting, payment processing, email services (under strict confidentiality agreements)</li>
                            <li><strong>Exhibitors:</strong> When you interact with their virtual stands (with your consent)</li>
                            <li><strong>Authorities:</strong> When required by law or to protect our rights</li>
                            <li><strong>Business transfers:</strong> In case of merger, acquisition, or asset sale</li>
                        </ul>
                        <p className={styles.text}>
                            We do NOT sell your personal data to third parties.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Your Rights</h2>
                        <p className={styles.text}>
                            Under GDPR and Spanish data protection law, you have the following rights:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Access:</strong> Request a copy of your personal data</li>
                            <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                            <li><strong>Deletion:</strong> Request deletion of your data ("right to be forgotten")</li>
                            <li><strong>Restriction:</strong> Limit how we use your data</li>
                            <li><strong>Portability:</strong> Receive your data in a structured format</li>
                            <li><strong>Object:</strong> Object to processing based on legitimate interest</li>
                            <li><strong>Withdraw consent:</strong> Revoke consent at any time</li>
                            <li><strong>Complaint:</strong> Lodge a complaint with the Spanish Data Protection Agency (AEPD)</li>
                        </ul>
                        <p className={styles.text}>
                            To exercise your rights, contact us at <strong>privacy@davante.com</strong>
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Security Measures</h2>
                        <p className={styles.text}>
                            We implement appropriate technical and organizational measures to protect your data:
                        </p>
                        <ul className={styles.list}>
                            <li>SSL/TLS encryption for data transmission</li>
                            <li>Encrypted storage of sensitive information</li>
                            <li>Regular security audits and penetration testing</li>
                            <li>Access controls and authentication protocols</li>
                            <li>Employee training on data protection</li>
                            <li>Incident response and breach notification procedures</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>9. International Transfers</h2>
                        <p className={styles.text}>
                            Your data is primarily stored on servers located in the European Union. If we transfer data outside
                            the EU/EEA, we ensure adequate protection through:
                        </p>
                        <ul className={styles.list}>
                            <li>EU Standard Contractual Clauses</li>
                            <li>Adequacy decisions by the European Commission</li>
                            <li>Other approved safeguards under GDPR</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>10. Minors</h2>
                        <p className={styles.text}>
                            Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                            personal data from minors. If we become aware that we have collected data from a minor, we will
                            delete it promptly.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>11. Updates to This Policy</h2>
                        <p className={styles.text}>
                            We may update this privacy policy periodically. Significant changes will be communicated through
                            email or a prominent notice on our website. Continued use of our services after changes constitutes
                            acceptance of the updated policy.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>12. Contact Us</h2>
                        <p className={styles.text}>
                            For questions about this privacy policy or our data practices:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Email:</strong> privacy@davante.com</li>
                            <li><strong>DPO:</strong> dpo@davante.com</li>
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