# Correct DNS Records for Vercel

## What Vercel Wants (from your screenshot):

### For `www.gogginspub.com`:
- **Type:** `CNAME`
- **Name:** `www`
- **Value:** `f283da61c99a3f61.vercel-dns-017.com.`

### For `gogginspub.com` (root domain):
- **Type:** `A`
- **Name:** `@` (or blank)
- **Value:** `76.76.21.21`

## What You Need to Do in LetsHost DNS Manager:

### Step 1: Delete the Current `www` A Record
1. Go to DNS Manager in LetsHost
2. Find the `www` A record (pointing to `76.76.21.21`)
3. Click the **delete/trash icon** to remove it

### Step 2: Add the `www` CNAME Record
1. Click **"+ Add Record"**
2. Fill in:
   - **Type:** `CNAME`
   - **Name:** `www`
   - **TTL:** `3600` (or default)
   - **Value/RDATA:** `f283da61c99a3f61.vercel-dns-017.com.`
   - (Make sure to include the trailing dot `.` at the end!)
3. Click **"Confirm"**

### Step 3: Verify the Root Domain A Record
1. Check that the `@` A record exists
2. Make sure it points to: `76.76.21.21`
3. If it doesn't, edit it to point to `76.76.21.21`

## Final DNS Records Should Be:

1. **`@` A record** → `76.76.21.21` ✅
2. **`www` CNAME record** → `f283da61c99a3f61.vercel-dns-017.com.` ✅

## Important Notes:

- The CNAME value must end with a **trailing dot** (`.`)
- You cannot have both an A record and CNAME for `www` - delete the A record first
- After updating, wait 15-30 minutes for DNS to propagate
- Then click "Refresh" in Vercel dashboard






