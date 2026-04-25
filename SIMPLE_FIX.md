# Simple Domain Fix - Step by Step

## The Problem
Vercel shows "Invalid Configuration" even though nameservers are correct. This usually means Vercel needs to re-verify the domain.

## Quick Fix (5 minutes)

### Step 1: Remove Domains in Vercel
1. Go to: https://vercel.com/dashboard
2. Click on your **goggins-pub** project
3. Go to **Settings** → **Domains**
4. For **www.gogginspub.com**:
   - Click the **three dots** (⋮) or **Edit** button
   - Click **Remove** or **Delete**
   - Confirm removal
5. For **gogginspub.com**:
   - Click the **three dots** (⋮) or **Edit** button  
   - Click **Remove** or **Delete**
   - Confirm removal

### Step 2: Wait 1 Minute
- Give Vercel time to process the removal

### Step 3: Re-add gogginspub.com
1. Click **"Add Domain"** button
2. Type: `gogginspub.com` (NO www)
3. Click **"Add"**
4. **Wait 2-3 minutes** - watch for it to change from "Invalid" to "Valid Configuration"

### Step 4: Re-add www.gogginspub.com
1. Once `gogginspub.com` shows ✅ "Valid Configuration"
2. Click **"Add Domain"** again
3. Type: `www.gogginspub.com`
4. Click **"Add"**
5. Wait 2-3 minutes

### Step 5: Test
After both show "Valid Configuration":
- Wait 5-10 minutes
- Try: https://gogginspub.com
- Try: https://www.gogginspub.com

## If It Still Shows "Invalid Configuration"

Click the **"Learn more"** dropdown next to the invalid domain and tell me what error message it shows. Common errors:

- **"Nameservers not pointing to Vercel"** - But we verified they are correct
- **"DNS records not found"** - Vercel hasn't created them yet (wait longer)
- **"Domain verification failed"** - Ownership issue

## Alternative: Contact Vercel Support

If removing/re-adding doesn't work:
1. Go to: https://vercel.com/support
2. Explain: "Domain shows Invalid Configuration even though nameservers are correctly set to ns1.vercel-dns.com and ns2.vercel-dns.com"
3. They can manually fix it on their end



