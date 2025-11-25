# Quick Start Guide

Get your AI Grammar Corrector running in 5 minutes!

## Prerequisites

- ✅ Node.js 18+ installed
- ✅ OpenAI API key ready

## Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure API Key

Create `.env.local` file:

```bash
OPENAI_API_KEY=sk-your-actual-api-key-here
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Open Browser

Navigate to: **http://localhost:3000**

## Test It Out

Try correcting this text:

```
This are a test sentence with some erors in grammer and spelling. Me and my friend is going to the store yesterday.
```

Expected result:

```
This is a test sentence with some errors in grammar and spelling. My friend and I went to the store yesterday.
```

## What's Next?

- 📖 Read the full [README.md](README.md) for detailed documentation
- 🚀 Check [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment
- 🔧 See [SETUP.md](SETUP.md) for troubleshooting

## Common Issues

### "Cannot find module" error
```bash
npm install
```

### "OPENAI_API_KEY is not configured"
- Create `.env.local` file in root directory
- Add your API key
- Restart dev server

### Port 3000 in use
```bash
npm run dev -- -p 3001
```

## Need Help?

- Check [SETUP.md](SETUP.md) for detailed setup instructions
- Review [OpenAI API Docs](https://platform.openai.com/docs)
- Check [Next.js Docs](https://nextjs.org/docs)

---

**Happy coding! ✨**
