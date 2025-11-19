# Push to GitHub - Then Import to Vercel

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `goggins-pub` (or any name you like)
3. Description: "Goggins of Monkstown website"
4. Make it **Public** (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Push Your Code

After creating the repo, GitHub will show you commands. Run these in your terminal:

```bash
cd /Users/markgriffith/goggins-pub

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/goggins-pub.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**OR if you prefer SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/goggins-pub.git
git branch -M main
git push -u origin main
```

## Step 3: Import to Vercel

Once code is on GitHub:

1. Go back to Vercel: https://vercel.com/new
2. Click **Import Git Repository**
3. You should now see your `goggins-pub` repository
4. Click **Import** next to it
5. Vercel will auto-detect Next.js settings
6. Click **Deploy**

## Step 4: Add Domain

After deployment:

1. Go to your project in Vercel dashboard
2. Settings → Domains
3. Add `gogginspub.com` and `www.gogginspub.com`
4. Follow DNS instructions

---

## Quick Commands (After creating GitHub repo)

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
cd /Users/markgriffith/goggins-pub
git remote add origin https://github.com/YOUR_USERNAME/goggins-pub.git
git branch -M main
git push -u origin main
```

Then refresh the Vercel page and your repo should appear!

