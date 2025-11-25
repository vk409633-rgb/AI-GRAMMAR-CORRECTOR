import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>✍️</span>
                        <span className={styles.logoText}>
                            AI <span className="gradient-text">Grammar</span>
                        </span>
                    </div>

                    <nav className={styles.nav}>
                        <a href="/#features" className={styles.navLink}>Features</a>
                        <a href="/about" className={styles.navLink}>About</a>
                        <a href="/contact" className={styles.navLink}>Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
