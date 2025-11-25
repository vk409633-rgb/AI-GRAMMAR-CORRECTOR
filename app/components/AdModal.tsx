'use client'

import { useState, useEffect } from 'react'
import styles from './AdModal.module.css'

interface AdModalProps {
    isOpen: boolean
    onClose: () => void
    onAdWatched: () => void
    featureName: string
}

export default function AdModal({ isOpen, onClose, onAdWatched, featureName }: AdModalProps) {
    const [countdown, setCountdown] = useState(5)
    const [adWatched, setAdWatched] = useState(false)

    useEffect(() => {
        if (isOpen && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
            return () => clearTimeout(timer)
        } else if (countdown === 0 && !adWatched) {
            setAdWatched(true)
        }
    }, [isOpen, countdown, adWatched])

    useEffect(() => {
        if (isOpen) {
            setCountdown(5)
            setAdWatched(false)

            // Push AdSense ads when modal opens
            try {
                if (typeof window !== 'undefined') {
                    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
                }
            } catch (err) {
                console.error('AdSense error:', err)
            }
        }
    }, [isOpen])

    const handleUnlock = () => {
        onAdWatched()
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    ✕
                </button>

                <div className={styles.content}>
                    <div className={styles.icon}>🎁</div>
                    <h2 className={styles.title}>Unlock Pro Feature</h2>
                    <p className={styles.subtitle}>
                        Watch a short ad to unlock <strong>{featureName}</strong>
                    </p>

                    {/* Ad Container */}
                    <div className={styles.adContainer}>
                        {countdown > 0 ? (
                            <div className={styles.adPlaceholder}>
                                <div className={styles.adIcon}>📺</div>
                                <p className={styles.adText}>Advertisement</p>
                                <div className={styles.countdownCircle}>
                                    <span className={styles.countdownNumber}>{countdown}</span>
                                </div>
                                <p className={styles.adSubtext}>Please wait {countdown} seconds...</p>
                            </div>
                        ) : (
                            <div className={styles.adComplete}>
                                <div className={styles.checkIcon}>✓</div>
                                <p className={styles.completeText}>Ad watched! You can now unlock the feature.</p>
                            </div>
                        )}
                    </div>

                    {/* Google AdSense Ad Unit */}
                    <div className={styles.adSenseContainer}>
                        <ins className="adsbygoogle"
                            style={{ display: 'block' }}
                            data-ad-client="ca-pub-7431808618156384"
                            data-ad-slot="2146228323"
                            data-ad-format="auto"
                            data-full-width-responsive="true"></ins>
                    </div>

                    {/* Unlock Button */}
                    <button
                        className={`btn btn-primary ${styles.unlockButton}`}
                        onClick={handleUnlock}
                        disabled={!adWatched}
                    >
                        {adWatched ? (
                            <>
                                <span>🔓</span>
                                Unlock {featureName}
                            </>
                        ) : (
                            <>
                                <span>⏳</span>
                                Wait {countdown}s to unlock
                            </>
                        )}
                    </button>

                    <p className={styles.disclaimer}>
                        By watching this ad, you support free access to our grammar correction service.
                    </p>
                </div>
            </div>
        </div>
    )
}
