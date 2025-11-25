# Setup Guide for AI Grammar Corrector

This guide will walk you through setting up the AI Grammar Corrector application from scratch.

## Step 1: Install Node.js

If you don't have Node.js installed:

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Verify installation by opening a terminal and running:
   ```bash
   node --version
   npm --version
   ```

## Step 2: Get OpenAI API Key

1. **Create an OpenAI Account**:
   - Go to [platform.openai.com](https://platform.openai.com/)
   - Sign up or log in

2. **Generate API Key**:
   - Navigate to [API Keys](https://platform.openai.com/api-keys)
   - Click "Create new secret key"
   - Give it a name (e.g., "Grammar Corrector")
   - **Copy the key immediately** (you won't be able to see it again)

3. **Add Credits** (if needed):
   - Go to [Billing](https://platform.openai.com/account/billing)
   - Add payment method and credits
   - Minimum $5 recommended for testing

## Step 3: Configure the Application

1. **Navigate to the project directory**:
   ```bash
   cd "c:\Users\Pc\OneDrive\Documents\HTML\AI GRAMMAR CORRECTOR"
   ```

2. **Create environment file**:
   
   Create a new file named `.env.local` in the root directory with:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```
   
   Replace `sk-your-actual-api-key-here` with your actual OpenAI API key.

   **Important**: Never commit this file to version control!

## Step 4: Install Dependencies

Run the following command in your project directory:

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- OpenAI SDK
- TypeScript
- All other dependencies

## Step 5: Run the Development Server

Start the development server:

```bash
npm run dev
```

You should see output like:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

## Step 6: Test the Application

1. Open your browser and go to [http://localhost:3000](http://localhost:3000)

2. You should see the AI Grammar Corrector interface

3. Test with sample text:
   ```
   This are a test sentence with some erors in grammer and spelling.
   ```

4. Click "Correct Grammar" and verify you get corrected output

## Troubleshooting

### PowerShell Execution Policy Error

If you encounter a PowerShell script execution error:

**Option 1**: Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**Option 2**: Use Command Prompt (cmd) instead of PowerShell

**Option 3**: Use Git Bash or WSL (Windows Subsystem for Linux)

### "OPENAI_API_KEY is not configured" Error

1. Verify `.env.local` file exists in the root directory
2. Check that the file name is exactly `.env.local` (not `.env.local.txt`)
3. Ensure the API key is correctly formatted: `OPENAI_API_KEY=sk-...`
4. Restart the development server after creating/modifying `.env.local`

### API Key Invalid Error

1. Verify your API key is correct
2. Check that your OpenAI account has credits
3. Ensure the API key hasn't been revoked
4. Generate a new API key if needed

### Port 3000 Already in Use

If port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

This will run the server on port 3001 instead.

### Module Not Found Errors

If you see module errors:

1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

### TypeScript Errors

If you see TypeScript errors:

1. Ensure TypeScript is installed: `npm install typescript --save-dev`
2. Run `npm run build` to check for compilation errors
3. Check `tsconfig.json` is present and properly configured

## Next Steps

Once everything is working:

1. **Customize the application** (see README.md for customization options)
2. **Test thoroughly** with various text inputs
3. **Monitor API usage** in your OpenAI dashboard
4. **Deploy to production** (see Deployment section in README.md)

## Production Deployment Checklist

Before deploying to production:

- [ ] Set up environment variables on hosting platform
- [ ] Test with production build: `npm run build && npm start`
- [ ] Configure custom domain (optional)
- [ ] Set up HTTPS (usually automatic with Vercel/Netlify)
- [ ] Monitor API usage and costs
- [ ] Set up error tracking (optional)
- [ ] Configure rate limiting (optional)

## Getting Help

If you encounter issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [OpenAI API documentation](https://platform.openai.com/docs)
3. Check the project's GitHub issues
4. Verify all environment variables are set correctly

## Security Reminders

- ✅ Never commit `.env.local` to version control
- ✅ Never share your API key publicly
- ✅ Rotate API keys periodically
- ✅ Monitor API usage for unexpected activity
- ✅ Use environment variables for all secrets
- ✅ Enable HTTPS in production

---

**You're all set! Enjoy using the AI Grammar Corrector! 🎉**
