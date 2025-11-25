# Deployment Guide

This guide covers deploying your AI Grammar Corrector to various platforms.

## Table of Contents

- [Vercel Deployment (Recommended)](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Railway Deployment](#railway-deployment)
- [Docker Deployment](#docker-deployment)
- [Traditional VPS Deployment](#vps-deployment)

---

## Vercel Deployment (Recommended)

Vercel is the company behind Next.js and offers the best integration.

### Prerequisites

- GitHub account
- Vercel account (free tier available)
- OpenAI API key

### Steps

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ai-grammar-corrector.git
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Environment Variables**:
   - In the deployment settings, add:
     - Key: `OPENAI_API_KEY`
     - Value: Your OpenAI API key
   - Click "Deploy"

4. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Automatic Deployments

- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Instant rollbacks available

---

## Netlify Deployment

### Steps

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Create `netlify.toml`**:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Add environment variable: `OPENAI_API_KEY`
   - Deploy

---

## Railway Deployment

Railway offers simple deployment with automatic HTTPS.

### Steps

1. **Create `railway.json`**:
   ```json
   {
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "npm start",
       "restartPolicyType": "ON_FAILURE"
     }
   }
   ```

2. **Deploy**:
   - Go to [railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository
   - Add environment variable: `OPENAI_API_KEY`
   - Deploy

---

## Docker Deployment

For containerized deployment.

### Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Create `.dockerignore`

```
node_modules
.next
.git
.env.local
npm-debug.log
README.md
```

### Update `next.config.js`

Add output configuration:

```javascript
const nextConfig = {
  output: 'standalone',
  // ... rest of config
}
```

### Build and Run

```bash
# Build image
docker build -t ai-grammar-corrector .

# Run container
docker run -p 3000:3000 -e OPENAI_API_KEY=your_key ai-grammar-corrector
```

---

## VPS Deployment

For deployment on traditional VPS (DigitalOcean, Linode, AWS EC2, etc.)

### Prerequisites

- Ubuntu 20.04+ server
- Domain name (optional)
- SSH access

### Steps

1. **Connect to your server**:
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PM2** (Process Manager):
   ```bash
   sudo npm install -g pm2
   ```

4. **Clone your repository**:
   ```bash
   git clone https://github.com/yourusername/ai-grammar-corrector.git
   cd ai-grammar-corrector
   ```

5. **Install dependencies**:
   ```bash
   npm install
   ```

6. **Create `.env.local`**:
   ```bash
   nano .env.local
   ```
   Add: `OPENAI_API_KEY=your_key`

7. **Build the application**:
   ```bash
   npm run build
   ```

8. **Start with PM2**:
   ```bash
   pm2 start npm --name "grammar-corrector" -- start
   pm2 save
   pm2 startup
   ```

9. **Configure Nginx** (Optional, for custom domain):
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/grammar-corrector
   ```

   Add:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/grammar-corrector /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

10. **Setup SSL with Let's Encrypt**:
    ```bash
    sudo apt install certbot python3-certbot-nginx
    sudo certbot --nginx -d yourdomain.com
    ```

---

## Environment Variables

All platforms require the following environment variable:

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |

### Optional Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | Server port | `3000` |

---

## Post-Deployment Checklist

- [ ] Test the deployed application
- [ ] Verify environment variables are set
- [ ] Check HTTPS is working
- [ ] Test grammar correction functionality
- [ ] Monitor API usage in OpenAI dashboard
- [ ] Set up error monitoring (optional)
- [ ] Configure custom domain (optional)
- [ ] Set up analytics (optional)

---

## Monitoring & Maintenance

### Monitor API Usage

- Check [OpenAI Usage Dashboard](https://platform.openai.com/usage)
- Set up usage alerts
- Monitor costs regularly

### Application Monitoring

**Vercel**:
- Built-in analytics and monitoring
- Real-time logs in dashboard

**PM2** (VPS):
```bash
pm2 logs grammar-corrector
pm2 monit
```

**Docker**:
```bash
docker logs container-id
```

### Updating the Application

**Vercel/Netlify/Railway**:
- Push to GitHub → Automatic deployment

**VPS**:
```bash
cd ai-grammar-corrector
git pull
npm install
npm run build
pm2 restart grammar-corrector
```

**Docker**:
```bash
docker build -t ai-grammar-corrector .
docker stop container-id
docker run -p 3000:3000 -e OPENAI_API_KEY=your_key ai-grammar-corrector
```

---

## Troubleshooting

### Build Failures

- Check Node.js version (18+)
- Verify all dependencies are installed
- Check for TypeScript errors
- Review build logs

### Runtime Errors

- Verify environment variables are set
- Check OpenAI API key is valid
- Review application logs
- Test API connectivity

### Performance Issues

- Enable caching
- Optimize images
- Use CDN for static assets
- Monitor server resources

---

## Security Best Practices

- ✅ Always use HTTPS in production
- ✅ Never commit `.env.local` to Git
- ✅ Rotate API keys periodically
- ✅ Use environment variables for secrets
- ✅ Keep dependencies updated
- ✅ Monitor for security vulnerabilities
- ✅ Implement rate limiting (if needed)
- ✅ Set up firewall rules (VPS)

---

## Cost Optimization

### OpenAI API

- Use GPT-4o-mini (most cost-effective)
- Set reasonable `max_tokens` limits
- Implement client-side validation
- Monitor usage regularly

### Hosting

- **Vercel**: Free tier for hobby projects
- **Netlify**: Free tier available
- **Railway**: $5/month starter plan
- **VPS**: $5-10/month for basic server

---

**Your application is now deployed and ready to use! 🚀**
