# Fix DNS Configuration Issue

## Problem
DNS records updated in LetsHost but still pointing to old IP (185.43.232.252) after 12 hours.

## Possible Causes & Solutions

### Solution 1: Verify Nameservers Match DNS Manager
The DNS Manager page says: "For the below DNS entries to work, please ensure your domain's nameservers are set to ns9.dnsireland.com and ns10.dnsireland.com."

**But your nameservers are:** ns5, ns6, ns7

**Fix:**
1. Go to Nameservers page in LetsHost
2. Change to:
   - Nameserver 1: `ns9.dnsireland.com`
   - Nameserver 2: `ns10.dnsireland.com`
   - Nameserver 3: (leave empty)
3. Click "CHANGE NAMESERVERS"
4. Wait 15-30 minutes
5. Then update DNS records in DNS Manager

### Solution 2: Delete and Recreate DNS Records
Sometimes records get stuck. Try:
1. Go to DNS Manager
2. **Delete** the `@` A record
3. **Delete** the `www` CNAME record (if it exists)
4. Wait 5 minutes
5. **Add** them back:
   - `@` A record → `216.198.79.1`
   - `www` CNAME → `f283da61c99a3f61.vercel-dns-017.com.`

### Solution 3: Check for Conflicting Records
Make sure there are NO other A or CNAME records for:
- `@` (root domain)
- `www`

Delete any duplicates or conflicting records.

### Solution 4: Use Vercel Nameservers Instead
If DNS Manager isn't working, switch to Vercel nameservers:
1. Go to Nameservers page
2. Change to:
   - Nameserver 1: `ns1.vercel-dns.com`
   - Nameserver 2: `ns2.vercel-dns.com`
3. Vercel will manage DNS automatically
4. Wait 24-48 hours for full propagation

### Solution 5: Contact LetsHost Support
If nothing works:
1. Email: support@letshost.ie
2. Tell them: "DNS records in DNS Manager aren't updating. Domain: gogginspub.com. Need A record @ pointing to 216.198.79.1"
3. They can check server-side configuration

## Recommended Order:
1. Try Solution 1 first (match nameservers to DNS Manager requirement)
2. If that doesn't work, try Solution 2 (delete and recreate)
3. If still not working, try Solution 4 (use Vercel nameservers)






