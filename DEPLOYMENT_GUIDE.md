# Deployment Guide for gogginspub.com

## 🚀 Quick Deploy to Vercel (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This will open your browser to authenticate.

### Step 3: Deploy
```bash
cd /Users/markgriffith/goggins-pub
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (Choose your account)
- Link to existing project? **No**
- What's your project's name? **goggins-pub** (or press Enter)
- In which directory is your code located? **./** (press Enter)

### Step 4: Add Your Domain

After deployment, you'll get a URL like `goggins-pub.vercel.app`

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Domains**
4. Add `gogginspub.com` and `www.gogginspub.com`
5. Follow Vercel's instructions to update your DNS records

### Step 5: Update DNS Records

You'll need to add these DNS records to your domain registrar:

**For gogginspub.com:**
- Type: `A` or `CNAME`
- Name: `@` (or leave blank)
- Value: (Vercel will provide this - usually a CNAME to `cname.vercel-dns.com`)

**For www.gogginspub.com:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

Vercel will show you the exact values after you add the domain.

---

## 🔍 Make It Searchable on Google

### Step 1: Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://gogginspub.com`
3. Verify ownership (Vercel can help with this)
4. Submit sitemap: `https://gogginspub.com/sitemap.xml`

### Step 2: Create Sitemap

We'll need to add a sitemap. I can create this for you.

### Step 3: Wait for Indexing

- Google typically indexes sites within a few days to weeks
- You can request indexing in Search Console
- Make sure your site is accessible and has good content

---

## 📝 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Update contact information (phone, email)
- [ ] Add real images (or keep placeholders for now)
- [ ] Test all pages work correctly
- [ ] Update any placeholder content
- [ ] Check that all links work

---

## 🎯 Alternative: Deploy to Netlify

If you prefer Netlify:

1. Sign up at [netlify.com](https://netlify.com)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```
4. Add your domain in Netlify dashboard

---

## ⚙️ Environment Variables (If Needed Later)

If you add features that need API keys:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add any needed keys

---

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to GitHub. To set this up:

1. Push your code to GitHub
2. In Vercel, connect your GitHub repository
3. Every push will auto-deploy!

---

## 📊 After Deployment

1. **Test your site**: Visit `https://gogginspub.com`
2. **Check SSL**: Should be automatic with Vercel
3. **Submit to Google**: Use Search Console
4. **Add Analytics**: Consider Google Analytics
5. **Monitor**: Check Vercel dashboard for performance

---

## 🆘 Troubleshooting

**Domain not working?**
- Check DNS records are correct
- Wait 24-48 hours for DNS propagation
- Check Vercel domain settings

**Site not showing in Google?**
- Make sure site is accessible
- Submit sitemap in Search Console
- Request indexing
- Wait - can take days/weeks

**Need help?**
- Vercel docs: https://vercel.com/docs
- Domain setup: https://vercel.com/docs/concepts/projects/domains

