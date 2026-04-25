# Steps for DNS Manager in LetsHost

## Important Note on the Page
The page says: "For the below DNS entries to work, please ensure your domain's nameservers are set to ns9.dnsireland.com and ns10.dnsireland.com."

But you currently have: ns5, ns6, ns7

## Step 1: Update Nameservers (If Needed)
You might need to change nameservers to match what DNS Manager expects:
- Nameserver 1: `ns9.dnsireland.com`
- Nameserver 2: `ns10.dnsireland.com`
- Nameserver 3: (leave empty or use ns7.dnsireland.ie)

OR the current ones (ns5, ns6, ns7) might work fine - let's try adding the zone first.

## Step 2: Add DNS Zone
1. Click the blue **"+ Add DNS Zone"** button (bottom right)
2. Enter your domain: `gogginspub.com`
3. Click Add or Save

## Step 3: Add A Records
Once the zone is created, you'll see the DNS records for gogginspub.com. Then:
1. Click "Add Record" or look for an add button
2. Add these 2 A records:

**Record 1:**
- Type: `A`
- Name/Host: `@` (or blank for root domain)
- Value: `76.76.21.21`
- TTL: `3600`

**Record 2:**
- Type: `A`
- Name/Host: `www`
- Value: `76.76.21.21`
- TTL: `3600`

## Quick Action
Click **"+ Add DNS Zone"** first and enter `gogginspub.com`!






