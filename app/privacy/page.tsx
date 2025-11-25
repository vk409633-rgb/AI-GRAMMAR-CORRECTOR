import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './privacy.module.css'

export const metadata = {
    title: 'Privacy Policy - AI Grammar Corrector',
    description: 'Learn about how we protect your privacy and handle your data in our AI Grammar Corrector application.',
}

export default function PrivacyPolicy() {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <div className="container">
                    <div className={styles.header}>
                        <Link href="/" className={styles.backLink}>
                            ← Back to Home
                        </Link>
                        <h1 className={styles.title}>
                            Privacy <span className="gradient-text">Policy</span>
                        </h1>
                        <p className={styles.lastUpdated}>Last Updated: November 25, 2025</p>
                    </div>

                    <div className={`${styles.content} glass-card`}>
                        <section className={styles.section}>
                            <h2>Our Commitment to Privacy</h2>
                            <p>
                                At AI Grammar Corrector, we take your privacy seriously. This policy outlines how we handle
                                your information when you use our grammar correction service.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>🔒 Data Collection</h2>
                            <h3>What We Collect</h3>
                            <ul>
                                <li><strong>Text Input:</strong> The text you submit for grammar correction</li>
                                <li><strong>Usage Data:</strong> Basic analytics about how you use the service</li>
                                <li><strong>Technical Data:</strong> Browser type, device information, and IP address</li>
                            </ul>

                            <h3>What We DON'T Collect</h3>
                            <ul>
                                <li>We do NOT store your submitted text</li>
                                <li>We do NOT create user accounts or profiles</li>
                                <li>We do NOT track you across other websites</li>
                                <li>We do NOT sell your data to third parties</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>💾 Data Storage</h2>
                            <p>
                                <strong>Zero Storage Policy:</strong> Your text is processed in real-time and is never
                                stored in our databases. Once you receive your corrected text, the original input is
                                immediately discarded.
                            </p>
                            <div className={styles.highlight}>
                                <p>
                                    ✅ <strong>Your text is processed → Results returned → Data deleted</strong>
                                </p>
                                <p>This entire process happens in seconds, with no persistent storage.</p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>🤖 Third-Party Services</h2>
                            <h3>OpenAI API</h3>
                            <p>
                                We use OpenAI's API to power our grammar correction features. When you submit text:
                            </p>
                            <ul>
                                <li>Your text is sent to OpenAI's servers for processing</li>
                                <li>OpenAI processes the text and returns corrections</li>
                                <li>OpenAI may use submitted data to improve their models (per their policy)</li>
                                <li>You can review OpenAI's privacy policy at: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer">openai.com/privacy</a></li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>🍪 Cookies and Tracking</h2>
                            <p>
                                We use minimal cookies and tracking:
                            </p>
                            <ul>
                                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                                <li><strong>Analytics:</strong> Basic usage statistics to improve our service</li>
                                <li><strong>No Advertising Cookies:</strong> We don't use cookies for advertising purposes</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>🔐 Data Security</h2>
                            <p>We implement industry-standard security measures:</p>
                            <ul>
                                <li>HTTPS encryption for all data transmission</li>
                                <li>Secure API key management</li>
                                <li>Regular security audits and updates</li>
                                <li>No persistent storage of user content</li>
                            </ul>
                        </section>

                        <section className={styles.section}>
                            <h2>👤 Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Know what data we collect</li>
                                <li>Request deletion of any stored data</li>
                                <li>Opt-out of analytics tracking</li>
                                <li>Contact us with privacy concerns</li>
                            </ul>
                            <p>
                                Since we don't store your text submissions, there's no personal content to delete.
                                However, if you have concerns, please <Link href="/contact">contact us</Link>.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>👶 Children's Privacy</h2>
                            <p>
                                Our service is not directed to children under 13. We do not knowingly collect
                                information from children under 13. If you believe we have collected information
                                from a child under 13, please contact us immediately.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>🌍 International Users</h2>
                            <p>
                                Our service is available globally. By using our service, you consent to the transfer
                                of your information to the United States and other countries where our service providers
                                operate.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>📝 Changes to This Policy</h2>
                            <p>
                                We may update this privacy policy from time to time. We will notify users of any
                                material changes by updating the "Last Updated" date at the top of this policy.
                            </p>
                        </section>

                        <section className={styles.section}>
                            <h2>📧 Contact Us</h2>
                            <p>
                                If you have questions about this privacy policy or our data practices, please contact us:
                            </p>
                            <div className={styles.contactInfo}>
                                <p><strong>Email:</strong> <a href="mailto:vk409633@gmail.com">vk409633@gmail.com</a></p>
                                <p><strong>Contact Page:</strong> <Link href="/contact">Visit our contact page</Link></p>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2>✅ Summary</h2>
                            <div className={styles.summary}>
                                <p>✅ We don't store your text submissions</p>
                                <p>✅ We use OpenAI API for grammar correction</p>
                                <p>✅ We collect minimal analytics data</p>
                                <p>✅ We use HTTPS encryption</p>
                                <p>✅ We don't sell your data</p>
                                <p>✅ You can contact us anytime with concerns</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
