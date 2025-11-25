import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-sans'
})

export const metadata: Metadata = {
    title: 'AI Grammar Corrector - Perfect Your Writing Instantly',
    description: 'Transform your writing with AI-powered grammar correction. Get instant, intelligent suggestions to improve clarity, fix errors, and enhance your text quality in real-time.',
    keywords: ['grammar checker', 'AI writing assistant', 'grammar correction', 'writing tool', 'text editor'],
    authors: [{ name: 'AI Grammar Corrector' }],
    openGraph: {
        title: 'AI Grammar Corrector - Perfect Your Writing Instantly',
        description: 'Transform your writing with AI-powered grammar correction.',
        type: 'website',
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#6366f1',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta name="google-adsense-account" content="ca-pub-7431808618156384" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7431808618156384"
                    crossOrigin="anonymous"
                ></script>
            </head>
            <body className={inter.variable}>
                {children}
            </body>
        </html>
    )
}
