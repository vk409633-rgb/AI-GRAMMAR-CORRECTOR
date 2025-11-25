'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Create mailto link with form data
        const mailtoLink = `mailto:vk409633@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`

        // Open email client
        window.location.href = mailtoLink

        // Show success message
        setStatus('success')

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' })
            setStatus('idle')
        }, 3000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                    Your Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="John Doe"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                    Your Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="john@example.com"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                    Subject *
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.input}
                    required
                    placeholder="How can we help?"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                />
            </div>

            <button type="submit" className="btn btn-primary">
                <span>📧</span>
                Send Message
            </button>

            {status === 'success' && (
                <div className={`${styles.message} ${styles.success}`}>
                    ✅ Your email client will open. Please send the email to complete your message.
                </div>
            )}
        </form>
    )
}
