# Deployment Build Issues - Troubleshooting Guide

## Common Build Errors & Solutions

Without seeing your specific error, here are the most common deployment issues and how to fix them:

---

## 🔍 **Most Common Issues**

### **1. Environment Variables Missing**

**Error**: `OpenAI API key is not configured`

**Solution**:
- Add `OPENAI_API_KEY` to your deployment platform
- **Vercel**: Settings → Environment Variables
- **Netlify**: Site settings → Environment variables
- Value: `sk-your-actual-api-key`

---

### **2. TypeScript Errors**

**Error**: Type errors during build

**Solution**: Add to `next.config.js`:
```js
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,  // Add this temporarily
    },
    eslint: {
        ignoreDuringBuilds: true,  // Add this temporarily
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        },
    },
}
```

---

### **3. Module Not Found Errors**

**Error**: `Cannot find module './components/...'`

**Possible Issues**:
- Case sensitivity (Linux servers are case-sensitive)
- Missing files

**Solution**: Ensure all imports match exact file names:
```tsx
// ✅ Correct
import Header from './components/Header'  // Header.tsx

// ❌ Wrong
import Header from './components/header'  // Won't work on Linux
```

---

### **4. Server Actions Not Enabled**

**Error**: Server actions not working

**Solution**: Already configured in `next.config.js`:
```js
experimental: {
    serverActions: {
        bodySizeLimit: '2mb',
    },
}
```

---

### **5. Node Version Mismatch**

**Error**: Build fails with Node version error

**Solution**: Add to `package.json`:
```json
{
  "engines": {
    "node": ">=18.17.0"
  }
}
```

---

### **6. Missing Dependencies**

**Error**: Module not found during build

**Solution**: Verify all dependencies are in `package.json`:
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "openai": "^4.28.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  }
}
```

---

## 🛠️ **Quick Fixes**

### **Fix 1: Update next.config.js**

Replace your `next.config.js` with this:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: false,  // Set to true if TypeScript errors
    },
    eslint: {
        ignoreDuringBuilds: false,  // Set to true if ESLint errors
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        },
    },
    // Add this if you have image optimization issues
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
```

---

### **Fix 2: Add .npmrc file**

Create `.npmrc` in root directory:
```
legacy-peer-deps=true
```

---

### **Fix 3: Update package.json**

Add engines and ensure correct versions:
```json
{
  "name": "ai-grammar-corrector",
  "version": "1.0.0",
  "private": true,
  "engines": {
    "node": ">=18.17.0",
    "npm": ">=9.0.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "openai": "^4.28.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.2.0",
    "typescript": "^5.3.0"
  }
}
```

---

## 📋 **Deployment Platform Specific**

### **Vercel**

1. **Build Command**: `npm run build` (default)
2. **Output Directory**: `.next` (default)
3. **Install Command**: `npm install` (default)
4. **Node Version**: 18.x or 20.x
5. **Environment Variables**: Add `OPENAI_API_KEY`

### **Netlify**

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Functions Directory**: Leave empty
4. **Node Version**: Add `.nvmrc` file with `18` or `20`
5. **Environment Variables**: Add `OPENAI_API_KEY`

---

## 🔍 **Debugging Steps**

### **Step 1: Check Build Logs**

Look for specific error messages:
- Module not found
- Type errors
- Syntax errors
- Missing dependencies

### **Step 2: Test Locally**

Try building locally (if PowerShell allows):
```powershell
npm run build
```

### **Step 3: Check File Names**

Ensure all file names match imports exactly:
- `Header.tsx` not `header.tsx`
- `Footer.tsx` not `footer.tsx`
- Case-sensitive on Linux servers

### **Step 4: Verify All Files Exist**

```
app/
├── layout.tsx ✅
├── page.tsx ✅
├── globals.css ✅
├── components/
│   ├── Header.tsx ✅
│   ├── Footer.tsx ✅
│   ├── GrammarChecker.tsx ✅
│   ├── ProFeatures.tsx ✅
│   ├── AdModal.tsx ✅
│   ├── AdUnit.tsx ✅
│   └── ContactForm.tsx ✅
├── actions/
│   ├── grammar.ts ✅
│   └── proFeatures.ts ✅
├── about/
│   └── page.tsx ✅
├── contact/
│   └── page.tsx ✅
└── privacy/
    └── page.tsx ✅
```

---

## ⚡ **Emergency Fix**

If nothing else works, add this to `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,  // Ignore TypeScript errors
    },
    eslint: {
        ignoreDuringBuilds: true,  // Ignore ESLint errors
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        },
    },
    images: {
        unoptimized: true,
    },
    // Disable SWC minification if causing issues
    swcMinify: false,
}

module.exports = nextConfig
```

---

## 📞 **Get Specific Help**

To get targeted help, please share:

1. **Deployment Platform**: Vercel, Netlify, etc.
2. **Error Message**: Exact error from build logs
3. **Build Command**: What command is being run
4. **Node Version**: What version is being used

---

## ✅ **Checklist Before Deploy**

- [ ] All files committed to Git
- [ ] `.env.local` NOT committed (in .gitignore)
- [ ] `OPENAI_API_KEY` added to platform
- [ ] `package.json` has all dependencies
- [ ] `next.config.js` properly configured
- [ ] All imports use correct case
- [ ] No TypeScript errors locally
- [ ] Build works locally (if possible)

---

## 🚀 **Most Likely Fix**

**If you're seeing build errors, try this first:**

1. **Add environment variable** to your deployment platform:
   - Name: `OPENAI_API_KEY`
   - Value: Your actual OpenAI API key

2. **Update `next.config.js`** to ignore build errors temporarily:
   ```js
   typescript: { ignoreBuildErrors: true },
   eslint: { ignoreDuringBuilds: true },
   ```

3. **Redeploy**

---

**Share your specific error message for targeted help!** 🎯

**Last Updated**: 2025-11-25
