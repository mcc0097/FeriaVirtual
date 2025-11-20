'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import { logout } from '@/lib/utils/auth';

export default function LegalNotice() {

    useEffect(() => {
        document.title = 'Legal Notice - Virtual Fair';
    }, []);

    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <Navbar userName="Usuario" onLogout={handleLogout} />

            <main className={styles.container}>
                <h1 className={styles.title}>Legal Notice</h1>
                <p className={styles.lastUpdate}>Last updated: November 3, 2025</p>

                <div className={styles.content}>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Company Information</h2>
                        <p className={styles.text}>
                            In compliance with Law 34/2002, of July 11, on Services of the Information Society and Electronic Commerce (LSSI-CE),
                            the following information is provided:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Company name:</strong> Davante Virtual Fairs S.L.</li>
                            <li><strong>Tax ID (CIF):</strong> B-12345678</li>
                            <li><strong>Registered address:</strong> Calle Innovación 123, 28001 Madrid, Spain</li>
                            <li><strong>Email:</strong> legal@davante.com</li>
                            <li><strong>Phone:</strong> +34 910 123 456</li>
                            <li><strong>Commercial Registry:</strong> Madrid, Volume 1234, Book 567, Sheet M-89012</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Purpose of the Website</h2>
                        <p className={styles.text}>
                            This website provides a virtual fair platform where companies can showcase their products, services,
                            and job opportunities. The platform facilitates interactions between exhibitors and attendees through
                            chatbots and virtual stands.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Terms of Use</h2>
                        <p className={styles.text}>
                            Access to and use of this website implies acceptance of these terms and conditions. Users agree to:
                        </p>
                        <ul className={styles.list}>
                            <li>Use the platform in accordance with current legislation and good practices</li>
                            <li>Not engage in activities that may damage the platform's image or interests</li>
                            <li>Not interfere with the security or proper functioning of the platform</li>
                            <li>Not introduce viruses, malware, or any harmful technology</li>
                            <li>Not attempt unauthorized access to restricted areas</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Intellectual Property</h2>
                        <p className={styles.text}>
                            All content on this website, including but not limited to text, graphics, logos, images, software,
                            and source code, is the property of Davante Virtual Fairs S.L. or its content suppliers and is
                            protected by Spanish and international copyright laws.
                        </p>
                        <p className={styles.text}>
                            Reproduction, distribution, or modification of any content without prior written authorization is prohibited.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Limitation of Liability</h2>
                        <p className={styles.text}>
                            Davante Virtual Fairs S.L. is not responsible for:
                        </p>
                        <ul className={styles.list}>
                            <li>Interruptions, errors, or omissions in the service</li>
                            <li>Viruses or harmful elements that may affect user equipment</li>
                            <li>Content provided by third-party exhibitors</li>
                            <li>Links to external websites</li>
                            <li>Damages caused by improper use of the platform</li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Modifications</h2>
                        <p className={styles.text}>
                            Davante Virtual Fairs S.L. reserves the right to modify these terms and conditions at any time.
                            Users will be notified of significant changes through the website.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Applicable Law and Jurisdiction</h2>
                        <p className={styles.text}>
                            These terms are governed by Spanish law. For any dispute arising from the use of this website,
                            the parties submit to the courts and tribunals of Madrid, Spain, waiving any other jurisdiction
                            that may apply.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Contact</h2>
                        <p className={styles.text}>
                            For any questions regarding this legal notice, please contact us at:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Email:</strong> legal@davante.com</li>
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