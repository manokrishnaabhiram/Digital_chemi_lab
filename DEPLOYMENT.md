# Deployment Guide - Digital Chemistry Lab

## Quick Deployment Options

### Option 1: Deploy to Vercel (Recommended - 5 minutes)

Vercel provides the best hosting for React applications with automatic deployments.

#### Steps:

1. **Sign up for Vercel** (if you haven't already)
   - Go to [vercel.com](https://vercel.com)
   - Sign up using your GitHub account

2. **Import this repository**
   - Click "New Project" on Vercel dashboard
   - Import the repository: `manokrishnaabhiram/Digital_chemi_lab`
   - Select the branch: `copilot/build-chemistry-lab-app` (or merge to main first)

3. **Configure the project**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete
   - Your app will be live at: `https://your-project-name.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

**Cost:** FREE for personal projects!

---

### Option 2: Deploy to Netlify (Alternative - 5 minutes)

Netlify is another excellent hosting platform for static sites.

#### Steps:

1. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up using your GitHub account

2. **New site from Git**
   - Click "New site from Git"
   - Connect to GitHub
   - Select the repository: `manokrishnaabhiram/Digital_chemi_lab`

3. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Branch: `copilot/build-chemistry-lab-app` (or main)

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live in 2-3 minutes

**Cost:** FREE for personal projects!

---

### Option 3: Deploy to GitHub Pages (Free - 10 minutes)

Host directly on GitHub for free.

#### Steps:

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add the following to `package.json`:
   ```json
   {
     "homepage": "https://manokrishnaabhiram.github.io/Digital_chemi_lab",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**
   Add the base path:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/Digital_chemi_lab/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Save

**Cost:** FREE!

---

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup and Run

```bash
# Clone the repository
git clone https://github.com/manokrishnaabhiram/Digital_chemi_lab.git
cd Digital_chemi_lab

# Checkout the branch
git checkout copilot/build-chemistry-lab-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

---

## Environment Variables

Currently, the app doesn't require any environment variables. If you add backend services later, create a `.env` file:

```env
# Example for future use
VITE_API_URL=https://api.yourbackend.com
VITE_ANALYTICS_ID=your-analytics-id
```

---

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add domain (e.g., `chemistrylab.com`)
3. Configure DNS:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

### For Netlify:
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS:
   - Type: A
   - Name: @
   - Value: 75.2.60.5
   - Type: CNAME
   - Name: www
   - Value: your-site-name.netlify.app

---

## SSL Certificate

Both Vercel and Netlify provide **automatic HTTPS** with free SSL certificates from Let's Encrypt. No configuration needed!

---

## Performance Optimization

The app is already optimized with:
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minified production build
- ✅ Tree shaking
- ✅ CSS optimization

### Additional Optimizations:

1. **Enable CDN** (automatic with Vercel/Netlify)
2. **Compress Images** (if you add custom images)
3. **Add Service Worker** for PWA (future enhancement)

---

## Monitoring and Analytics

### Add Analytics (Optional)

1. **Google Analytics**
   ```bash
   npm install react-ga4
   ```
   
   In `src/main.tsx`:
   ```typescript
   import ReactGA from 'react-ga4';
   ReactGA.initialize('G-XXXXXXXXXX');
   ```

2. **Plausible Analytics** (Privacy-friendly)
   Add to `index.html`:
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

---

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. **Push to GitHub** → Automatically builds and deploys
2. **Pull Request** → Creates preview deployment
3. **Merge to main** → Deploys to production

---

## Troubleshooting

### Build Fails
- Check Node.js version: `node -v` (should be 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript errors: `npm run build`

### Blank Page After Deployment
- Ensure `base` path in `vite.config.ts` matches deployment
- Check browser console for errors
- Verify dist folder contains `index.html`

### Routing Issues (404 on refresh)
For SPA routing to work:

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify:** Create `public/_redirects`:
```
/*    /index.html   200
```

---

## Backup and Restore

### Backup
```bash
# Backup the entire project
git clone https://github.com/manokrishnaabhiram/Digital_chemi_lab.git backup

# Or download as ZIP from GitHub
```

### Restore
```bash
cd backup
npm install
npm run dev
```

---

## Cost Estimate

### Free Tier (Recommended for students)
- **Hosting:** FREE (Vercel/Netlify/GitHub Pages)
- **Domain:** $10-15/year (optional)
- **SSL Certificate:** FREE (automatic)
- **CDN:** FREE (included)
- **Bandwidth:** Unlimited for free tier
- **Total:** $0-15/year

### Paid Tier (For production/commercial)
- **Hosting:** $20-50/month (Vercel Pro/Netlify Pro)
- **Custom Domain:** $10-15/year
- **Analytics:** $0-9/month (Plausible)
- **Total:** $20-60/month

---

## Support and Updates

### Getting Help
- GitHub Issues: [Report bugs or request features](https://github.com/manokrishnaabhiram/Digital_chemi_lab/issues)
- Documentation: Check REQUIREMENTS.md and TECHNOLOGY_STACK.md

### Updating the App
```bash
git pull origin copilot/build-chemistry-lab-app
npm install
npm run build
```

For Vercel/Netlify, updates deploy automatically on git push.

---

## Next Steps After Deployment

1. ✅ Share the live URL with students/teachers
2. ✅ Collect feedback and iterate
3. ✅ Add more experiments (target: 20+ total)
4. ✅ Enhance animations and interactions
5. ✅ Add user authentication (optional)
6. ✅ Implement progress tracking
7. ✅ Create video tutorials
8. ✅ Add multi-language support

---

## Production Checklist

Before going live:

- [ ] Test all experiments
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify all links work
- [ ] Check loading times
- [ ] Ensure responsive design works
- [ ] Add favicon
- [ ] Update README with live URL
- [ ] Set up analytics
- [ ] Configure custom domain
- [ ] Test drag-and-drop on touch devices
- [ ] Review safety information accuracy
- [ ] Spell check all content

---

## Recommended: Deploy to Vercel Now!

**Fastest way to get your app live:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (from project directory)
vercel

# Follow prompts, and you're live in 2 minutes!
```

Your Digital Chemistry Lab will be accessible worldwide! 🎉
