'use server'

import OpenAI from 'openai'

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export interface GrammarCorrectionResult {
    success: boolean
    correctedText?: string
    suggestions?: string[]
    error?: string
}

/**
 * Server action to correct grammar using OpenAI API
 * This runs on the server, keeping the API key secure
 */
export async function correctGrammar(text: string): Promise<GrammarCorrectionResult> {
    try {
        // Validate input
        if (!text || text.trim().length === 0) {
            return {
                success: false,
                error: 'Please enter some text to correct.',
            }
        }

        if (text.length > 5000) {
            return {
                success: false,
                error: 'Text is too long. Please limit to 5000 characters.',
            }
        }

        // Check if API key is configured
        if (!process.env.OPENAI_API_KEY) {
            return {
                success: false,
                error: 'OpenAI API key is not configured. Please add OPENAI_API_KEY to your .env.local file.',
            }
        }

        // Call OpenAI API for grammar correction
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini', // Using GPT-4o-mini for cost-effectiveness and speed
            messages: [
                {
                    role: 'system',
                    content: `You are an expert grammar correction assistant. Your task is to:
1. Correct all grammatical errors in the provided text
2. Fix spelling mistakes
3. Improve sentence structure and clarity
4. Maintain the original meaning and tone
5. Return ONLY the corrected text without explanations

If the text is already perfect, return it unchanged.`,
                },
                {
                    role: 'user',
                    content: text,
                },
            ],
            temperature: 0.3, // Lower temperature for more consistent corrections
            max_tokens: 2000,
        })

        const correctedText = completion.choices[0]?.message?.content

        if (!correctedText) {
            return {
                success: false,
                error: 'Failed to generate correction. Please try again.',
            }
        }

        // Generate suggestions by comparing original and corrected text
        const suggestions = await generateSuggestions(text, correctedText)

        return {
            success: true,
            correctedText: correctedText.trim(),
            suggestions,
        }
    } catch (error: any) {
        console.error('Grammar correction error:', error)

        // Handle specific OpenAI errors
        if (error?.status === 401) {
            return {
                success: false,
                error: 'Invalid API key. Please check your OpenAI API key configuration.',
            }
        }

        if (error?.status === 429) {
            return {
                success: false,
                error: 'Rate limit exceeded. Please try again in a moment.',
            }
        }

        if (error?.status === 500) {
            return {
                success: false,
                error: 'OpenAI service error. Please try again later.',
            }
        }

        return {
            success: false,
            error: 'An unexpected error occurred. Please try again.',
        }
    }
}

/**
 * Generate helpful suggestions by analyzing differences
 */
async function generateSuggestions(original: string, corrected: string): Promise<string[]> {
    try {
        // If texts are identical, no suggestions needed
        if (original.trim() === corrected.trim()) {
            return ['Your text is already grammatically correct! 🎉']
        }

        // Call OpenAI to generate specific suggestions
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `You are a writing coach. Compare the original and corrected text and provide 3-5 brief, specific suggestions about what was improved. Format each suggestion as a short sentence. Focus on the most important changes.`,
                },
                {
                    role: 'user',
                    content: `Original: ${original}\n\nCorrected: ${corrected}\n\nProvide specific suggestions about what was improved.`,
                },
            ],
            temperature: 0.5,
            max_tokens: 300,
        })

        const suggestionsText = completion.choices[0]?.message?.content || ''

        // Parse suggestions into array
        const suggestions = suggestionsText
            .split('\n')
            .filter(line => line.trim().length > 0)
            .map(line => line.replace(/^[-•*]\s*/, '').trim())
            .filter(line => line.length > 0)
            .slice(0, 5)

        return suggestions.length > 0 ? suggestions : ['Text has been improved for clarity and correctness.']
    } catch (error) {
        console.error('Error generating suggestions:', error)
        return ['Text has been corrected for grammar and clarity.']
    }
}
