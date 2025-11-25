'use client'

import { useState, useTransition } from 'react'
import { adjustTone, summarizeText, expandText, type ProFeatureResult } from '../actions/proFeatures'
import AdModal from './AdModal'
import styles from './ProFeatures.module.css'

interface ProFeaturesProps {
    inputText: string
}

export default function ProFeatures({ inputText }: ProFeaturesProps) {
    const [showAdModal, setShowAdModal] = useState(false)
    const [currentFeature, setCurrentFeature] = useState<string>('')
    const [unlockedFeatures, setUnlockedFeatures] = useState<Set<string>>(new Set())
    const [result, setResult] = useState<ProFeatureResult | null>(null)
    const [isPending, startTransition] = useTransition()

    const handleFeatureClick = (featureName: string, action: () => void) => {
        if (unlockedFeatures.has(featureName)) {
            // Feature already unlocked, execute directly
            action()
        } else {
            // Show ad modal to unlock
            setCurrentFeature(featureName)
            setShowAdModal(true)
        }
    }

    const handleAdWatched = () => {
        // Unlock the feature
        setUnlockedFeatures(new Set([...unlockedFeatures, currentFeature]))
    }

    const handleToneAdjustment = (tone: 'formal' | 'casual' | 'professional') => {
        if (!inputText.trim()) {
            setResult({
                success: false,
                error: 'Please enter some text first.',
            })
            return
        }

        setResult(null)
        startTransition(async () => {
            const toneResult = await adjustTone(inputText, tone)
            setResult(toneResult)
        })
    }

    const handleSummarize = (length: 'short' | 'medium' | 'long') => {
        if (!inputText.trim()) {
            setResult({
                success: false,
                error: 'Please enter some text first.',
            })
            return
        }

        setResult(null)
        startTransition(async () => {
            const summaryResult = await summarizeText(inputText, length)
            setResult(summaryResult)
        })
    }

    const handleExpand = () => {
        if (!inputText.trim()) {
            setResult({
                success: false,
                error: 'Please enter some text first.',
            })
            return
        }

        setResult(null)
        startTransition(async () => {
            const expandResult = await expandText(inputText)
            setResult(expandResult)
        })
    }

    const handleCopy = () => {
        if (result?.result) {
            navigator.clipboard.writeText(result.result)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>
                    <span className={styles.proIcon}>⭐</span>
                    Pro Features
                </h2>
                <p className={styles.subtitle}>
                    Watch a short ad to unlock premium writing tools
                </p>
            </div>

            <div className={styles.featuresGrid}>
                {/* Tone Adjustment */}
                <div className={`${styles.featureCard} glass-card`}>
                    <div className={styles.featureHeader}>
                        <span className={styles.featureIcon}>🎭</span>
                        <h3>Tone Adjustment</h3>
                        {unlockedFeatures.has('Tone Adjustment') && (
                            <span className={styles.unlockedBadge}>✓ Unlocked</span>
                        )}
                    </div>
                    <p className={styles.featureDescription}>
                        Adjust your text to be more formal, casual, or professional
                    </p>
                    <div className={styles.buttonGroup}>
                        <button
                            className="btn btn-secondary"
                            onClick={() => handleFeatureClick('Tone Adjustment', () => handleToneAdjustment('formal'))}
                            disabled={isPending}
                        >
                            Formal
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => handleFeatureClick('Tone Adjustment', () => handleToneAdjustment('casual'))}
                            disabled={isPending}
                        >
                            Casual
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => handleFeatureClick('Tone Adjustment', () => handleToneAdjustment('professional'))}
                            disabled={isPending}
                        >
                            Professional
                        </button>
                    </div>
                </div>

                {/* Summarization */}
                <div className={`${styles.featureCard} glass-card`}>
                    <div className={styles.featureHeader}>
                        <span className={styles.featureIcon}>📝</span>
                        <h3>Summarize Text</h3>
                        {unlockedFeatures.has('Summarize Text') && (
                            <span className={styles.unlockedBadge}>✓ Unlocked</span>
                        )}
                    </div>
                    <p className={styles.featureDescription}>
                        Create a concise summary of your text
                    </p>
                    <div className={styles.buttonGroup}>
                        <button
                            className="btn btn-secondary"
                            onClick={() => handleFeatureClick('Summarize Text', () => handleSummarize('short'))}
                            disabled={isPending}
                        >
                            Short
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => handleFeatureClick('Summarize Text', () => handleSummarize('medium'))}
                            disabled={isPending}
                        >
                            Medium
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => handleFeatureClick('Summarize Text', () => handleSummarize('long'))}
                            disabled={isPending}
                        >
                            Long
                        </button>
                    </div>
                </div>

                {/* Text Expansion */}
                <div className={`${styles.featureCard} glass-card`}>
                    <div className={styles.featureHeader}>
                        <span className={styles.featureIcon}>📈</span>
                        <h3>Expand Text</h3>
                        {unlockedFeatures.has('Expand Text') && (
                            <span className={styles.unlockedBadge}>✓ Unlocked</span>
                        )}
                    </div>
                    <p className={styles.featureDescription}>
                        Make your text more detailed and comprehensive
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleFeatureClick('Expand Text', handleExpand)}
                        disabled={isPending}
                    >
                        {isPending ? (
                            <>
                                <span className="spinner"></span>
                                Processing...
                            </>
                        ) : (
                            <>
                                <span>✨</span>
                                Expand Text
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Results Section */}
            {result && (
                <div className={`${styles.resultsSection} fade-in`}>
                    {result.success && result.result ? (
                        <div className={`${styles.resultCard} glass-card`}>
                            <div className={styles.resultHeader}>
                                <h3>Pro Feature Result</h3>
                                <button
                                    className={styles.copyButton}
                                    onClick={handleCopy}
                                    title="Copy to clipboard"
                                >
                                    <span>📋</span>
                                    Copy
                                </button>
                            </div>
                            <div className={styles.resultText}>
                                {result.result}
                            </div>
                        </div>
                    ) : (
                        <div className={`${styles.errorCard} glass-card`}>
                            <div className={styles.errorIcon}>⚠️</div>
                            <p className={styles.errorMessage}>{result.error}</p>
                        </div>
                    )}
                </div>
            )}

            {/* Ad Modal */}
            <AdModal
                isOpen={showAdModal}
                onClose={() => setShowAdModal(false)}
                onAdWatched={handleAdWatched}
                featureName={currentFeature}
            />
        </div>
    )
}
