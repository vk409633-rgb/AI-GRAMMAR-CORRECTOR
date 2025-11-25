import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import styles from './contact.module.css'

export const metadata = {
    title: 'Contact Us - AI Grammar Corrector',
    description: 'Get in touch with us for questions, feedback, or support about our AI Grammar Corrector.',
}

export default function Contact() {
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
                            Get in <span className="gradient-text">Touch</span>
                        </h1>
                        <p className={styles.subtitle}>
                            Have questions, feedback, or need support? We'd love to hear from you!
                        </p>
                    </div>

                    <div className={styles.contentGrid}>
                        {/* Contact Form */}
                        <div className={`${styles.formSection} glass-card`}>
                            <h2 className={styles.sectionTitle}>Send us a Message</h2>
                            <ContactForm />
                        </div>

                        {/* Contact Information */}
                        <div className={styles.infoSection}>
                            <div className={`${styles.infoCard} glass-card`}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>📧</span>
                                </div>
                                <h3>Email Us</h3>
                                <p>
                                    <a href="mailto:vk409633@gmail.com">vk409633@gmail.com</a>
                                </p>
                                <p className={styles.infoText}>
                                    We typically respond within 24-48 hours
                                </p>
                            </div>

                            <div className={`${styles.infoCard} glass-card`}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>💬</span>
                                </div>
                                <h3>Support</h3>
                                <p className={styles.infoText}>
                                    Need help with the grammar corrector? Check our documentation or send us an email.
                                </p>
                            </div>

                            <div className={`${styles.infoCard} glass-card`}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>🐛</span>
                                </div>
                                <h3>Report a Bug</h3>
                                <p className={styles.infoText}>
                                    Found an issue? Let us know so we can fix it and improve the service.
                                </p>
                            </div>

                            <div className={`${styles.infoCard} glass-card`}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>💡</span>
                                </div>
                                <h3>Feature Request</h3>
                                <p className={styles.infoText}>
                                    Have an idea for a new feature? We'd love to hear your suggestions!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className={`${styles.faqSection} glass-card`}>
                        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>

                        <div className={styles.faqGrid}>
                            <div className={styles.faqItem}>
                                <h3>How do I use the grammar corrector?</h3>
                                <p>
                                    Simply paste or type your text into the input field on the home page and click
                                    "Correct Grammar". Our AI will analyze and improve your text instantly.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>Is my data stored?</h3>
                                <p>
                                    No! We have a zero-storage policy. Your text is processed in real-time and
                                    immediately deleted after correction. See our <Link href="/privacy">Privacy Policy</Link> for details.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>What's the character limit?</h3>
                                <p>
                                    Currently, you can correct up to 5,000 characters at a time. This is sufficient
                                    for most documents, emails, and articles.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>How accurate is the AI?</h3>
                                <p>
                                    We use OpenAI's GPT-4o-mini model, which provides highly accurate grammar
                                    corrections. However, we recommend reviewing the suggestions before using them.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>Is it free to use?</h3>
                                <p>
                                    Yes! Our grammar correction service is free to use. We're committed to helping
                                    everyone improve their writing.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>Can I use it for commercial purposes?</h3>
                                <p>
                                    Yes, you can use our service for both personal and commercial writing projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
