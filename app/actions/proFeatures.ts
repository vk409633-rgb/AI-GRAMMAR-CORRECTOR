'use server'

import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export interface ProFeatureResult {
    success: boolean
    result?: string
    error?: string
}

/**
 * Pro Feature: Tone Adjustment
 * Adjusts the tone of text to be more formal, casual, or professional
 */
export async function adjustTone(
    text: string,
    tone: 'formal' | 'casual' | 'professional'
): Promise<ProFeatureResult> {
    try {
        if (!text || text.trim().length === 0) {
            return {
                success: false,
                error: 'Please enter some text to adjust.',
            }
        }

        if (!process.env.OPENAI_API_KEY) {
            return {
                success: false,
                error: 'OpenAI API key is not configured.',
            }
        }

        const toneDescriptions = {
            formal: 'formal and professional, suitable for academic or business writing',
            casual: 'casual and conversational, suitable for friendly communication',
            professional: 'professional and polished, suitable for workplace communication',
        }

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `You are a writing assistant. Rewrite the provided text to be ${toneDescriptions[tone]}. Maintain the original meaning and key information, but adjust the tone, word choice, and sentence structure accordingly. Return ONLY the rewritten text.`,
                },
                {
                    role: 'user',
                    content: text,
                },
            ],
            temperature: 0.7,
            max_tokens: 2000,
        })

        const result = completion.choices[0]?.message?.content

        if (!result) {
            return {
                success: false,
                error: 'Failed to adjust tone. Please try again.',
            }
        }

        return {
            success: true,
            result: result.trim(),
        }
    } catch (error: any) {
        console.error('Tone adjustment error:', error)
        return {
            success: false,
            error: 'An error occurred while adjusting tone.',
        }
    }
}

/**
 * Pro Feature: Text Summarization
 * Creates a concise summary of the provided text
 */
export async function summarizeText(
    text: string,
    length: 'short' | 'medium' | 'long'
): Promise<ProFeatureResult> {
    try {
        if (!text || text.trim().length === 0) {
            return {
                success: false,
                error: 'Please enter some text to summarize.',
            }
        }

        if (!process.env.OPENAI_API_KEY) {
            return {
                success: false,
                error: 'OpenAI API key is not configured.',
            }
        }

        const lengthDescriptions = {
            short: 'a brief 1-2 sentence summary',
            medium: 'a concise paragraph summary (3-5 sentences)',
            long: 'a detailed summary (1-2 paragraphs)',
        }

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `You are a summarization expert. Create ${lengthDescriptions[length]} of the provided text. Capture the main points and key information. Return ONLY the summary.`,
                },
                {
                    role: 'user',
                    content: text,
                },
            ],
            temperature: 0.5,
            max_tokens: 1000,
        })

        const result = completion.choices[0]?.message?.content

        if (!result) {
            return {
                success: false,
                error: 'Failed to summarize text. Please try again.',
            }
        }

        return {
            success: true,
            result: result.trim(),
        }
    } catch (error: any) {
        console.error('Summarization error:', error)
        return {
            success: false,
            error: 'An error occurred while summarizing text.',
        }
    }
}

/**
 * Pro Feature: Text Expansion
 * Expands text to make it more detailed and comprehensive
 */
export async function expandText(text: string): Promise<ProFeatureResult> {
    try {
        if (!text || text.trim().length === 0) {
            return {
                success: false,
                error: 'Please enter some text to expand.',
            }
        }

        if (!process.env.OPENAI_API_KEY) {
            return {
                success: false,
                error: 'OpenAI API key is not configured.',
            }
        }

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `You are a writing assistant. Expand the provided text to make it more detailed, comprehensive, and engaging. Add relevant details, examples, and elaboration while maintaining the original meaning and tone. Return ONLY the expanded text.`,
                },
                {
                    role: 'user',
                    content: text,
                },
            ],
            temperature: 0.7,
            max_tokens: 2000,
        })

        const result = completion.choices[0]?.message?.content

        if (!result) {
            return {
                success: false,
                error: 'Failed to expand text. Please try again.',
            }
        }

        return {
            success: true,
            result: result.trim(),
        }
    } catch (error: any) {
        console.error('Text expansion error:', error)
        return {
            success: false,
            error: 'An error occurred while expanding text.',
        }
    }
}
