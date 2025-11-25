# API Documentation

## Server Actions

This application uses Next.js Server Actions for secure, server-side API calls to OpenAI.

---

## Grammar Correction API

### `correctGrammar(text: string)`

Server action that corrects grammar, spelling, and style in the provided text.

**Location**: `app/actions/grammar.ts`

**Type**: Server Action (runs on server only)

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | `string` | Yes | The text to be corrected (max 5000 characters) |

#### Returns

```typescript
interface GrammarCorrectionResult {
  success: boolean
  correctedText?: string
  suggestions?: string[]
  error?: string
}
```

#### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `success` | `boolean` | Whether the correction was successful |
| `correctedText` | `string?` | The corrected text (if successful) |
| `suggestions` | `string[]?` | Array of improvement suggestions (if successful) |
| `error` | `string?` | Error message (if failed) |

#### Example Usage

```typescript
'use client'

import { correctGrammar } from './actions/grammar'

async function handleCorrection() {
  const result = await correctGrammar("This are a test.")
  
  if (result.success) {
    console.log(result.correctedText) // "This is a test."
    console.log(result.suggestions)   // ["Fixed subject-verb agreement"]
  } else {
    console.error(result.error)
  }
}
```

#### Error Handling

The function handles various error scenarios:

| Error | Status Code | Message |
|-------|-------------|---------|
| Empty text | - | "Please enter some text to correct." |
| Text too long | - | "Text is too long. Please limit to 5000 characters." |
| Missing API key | - | "OpenAI API key is not configured..." |
| Invalid API key | 401 | "Invalid API key. Please check your configuration." |
| Rate limit | 429 | "Rate limit exceeded. Please try again in a moment." |
| Server error | 500 | "OpenAI service error. Please try again later." |
| Unknown error | - | "An unexpected error occurred. Please try again." |

#### Implementation Details

**OpenAI Configuration**:
```typescript
{
  model: 'gpt-4o-mini',
  temperature: 0.3,
  max_tokens: 2000
}
```

**System Prompt**:
The AI is instructed to:
1. Correct all grammatical errors
2. Fix spelling mistakes
3. Improve sentence structure and clarity
4. Maintain original meaning and tone
5. Return only corrected text without explanations

**Suggestions Generation**:
A second API call analyzes the differences between original and corrected text to provide specific improvement insights.

---

## OpenAI Integration

### Configuration

**Environment Variables**:
```bash
OPENAI_API_KEY=sk-your-api-key-here
```

**Model**: GPT-4o-mini
- Cost-effective
- Fast response times
- High accuracy for grammar tasks

### API Costs

Approximate costs per correction:
- **Input**: ~$0.00015 per 1K tokens
- **Output**: ~$0.0006 per 1K tokens
- **Average correction**: ~$0.0001 - $0.0003

Example:
- 500 character text ≈ 125 tokens
- Cost: ~$0.0001 per correction
- 10,000 corrections ≈ $1

### Rate Limits

Default OpenAI rate limits (varies by tier):
- **Free tier**: 3 RPM (requests per minute)
- **Tier 1**: 3,500 RPM
- **Tier 2**: 5,000 RPM

---

## Client Components

### GrammarChecker Component

**Location**: `app/components/GrammarChecker.tsx`

**Type**: Client Component

#### Features

- Real-time character counting
- Input validation
- Loading states with transitions
- Results display with animations
- Copy to clipboard functionality
- Side-by-side comparison view
- Error handling and display

#### State Management

```typescript
const [inputText, setInputText] = useState('')
const [result, setResult] = useState<GrammarCorrectionResult | null>(null)
const [isPending, startTransition] = useTransition()
const [showComparison, setShowComparison] = useState(false)
```

#### Key Functions

**handleSubmit**:
- Validates input
- Calls server action
- Updates UI with results

**handleClear**:
- Resets all state
- Clears input and results

**handleCopy**:
- Copies corrected text to clipboard
- Uses Clipboard API

---

## Security

### API Key Protection

✅ **Secure**:
- API key stored in environment variables
- Server actions prevent client-side exposure
- Never sent to browser

