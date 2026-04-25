# Updated DNS Records for Vercel (New IP Address)

## Important: Vercel Has Updated Their IP Address!

Vercel has expanded their IP range. The new IP address is different from what we set up.

## Required DNS Records:

### For `gogginspub.com` (root domain):
- **Type:** `A`
- **Name:** `@` (or blank)
- **Value:** `216.198.79.1` ⚠️ **NEW IP ADDRESS**

### For `www.gogginspub.com`:
- **Type:** `CNAME`
- **Name:** `www`
- **Value:** `f283da61c99a3f61.vercel-dns-017.com.` (with trailing dot)

## What You Need to Do in LetsHost:

### Step 1: Update the Root Domain A Record
1. Go to DNS Manager in LetsHost
2. Find the `@` A record (currently pointing to `76.76.21.21`)
3. Click the **edit/pencil icon**
4. Change the value to: `216.198.79.1`
5. Click "Confirm" or "Save"

### Step 2: Verify the www CNAME Record
1. Check that the `www` CNAME record exists
2. Make sure it points to: `f283da61c99a3f61.vercel-dns-017.com.`
3. If it doesn't exist or is wrong, delete any `www` A record and add the CNAME

## Final DNS Records Should Be:

1. **`@` A record** → `216.198.79.1` ✅ (UPDATED)
2. **`www` CNAME record** → `f283da61c99a3f61.vercel-dns-017.com.` ✅

## Note:
- The old IP (`76.76.21.21`) will still work, but Vercel recommends using the new one (`216.198.79.1`)
- After updating, wait 15-30 minutes for DNS propagation
- Then click "Refresh" in Vercel dashboard






