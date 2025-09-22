# 🚀 Deployment Guide - BioTrace to Vercel

## Quick Deploy (Recommended)

### Method 1: Vercel CLI (Fastest)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project folder
cd SIH

# Deploy to Vercel
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: biotrace-herb-traceability
# - Directory: ./
# - Override settings? N
```

### Method 2: GitHub + Vercel (Best for updates)
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - BioTrace website"
   git branch -M main
   git remote add origin https://github.com/yourusername/biotrace-herb-traceability.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy!

### Method 3: Drag & Drop (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub/Google
3. Drag your project folder to the deployment area
4. Wait for deployment to complete

## 🌐 After Deployment

Your website will be available at:
- **Production URL**: `https://biotrace-herb-traceability.vercel.app`
- **Custom Domain**: You can add your own domain in Vercel dashboard

## 🔄 Updates

### With Vercel CLI:
```bash
vercel --prod
```

### With GitHub:
- Push changes to your repository
- Vercel automatically redeploys

## 📁 Files Included

✅ `index.html` - Main website file
✅ `styles.css` - All styling and theming
✅ `script.js` - Interactive functionality
✅ `vercel.json` - Vercel configuration
✅ `package.json` - Project metadata
✅ `README.md` - Documentation

## 🎯 Features Deployed

- ✅ Quantum-Enhanced Detection System
- ✅ Blockchain Traceability Features
- ✅ Dark/Light Mode Toggle
- ✅ Responsive Design
- ✅ Herb Image Gallery
- ✅ Interactive Buttons
- ✅ Modern Purple Theme

## 🚨 Troubleshooting

**If deployment fails:**
1. Check that all files are in the root directory
2. Ensure `index.html` is the main file
3. Verify `vercel.json` configuration
4. Check Vercel logs for errors

**If images don't load:**
- Images are loaded from external URLs (Unsplash)
- No local image files needed
- Check internet connection

## 📞 Support

Need help? Check:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

🎉 **Your BioTrace website is ready to go live!**