❌ **Insecure** (Don't do this):
```typescript
// NEVER expose API key in client code
const apiKey = 'sk-...' // ❌ WRONG
```

### Data Privacy

- No persistent storage
- Text processed in real-time only
- No logging of user input
- Stateless architecture

### Best Practices

1. **Environment Variables**:
   - Use `.env.local` for development
   - Use platform environment variables for production
   - Never commit `.env.local` to Git

2. **Input Validation**:
   - Character limit: 5000
   - Empty text check
   - Sanitization handled by OpenAI

3. **Error Handling**:
   - Graceful degradation
   - User-friendly error messages
   - Proper error logging

---

## Performance Optimization

### Caching Strategy

Currently stateless (no caching). To implement caching:

```typescript
// Example: In-memory cache (not implemented)
const cache = new Map<string, GrammarCorrectionResult>()

export async function correctGrammar(text: string) {
  const cacheKey = hashText(text)
  
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!
  }
  
  const result = await callOpenAI(text)
  cache.set(cacheKey, result)
  
  return result
}
```

### Response Time

Typical response times:
- **Short text** (< 100 chars): 1-2 seconds
- **Medium text** (100-500 chars): 2-4 seconds
- **Long text** (500-5000 chars): 4-8 seconds

### Optimization Tips

1. **Debouncing**: Add debounce for auto-correct features
2. **Streaming**: Implement streaming for real-time feedback
3. **Batch Processing**: Process multiple texts in parallel
4. **CDN**: Use CDN for static assets

---

## Testing

### Manual Testing

Test cases to verify:

1. **Valid Input**:
   ```
   Input: "This are a test"
   Expected: "This is a test"
   ```

2. **Already Correct**:
   ```
   Input: "This is correct."
   Expected: "This is correct."
   ```

3. **Empty Input**:
   ```
   Input: ""
   Expected: Error message
   ```

4. **Long Text**:
   ```
   Input: 5001 characters
   Expected: Error message
   ```

### API Testing

```typescript
// Example test
async function testGrammarCorrection() {
  const testCases = [
    "This are a test",
    "Me and him went to store",
    "She don't like apples"
  ]
  
  for (const text of testCases) {
    const result = await correctGrammar(text)
    console.log(`Input: ${text}`)
    console.log(`Output: ${result.correctedText}`)
    console.log('---')
  }
}
```

---

## Extending the API

### Adding New Features

#### Example: Tone Adjustment

```typescript
export async function adjustTone(
  text: string,
  tone: 'formal' | 'casual' | 'professional'
): Promise<GrammarCorrectionResult> {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `Rewrite the text in a ${tone} tone while maintaining meaning.`
      },
      { role: 'user', content: text }
    ]
  })
  
  // ... rest of implementation
}
```

#### Example: Language Translation

```typescript
export async function translateAndCorrect(
  text: string,
  targetLanguage: string
): Promise<GrammarCorrectionResult> {
  // Implementation
}
```

### Custom Models

To use different OpenAI models:

```typescript
// In app/actions/grammar.ts
const completion = await openai.chat.completions.create({
  model: 'gpt-4', // or 'gpt-3.5-turbo', etc.
  // ... rest of config
})
```

---

## Monitoring & Analytics

### Logging

Add logging for debugging:

```typescript
export async function correctGrammar(text: string) {
  console.log('[Grammar] Request received:', {
    length: text.length,
    timestamp: new Date().toISOString()
  })
  
  try {
    const result = await callOpenAI(text)
    console.log('[Grammar] Success:', { hasCorrections: result.success })
    return result
  } catch (error) {
    console.error('[Grammar] Error:', error)
    throw error
  }
}
```

### Usage Tracking

Track API usage:

```typescript
let requestCount = 0
let totalTokens = 0

export async function correctGrammar(text: string) {
  requestCount++
  
  const result = await openai.chat.completions.create({...})
  
  totalTokens += result.usage?.total_tokens || 0
  
  console.log(`Requests: ${requestCount}, Tokens: ${totalTokens}`)
  
  return result
}
```

---

## Troubleshooting

### Common Issues

**Issue**: "Module not found: Can't resolve 'openai'"
```bash
npm install openai
```

**Issue**: Server action not working
- Ensure `'use server'` directive at top of file
- Verify Next.js version is 14+
- Check server actions are enabled in `next.config.js`

**Issue**: API key not recognized
- Verify `.env.local` exists
- Check variable name is exactly `OPENAI_API_KEY`
- Restart development server

---

## References

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [OpenAI Node.js SDK](https://github.com/openai/openai-node)

---

**For more information, see the main [README.md](README.md)**
