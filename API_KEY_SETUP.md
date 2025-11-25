# How to Add Your OpenAI API Key ✅

## ⚠️ IMPORTANT: File Location Issue Found!

Your `.env.local` file is currently in the **WRONG location**:
- ❌ Current: `app\.env.local` (WRONG!)
- ✅ Correct: `.env.local` (in root directory)

---

## 🔧 Fix Instructions

### **Step 1: Delete the Wrong File**

Delete this file:
```
c:\Users\Pc\OneDrive\Documents\HTML\AI GRAMMAR CORRECTOR\app\.env.local
```

### **Step 2: Create File in Correct Location**

1. **Open File Explorer**
2. **Navigate to**:
   ```
   c:\Users\Pc\OneDrive\Documents\HTML\AI GRAMMAR CORRECTOR
   ```
   (This is the ROOT folder, NOT the app folder!)

3. **Create a new file** named: `.env.local`
   - Right-click → New → Text Document
   - Name it: `.env.local` (remove the .txt extension)
   - Windows might warn you about changing extensions - click "Yes"

### **Step 3: Add Your API Key**

1. **Open** `.env.local` in Notepad or VS Code
2. **Add this line**:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```
3. **Replace** `sk-your-actual-api-key-here` with your real OpenAI API key
4. **Save** the file

---

## 📁 Correct File Structure

Your project should look like this:

```
AI GRAMMAR CORRECTOR/
├── .env.local              ← API key goes HERE! ✅
├── .env.local.example
├── .gitignore
├── package.json
├── next.config.js
├── tsconfig.json
├── README.md
├── public/
│   └── ads.txt
└── app/
    ├── layout.tsx
    ├── page.tsx
    ├── globals.css
    ├── components/
    └── actions/
```

**NOT** like this:
```
AI GRAMMAR CORRECTOR/
└── app/
    └── .env.local          ← WRONG LOCATION! ❌
```

---

## 🔑 Getting Your OpenAI API Key

If you don't have an OpenAI API key yet:

1. **Visit**: https://platform.openai.com/api-keys
2. **Sign in** or create an account
3. **Click**: "Create new secret key"
4. **Copy** the key (starts with `sk-`)
5. **Paste** it in your `.env.local` file

---

## ✅ Verify It's Working

### **Step 1: Check File Location**

Run this command in PowerShell (from project root):
```powershell
Test-Path .env.local
```

Should return: `True`

### **Step 2: Start Dev Server**

```powershell
npm run dev
```

### **Step 3: Test Grammar Correction**

1. Visit http://localhost:3000
2. Enter some text with errors
3. Click "Correct Grammar"
4. If it works → API key is correct! ✅
5. If error → Check the error message

---

## 🚨 Common Errors

### **Error: "OpenAI API key is not configured"**

**Cause**: `.env.local` file not found or in wrong location

**Fix**:
1. Make sure `.env.local` is in the ROOT directory
2. NOT in the `app` folder
3. Restart the dev server after creating the file

### **Error: "Invalid API key"**

**Cause**: Wrong API key or typo

**Fix**:
1. Check your API key at https://platform.openai.com/api-keys
2. Make sure you copied the entire key (starts with `sk-`)
3. No spaces before or after the key
4. Format: `OPENAI_API_KEY=sk-...` (no quotes needed)

### **Error: "Rate limit exceeded"**

**Cause**: Too many requests or no credits

**Fix**:
1. Check your OpenAI account billing
2. Add payment method if needed
3. Wait a few minutes and try again

---

## 📝 Example .env.local File

```env
OPENAI_API_KEY=sk-proj-abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

**Important**:
- ✅ No quotes around the key
- ✅ No spaces
- ✅ Starts with `sk-`
- ✅ One line only
- ✅ In ROOT directory

---

## 🔒 Security Notes

### **DO**:
- ✅ Keep `.env.local` in root directory
- ✅ Never commit `.env.local` to Git
- ✅ Use `.env.local.example` for templates
- ✅ Keep your API key secret

### **DON'T**:
- ❌ Share your API key
- ❌ Commit `.env.local` to GitHub
- ❌ Put API key in client-side code
- ❌ Put `.env.local` in `app` folder

---

## 🧪 Quick Test

After creating `.env.local` in the correct location:

1. **Stop** the dev server (Ctrl+C)
2. **Start** it again:
   ```powershell
   npm run dev
   ```
3. **Visit**: http://localhost:3000
4. **Test** grammar correction
5. **Should work!** ✅

---

## 📞 Still Having Issues?

### **Check These**:

1. **File location**:
   ```
   c:\Users\Pc\OneDrive\Documents\HTML\AI GRAMMAR CORRECTOR\.env.local
   ```
   (NOT in `app` folder!)

2. **File content**:
   ```
   OPENAI_API_KEY=sk-your-key-here
   ```

3. **Restart server** after creating/editing `.env.local`

4. **Check browser console** for errors (F12)

---

## ✅ Summary

**Problem**: `.env.local` file is in `app` folder (wrong!)  
**Solution**: Create `.env.local` in ROOT folder  
**Format**: `OPENAI_API_KEY=sk-your-key-here`  
**Location**: Same folder as `package.json`  

---

**Follow these steps and your API key will work correctly!** 🎉

**Last Updated**: 2025-11-25
