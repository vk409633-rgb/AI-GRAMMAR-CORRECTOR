# AI Grammar Corrector

A modern, AI-powered grammar correction web application built with Next.js 14 and OpenAI's GPT-4o-mini. This application provides real-time grammar checking, spelling correction, and intelligent writing suggestions without storing any user data.

![AI Grammar Corrector](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![OpenAI](https://img.shields.io/badge/OpenAI-API-green?style=for-the-badge&logo=openai)

## ✨ Features

- **🤖 AI-Powered Corrections**: Leverages OpenAI's GPT-4o-mini for accurate grammar and style improvements
- **⚡ Real-Time Processing**: Instant feedback with streaming responses
- **🔒 Privacy-First**: No data storage - all processing happens in real-time
- **💡 Smart Suggestions**: Intelligent insights about writing improvements
- **📊 Side-by-Side Comparison**: Compare original and corrected text
- **📱 Responsive Design**: Beautiful UI that works on all devices
- **🎨 Premium Aesthetics**: Modern glassmorphism design with smooth animations
- **♿ Accessible**: Built with web accessibility best practices

## 🏗️ Architecture

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with CSS Variables
- **AI Integration**: OpenAI API (GPT-4o-mini)
- **Deployment**: Vercel-ready (or any Node.js hosting)

### Key Components

```
app/
├── actions/
│   └── grammar.ts          # Server action for AI grammar correction
├── components/
│   ├── GrammarChecker.tsx  # Main grammar checking component
│   ├── Header.tsx          # Application header
│   └── Footer.tsx          # Application footer
├── globals.css             # Global styles and design system
├── layout.tsx              # Root layout with SEO metadata
└── page.tsx                # Home page
```

### Architecture Highlights

1. **Server Actions**: Grammar correction runs on the server, keeping API keys secure
2. **Stateless Design**: No databases or persistent storage
3. **Client-Side Interactivity**: React for dynamic UI updates
4. **SEO Optimized**: Proper meta tags and semantic HTML
5. **Performance**: Optimized for fast load times and minimal latency

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone or download this repository**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   
   Create a `.env.local` file in the root directory:
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```

   Replace `your_openai_api_key_here` with your actual OpenAI API key.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

1. **Enter or paste your text** in the input area
2. **Click "Correct Grammar"** to analyze your text
3. **Review the corrected text** and suggestions
4. **Copy the corrected text** using the copy button
5. **Compare original and corrected** using the comparison view

### Character Limits

- Maximum text length: 5,000 characters
- Real-time character counter included

## 🔐 Security & Privacy

### Data Privacy

- **No Storage**: Text is never saved to any database or file system
- **Ephemeral Processing**: All corrections happen in real-time and are discarded after response
- **Secure API Calls**: OpenAI API key is stored server-side only
- **HTTPS**: Always use HTTPS in production

### API Key Security

- API keys are stored in environment variables
- Server actions prevent client-side exposure
- Never commit `.env.local` to version control

## 🎨 Design System

The application uses a comprehensive design system with:

- **Color Palette**: Premium dark theme with gradient accents
- **Typography**: Inter font family for modern aesthetics
- **Spacing**: Consistent spacing scale
- **Animations**: Smooth transitions and micro-interactions
- **Glassmorphism**: Modern glass-effect cards
- **Responsive**: Mobile-first responsive design

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Add environment variables**:
   - In Vercel project settings, add `OPENAI_API_KEY`

4. **Deploy**:
   - Vercel will automatically deploy your application

### Deploy to Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:

- **Netlify**: Use `npm run build` and deploy the `.next` folder
- **Railway**: Connect your GitHub repo and add environment variables
- **DigitalOcean App Platform**: Deploy directly from GitHub
- **AWS Amplify**: Connect repository and configure build settings

### Build for Production

```bash
npm run build
npm start
```

## 📊 API Usage & Costs

### OpenAI API Costs

- **Model**: GPT-4o-mini
- **Approximate cost**: ~$0.0001 per correction (varies by text length)
- **Rate limits**: Depends on your OpenAI account tier

### Optimization Tips

1. **Use GPT-4o-mini**: More cost-effective than GPT-4
2. **Set max_tokens**: Limit response length to control costs
3. **Implement caching**: Cache common corrections (if needed)
4. **Monitor usage**: Use OpenAI dashboard to track API usage

## 🛠️ Development

### Project Structure

```
ai-grammar-corrector/
├── app/                    # Next.js app directory
│   ├── actions/           # Server actions
│   ├── components/        # React components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── .env.local            # Environment variables (create this)
├── .gitignore            # Git ignore rules
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint

### Customization

#### Change AI Model

Edit `app/actions/grammar.ts`:

```typescript
model: 'gpt-4o-mini', // Change to 'gpt-4' or other models
```

#### Adjust Character Limit

Edit `app/components/GrammarChecker.tsx`:

```typescript
const maxChars = 5000 // Change to your preferred limit
```

#### Modify Design Theme

Edit CSS variables in `app/globals.css`:

```css
:root {
  --color-accent-primary: #6366f1; /* Change colors */
  --color-bg-primary: #0a0a0f;
  /* ... */
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **OpenAI** for providing the powerful GPT API
- **Next.js** team for the amazing framework
- **Vercel** for seamless deployment platform

## 📧 Support

For issues, questions, or suggestions:

- Open an issue on GitHub
- Check OpenAI documentation: [platform.openai.com/docs](https://platform.openai.com/docs)
- Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

## 🔄 Updates & Roadmap

### Current Version: 1.0.0

### Planned Features

- [ ] Multiple language support
- [ ] Export to various formats (PDF, DOCX)
- [ ] Writing style preferences
- [ ] Tone adjustment options
- [ ] Browser extension
- [ ] API rate limiting UI
- [ ] User authentication (optional)
- [ ] History (with opt-in storage)

---

**Built with ❤️ using Next.js and OpenAI**
