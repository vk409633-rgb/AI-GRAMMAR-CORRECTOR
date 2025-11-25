import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerSection}>
                        <h3 className={styles.footerTitle}>AI Grammar Corrector</h3>
                        <p className={styles.footerDescription}>
                            Powered by OpenAI's advanced language models to provide
                            intelligent grammar correction and writing improvements.
                        </p>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSubtitle}>Privacy</h4>
                        <ul className={styles.footerList}>
                            <li>🔒 No data storage</li>
                            <li>⚡ Real-time processing</li>
                            <li>🛡️ Secure API calls</li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSubtitle}>Quick Links</h4>
                        <ul className={styles.footerList}>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a href="/privacy">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.footerSection}>
                        <h4 className={styles.footerSubtitle}>Resources</h4>
                        <ul className={styles.footerList}>
                            <li>
                                <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer">
                                    OpenAI Platform
                                </a>
                            </li>
                            <li>
                                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
                                    Next.js Docs
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.copyright}>
                        © {currentYear} AI Grammar Corrector. Built with Next.js & OpenAI.
                    </p>
                </div>
            </div>
        </footer>
    )
}
