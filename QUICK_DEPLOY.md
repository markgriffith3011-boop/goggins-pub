# Quick Deploy to gogginspub.com

## 🚀 Deploy Now (3 Steps)

### Step 1: Login to Vercel
```bash
cd /Users/markgriffith/goggins-pub
npx vercel login
```
This will open your browser - sign in with GitHub, GitLab, or email.

### Step 2: Deploy
```bash
npx vercel
```

Answer the prompts:
- **Set up and deploy?** → Type `Y` and press Enter
- **Which scope?** → Select your account
- **Link to existing project?** → Type `N` and press Enter
- **What's your project's name?** → Press Enter (uses `goggins-pub`)
- **In which directory is your code located?** → Press Enter (uses `./`)

Wait for deployment to complete. You'll get a URL like: `goggins-pub-xxxxx.vercel.app`

### Step 3: Connect Your Domain

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your **goggins-pub** project
3. Click **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `gogginspub.com`
6. Click **Add**
7. Also add: `www.gogginspub.com`

### Step 4: Update DNS (At Your Domain Registrar)

Vercel will show you DNS records to add. Usually:

**For gogginspub.com:**
- Type: `A` 
- Name: `@` (or leave blank)
- Value: `76.76.21.21` (Vercel will show the exact IP)

**OR use CNAME:**
- Type: `CNAME`
- Name: `@` (or leave blank) 
- Value: `cname.vercel-dns.com`

**For www.gogginspub.com:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

**Where to add DNS:**
- Go to your domain registrar (where you bought gogginspub.com)
- Find DNS settings / DNS management
- Add the records Vercel shows you
- Save and wait 5-60 minutes for propagation

---

## 🔍 Make It Searchable on Google

### After DNS is working (site loads at gogginspub.com):

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Click "Add Property"
   - Enter: `https://gogginspub.com`
   - Choose verification method (HTML file or DNS record)

2. **Submit Sitemap**
   - In Search Console, go to "Sitemaps"
   - Add: `https://gogginspub.com/sitemap.xml`
   - Click "Submit"

3. **Request Indexing**
   - Go to "URL Inspection"
   - Enter: `https://gogginspub.com`
   - Click "Request Indexing"

4. **Wait**
   - Google typically indexes within days/weeks
   - You can check status in Search Console

---

## ✅ What's Already Done

- ✅ Sitemap created (`/sitemap.xml`)
- ✅ Robots.txt created (`/robots.txt`)
- ✅ SEO metadata updated for gogginspub.com
- ✅ All pages ready for deployment

---

## 🆘 Troubleshooting

**Domain not working?**
- Wait 24-48 hours for DNS propagation
- Check DNS records match Vercel's instructions
- Try `dig gogginspub.com` to check DNS

**Site not in Google?**
- Make sure site loads at gogginspub.com first
- Submit sitemap in Search Console
- Request indexing
- Can take days/weeks to appear

**Need help?**
- Vercel docs: https://vercel.com/docs
- Domain setup: https://vercel.com/docs/concepts/projects/domains

---

## 📝 Next Steps After Deployment

1. Test all pages work
2. Add real images (replace placeholders)
3. Update contact info (phone, email)
4. Connect booking system
5. Add Google Analytics (optional)

