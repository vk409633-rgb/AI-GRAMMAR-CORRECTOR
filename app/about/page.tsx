import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './about.module.css'

export const metadata = {
    title: 'About Us - AI Grammar Corrector',
    description: 'Learn about our mission to help people improve their writing with AI-powered grammar correction.',
}

export default function About() {
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
                            About <span className="gradient-text">Us</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Empowering better communication through AI-powered grammar correction
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className={`${styles.section} glass-card`}>
                        <div className={styles.iconHeader}>
                            <span className={styles.bigIcon}>🎯</span>
                        </div>
                        <h2>Our Mission</h2>
                        <p>
                            At AI Grammar Corrector, our mission is simple: to help everyone write better.
                            We believe that clear, grammatically correct writing is essential for effective
                            communication, whether you're a student, professional, or casual writer.
                        </p>
                        <p>
                            By leveraging cutting-edge AI technology, we make professional-grade grammar
                            correction accessible to everyone, completely free of charge.
                        </p>
                    </div>

                    {/* What We Do */}
                    <div className={`${styles.section} glass-card`}>
                        <div className={styles.iconHeader}>
                            <span className={styles.bigIcon}>✨</span>
                        </div>
                        <h2>What We Do</h2>
                        <p>
                            We provide instant, AI-powered grammar correction that goes beyond simple
                            spell-checking. Our service:
                        </p>
                        <ul className={styles.featureList}>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                <div>
                                    <strong>Corrects Grammar Errors:</strong> Identifies and fixes grammatical
                                    mistakes in your text
                                </div>
                            </li>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                <div>
                                    <strong>Fixes Spelling:</strong> Catches and corrects spelling mistakes
                                    you might have missed
                                </div>
                            </li>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                <div>
                                    <strong>Improves Clarity:</strong> Suggests improvements to sentence
                                    structure and readability
                                </div>
                            </li>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                <div>
                                    <strong>Maintains Your Voice:</strong> Preserves your original tone and
                                    meaning while improving quality
                                </div>
                            </li>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                <div>
                                    <strong>Provides Insights:</strong> Offers suggestions about what was
                                    improved and why
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Technology */}
                    <div className={`${styles.section} glass-card`}>
                        <div className={styles.iconHeader}>
                            <span className={styles.bigIcon}>🤖</span>
                        </div>
                        <h2>Our Technology</h2>
                        <p>
                            We use OpenAI's GPT-4o-mini, one of the most advanced language models available,
                            to power our grammar correction features. This ensures:
                        </p>
                        <div className={styles.techGrid}>
                            <div className={styles.techCard}>
                                <span className={styles.techIcon}>⚡</span>
                                <h3>Speed</h3>
                                <p>Lightning-fast corrections in seconds</p>
                            </div>
                            <div className={styles.techCard}>
                                <span className={styles.techIcon}>🎯</span>
                                <h3>Accuracy</h3>
                                <p>Highly accurate grammar and style improvements</p>
                            </div>
                            <div className={styles.techCard}>
                                <span className={styles.techIcon}>🧠</span>
                                <h3>Intelligence</h3>
                                <p>Context-aware corrections that understand meaning</p>
                            </div>
                            <div className={styles.techCard}>
                                <span className={styles.techIcon}>🔄</span>
                                <h3>Continuous Learning</h3>
                                <p>AI that improves over time</p>
                            </div>
                        </div>
                    </div>

                    {/* Privacy First */}
                    <div className={`${styles.section} glass-card`}>
                        <div className={styles.iconHeader}>
                            <span className={styles.bigIcon}>🔒</span>
                        </div>
                        <h2>Privacy First</h2>
                        <p>
                            We take your privacy seriously. Unlike many other services:
                        </p>
                        <div className={styles.privacyGrid}>
                            <div className={styles.privacyItem}>
                                <span className={styles.privacyIcon}>❌</span>
                                <p><strong>We DON'T store your text</strong></p>
                            </div>
                            <div className={styles.privacyItem}>
                                <span className={styles.privacyIcon}>❌</span>
                                <p><strong>We DON'T create user profiles</strong></p>
                            </div>
                            <div className={styles.privacyItem}>
                                <span className={styles.privacyIcon}>❌</span>
                                <p><strong>We DON'T sell your data</strong></p>
                            </div>
                            <div className={styles.privacyItem}>
                                <span className={styles.privacyIcon}>✅</span>
                                <p><strong>We DO process in real-time</strong></p>
                            </div>
                            <div className={styles.privacyItem}>
                                <span className={styles.privacyIcon}>✅</span>
                                <p><strong>We DO delete data immediately</strong></p>
                            </div>
                            <div className={styles.privacyItem}>
                                <span className={styles.privacyIcon}>✅</span>
                                <p><strong>We DO use HTTPS encryption</strong></p>
                            </div>
                        </div>
                        <p className={styles.privacyNote}>
                            Learn more in our <Link href="/privacy">Privacy Policy</Link>
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div className={`${styles.section} glass-card`}>
                        <div className={styles.iconHeader}>
                            <span className={styles.bigIcon}>🌟</span>
                        </div>
                        <h2>Why Choose Us?</h2>
                        <div className={styles.benefitsGrid}>
                            <div className={styles.benefitCard}>
                                <h3>100% Free</h3>
                                <p>No subscriptions, no hidden fees, no credit card required</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <h3>No Sign-Up</h3>
                                <p>Start using immediately without creating an account</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <h3>Privacy Focused</h3>
                                <p>Your text is never stored or shared</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <h3>AI-Powered</h3>
                                <p>Advanced language models for accurate corrections</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <h3>Fast & Easy</h3>
                                <p>Simple interface, instant results</p>
                            </div>
                            <div className={styles.benefitCard}>
                                <h3>Always Available</h3>
                                <p>Access anytime, anywhere, on any device</p>
                            </div>
                        </div>
                    </div>

                    {/* Our Values */}
                    <div className={`${styles.section} glass-card`}>
                        <div className={styles.iconHeader}>
                            <span className={styles.bigIcon}>💎</span>
                        </div>
                        <h2>Our Values</h2>
                        <div className={styles.valuesGrid}>
                            <div className={styles.valueItem}>
                                <span className={styles.valueNumber}>01</span>
                                <h3>Accessibility</h3>
                                <p>
                                    We believe everyone deserves access to quality writing tools,
                                    regardless of their budget or background.
                                </p>
                            </div>
                            <div className={styles.valueItem}>
                                <span className={styles.valueNumber}>02</span>
                                <h3>Privacy</h3>
                                <p>
                                    Your data is yours. We're committed to protecting your privacy
                                    and never storing or sharing your content.
                                </p>
                            </div>
                            <div className={styles.valueItem}>
                                <span className={styles.valueNumber}>03</span>
                                <h3>Quality</h3>
                                <p>
                                    We use the best AI technology available to ensure accurate,
                                    helpful corrections every time.
                                </p>
                            </div>
                            <div className={styles.valueItem}>
                                <span className={styles.valueNumber}>04</span>
                                <h3>Simplicity</h3>
                                <p>
                                    Writing tools should be easy to use. We focus on a clean,
                                    intuitive interface that anyone can navigate.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Get in Touch */}
                    <div className={`${styles.ctaSection} glass-card`}>
                        <h2>Have Questions?</h2>
                        <p>
                            We'd love to hear from you! Whether you have feedback, questions,
                            or just want to say hello, feel free to reach out.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className="btn btn-primary">
                                <span>📧</span>
                                Contact Us
                            </Link>
                            <a href="mailto:vk409633@gmail.com" className="btn btn-secondary">
                                <span>✉️</span>
                                Email Directly
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
