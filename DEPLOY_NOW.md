# Deploy to gogginspub.com - Step by Step

## Step 1: Login to Vercel (Do This First)

Run this command in your terminal:
```bash
cd /Users/markgriffith/goggins-pub
npx vercel login
```

When it shows a code like `RCVG-HDVL`:
1. Visit: https://vercel.com/device
2. Enter the code shown
3. Press Enter in terminal

---

## Step 2: Deploy (I'll run this for you)

Once you're logged in, I'll deploy with:
```bash
npx vercel
```

Answer the prompts:
- **Set up and deploy?** → `Y`
- **Which scope?** → Select your account
- **Link to existing project?** → `N`
- **Project name?** → Press Enter (uses `goggins-pub`)
- **Directory?** → Press Enter (uses `./`)

---

## Step 3: Connect Domain (In Vercel Dashboard)

After deployment completes:

1. Go to: https://vercel.com/dashboard
2. Click on your **goggins-pub** project
3. Click **Settings** tab
4. Click **Domains** in left sidebar
5. Click **Add Domain** button
6. Enter: `gogginspub.com` → Click **Add**
7. Enter: `www.gogginspub.com` → Click **Add**

Vercel will show you DNS records to add.

---

## Step 4: Update DNS (At Your Domain Registrar)

Go to where you bought gogginspub.com (GoDaddy, Namecheap, etc.):

**For gogginspub.com:**
- Type: `CNAME` or `A` (Vercel will tell you which)
- Name: `@` (or leave blank)
- Value: `cname.vercel-dns.com` (or IP Vercel provides)

**For www.gogginspub.com:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

Save and wait 5-60 minutes.

---

## Step 5: Google Search Console (After DNS Works)

Once site loads at gogginspub.com:

1. Go to: https://search.google.com/search-console
2. Click **Add Property**
3. Enter: `https://gogginspub.com`
4. Choose verification method (HTML file or DNS)
5. Verify ownership
6. Go to **Sitemaps** → Add: `https://gogginspub.com/sitemap.xml`
7. Go to **URL Inspection** → Enter homepage → **Request Indexing**

---

## Ready to Start?

**First, run this to login:**
```bash
npx vercel login
```

Then let me know when you're logged in and I'll deploy!

