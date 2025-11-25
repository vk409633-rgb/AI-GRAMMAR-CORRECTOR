'use client'

import { useState, useTransition } from 'react'
import { correctGrammar, type GrammarCorrectionResult } from '../actions/grammar'
import ProFeatures from './ProFeatures'
import styles from './GrammarChecker.module.css'

export default function GrammarChecker() {
    const [inputText, setInputText] = useState('')
    const [result, setResult] = useState<GrammarCorrectionResult | null>(null)
    const [isPending, startTransition] = useTransition()
    const [showComparison, setShowComparison] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!inputText.trim()) {
            setResult({
                success: false,
                error: 'Please enter some text to correct.',
            })
            return
        }

        setResult(null)
        setShowComparison(false)

        startTransition(async () => {
            const correctionResult = await correctGrammar(inputText)
            setResult(correctionResult)
            if (correctionResult.success) {
                setShowComparison(true)
            }
        })
    }

    const handleClear = () => {
        setInputText('')
        setResult(null)
        setShowComparison(false)
    }

    const handleCopy = async () => {
        if (result?.correctedText) {
            await navigator.clipboard.writeText(result.correctedText)
            // You could add a toast notification here
        }
    }

    const charCount = inputText.length
    const maxChars = 5000

    return (
        <section className={styles.checker}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={`${styles.inputSection} glass-card`}>
                    <div className={styles.inputHeader}>
                        <h2 className={styles.sectionTitle}>Your Text</h2>
                        <span className={`${styles.charCount} ${charCount > maxChars ? styles.charCountError : ''}`}>
                            {charCount} / {maxChars}
                        </span>
                    </div>

                    <textarea
                        className={`${styles.textarea} textarea`}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Paste or type your text here to check for grammar errors, spelling mistakes, and style improvements..."
                        disabled={isPending}
                        maxLength={maxChars}
                    />

                    <div className={styles.actions}>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isPending || !inputText.trim() || charCount > maxChars}
                        >
                            {isPending ? (
                                <>
                                    <span className="spinner"></span>
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    <span>✨</span>
                                    Correct Grammar
                                </>
                            )}
                        </button>

                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleClear}
                            disabled={isPending}
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                {result && (
                    <div className={`${styles.resultsSection} fade-in`}>
                        {result.success && result.correctedText ? (
                            <>
                                <div className={`${styles.outputSection} glass-card`}>
                                    <div className={styles.outputHeader}>
                                        <h2 className={styles.sectionTitle}>Corrected Text</h2>
                                        <button
                                            type="button"
                                            className={styles.copyButton}
                                            onClick={handleCopy}
                                            title="Copy to clipboard"
                                        >
                                            <span>📋</span>
                                            Copy
                                        </button>
                                    </div>

                                    <div className={styles.outputText}>
                                        {result.correctedText}
                                    </div>
                                </div>

                                {/* Suggestions */}
                                {result.suggestions && result.suggestions.length > 0 && (
                                    <div className={`${styles.suggestionsSection} glass-card`}>
                                        <h3 className={styles.suggestionsTitle}>
                                            <span>💡</span>
                                            Improvements Made
                                        </h3>
                                        <ul className={styles.suggestionsList}>
                                            {result.suggestions.map((suggestion, index) => (
                                                <li key={index} className={styles.suggestionItem}>
                                                    <span className={styles.suggestionBullet}>•</span>
                                                    {suggestion}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Comparison Toggle */}
                                {inputText.trim() !== result.correctedText.trim() && (
                                    <div className={styles.comparisonToggle}>
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={() => setShowComparison(!showComparison)}
                                        >
                                            {showComparison ? 'Hide' : 'Show'} Comparison
                                        </button>
                                    </div>
                                )}

                                {/* Side-by-side Comparison */}
                                {showComparison && inputText.trim() !== result.correctedText.trim() && (
                                    <div className={`${styles.comparison} glass-card fade-in`}>
                                        <div className={styles.comparisonColumn}>
                                            <h4 className={styles.comparisonTitle}>Original</h4>
                                            <div className={styles.comparisonText}>
                                                {inputText}
                                            </div>
                                        </div>
                                        <div className={styles.comparisonDivider}></div>
                                        <div className={styles.comparisonColumn}>
                                            <h4 className={styles.comparisonTitle}>Corrected</h4>
                                            <div className={styles.comparisonText}>
                                                {result.correctedText}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className={`${styles.errorSection} glass-card`}>
                                <div className={styles.errorIcon}>⚠️</div>
                                <p className={styles.errorMessage}>{result.error}</p>
                            </div>
                        )}
                    </div>
                )}
            </form>

            {/* Pro Features */}
            <ProFeatures inputText={inputText} />
        </section>
    )
}
