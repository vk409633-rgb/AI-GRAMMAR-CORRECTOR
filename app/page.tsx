import GrammarChecker from './components/GrammarChecker'
import Header from './components/Header'
import Footer from './components/Footer'
import AdUnit from './components/AdUnit'
import styles from './page.module.css'

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <div className="container">
                    {/* Hero Section */}
                    <section className={styles.hero}>
                        <h1 className={`${styles.title} fade-in`}>
                            Perfect Your Writing with{' '}
                            <span className="gradient-text">AI-Powered</span> Grammar Correction
                        </h1>
                        <p className={styles.subtitle}>
                            Transform your text instantly with intelligent grammar checking,
                            spelling correction, and style improvements powered by advanced AI.
                        </p>
                    </section>

                    {/* Top Ad Unit */}
                    <AdUnit adSlot="2146228323" />

                    {/* Grammar Checker Component */}
                    <GrammarChecker />

                    {/* Features Section */}
                    <section id="features" className={styles.features}>
                        <h2 className={styles.featuresTitle}>Why Choose Our AI Grammar Corrector?</h2>
                        <div className={styles.featuresGrid}>
                            <div className={`${styles.featureCard} glass-card`}>
                                <div className={styles.featureIcon}>⚡</div>
                                <h3>Lightning Fast</h3>
                                <p>Get instant corrections powered by cutting-edge AI technology</p>
                            </div>

                            <div className={`${styles.featureCard} glass-card`}>
                                <div className={styles.featureIcon}>🎯</div>
                                <h3>Highly Accurate</h3>
                                <p>Advanced language models ensure precise grammar and style corrections</p>
                            </div>

                            <div className={`${styles.featureCard} glass-card`}>
                                <div className={styles.featureIcon}>🔒</div>
                                <h3>Privacy First</h3>
                                <p>Your text is never stored. All processing happens in real-time</p>
                            </div>

                            <div className={`${styles.featureCard} glass-card`}>
                                <div className={styles.featureIcon}>💡</div>
                                <h3>Smart Suggestions</h3>
                                <p>Receive intelligent insights about your writing improvements</p>
                            </div>

                            <div className={`${styles.featureCard} glass-card`}>
                                <div className={styles.featureIcon}>🌐</div>
                                <h3>Always Available</h3>
                                <p>Access powerful grammar checking anytime, anywhere</p>
                            </div>

                            <div className={`${styles.featureCard} glass-card`}>
                                <div className={styles.featureIcon}>✨</div>
                                <h3>Context Aware</h3>
                                <p>AI understands context to provide meaningful corrections</p>
                            </div>
                        </div>
                    </section>

                    {/* Bottom Ad Unit */}
                    <AdUnit adSlot="2146228323" />
                </div>
            </main>

            <Footer />
        </div>
    )
}
