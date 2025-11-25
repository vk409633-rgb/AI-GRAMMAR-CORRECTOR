'use client'

import { useEffect } from 'react'
import styles from './AdUnit.module.css'

interface AdUnitProps {
    adSlot: string
    adFormat?: string
    fullWidthResponsive?: boolean
    className?: string
}

export default function AdUnit({
    adSlot,
    adFormat = 'auto',
    fullWidthResponsive = true,
    className = ''
}: AdUnitProps) {

    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
            }
        } catch (err) {
            console.error('AdSense error:', err)
        }
    }, [])

    return (
        <div className={`${styles.adContainer} ${className}`}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-7431808618156384"
                data-ad-slot={adSlot}
                data-ad-format={adFormat}
                data-full-width-responsive={fullWidthResponsive.toString()}
            />
        </div>
    )
}
