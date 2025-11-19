# Next Steps for Goggins of Monkstown Website

## 🚀 Immediate Actions

### 1. View the Website
The development server should be starting. Once it's ready:
- Open your browser to: **http://localhost:3000**
- Navigate through all pages to see the site in action
- Test on mobile by resizing your browser window

### 2. Review & Customize Content

#### Update Contact Information
- **File**: `components/Footer.tsx` and `app/contact/ContactForm.tsx`
- Replace `(01) XXX XXXX` with actual phone number
- Verify email address: `info@gogginspub.ie`

#### Update Opening Hours
- **File**: `data/hours.json`
- Edit if hours differ from what's currently set

#### Update Menu Items
- **File**: `data/menu.json`
- Add/remove menu items and update prices
- Add more sections (e.g., "Drinks", "Desserts")

#### Update Shop Products
- **File**: `data/products.json`
- Add/remove products
- Update prices and descriptions

---

## 🖼️ Add Real Images

### Create Image Directories
```bash
mkdir -p public/images
mkdir -p public/images/gallery
mkdir -p public/images/products
mkdir -p public/images/spaces
```

### Images Needed:
1. **Hero Image** (Home page)
   - Location: `app/page.tsx` (line 12)
   - Recommended: 1920x1080px, pub exterior
   - Replace Unsplash URL with local image

2. **Gallery Images** (12-16 images)
   - Location: `app/gallery/page.tsx` (line 8-21)
   - Recommended: 800x800px square
   - Interior, exterior, bar, snugs, pints, events

3. **Product Images** (4 images)
   - Location: `app/shop/page.tsx` and `app/shop/[slug]/page.tsx`
   - Recommended: 600x600px square
   - Gift card, t-shirt, cap, whiskey

4. **Space Images** (4 images)
   - Location: `app/spaces/page.tsx`
   - Recommended: 800x600px
   - Front Bar, Snug, Upstairs Lounge, Private Room

5. **Logo**
   - Location: `components/Header.tsx` (line 20)
   - Recommended: SVG or PNG with transparent background
   - Replace emoji with actual logo

### How to Replace Images:
1. Add images to `public/images/` directory
2. Update image paths in code:
   ```tsx
   // Before (Unsplash)
   src="https://images.unsplash.com/..."
   
   // After (local)
   src="/images/gallery/interior-1.jpg"
   ```

---

## 🔗 Connect External Services

### 1. Google Maps Embed
- **File**: `app/contact/ContactForm.tsx` (line 136)
- Get embed code from Google Maps
- Replace placeholder div with iframe

### 2. Social Media Links
- **File**: `components/Footer.tsx` (line 8-11)
- Add actual Facebook and Instagram URLs
- Consider using React Icons library for better icons

### 3. Booking System Integration
- **Files**: All "Book a Table" buttons
- Options:
  - OpenTable API
  - Resy API
  - Custom booking system
  - Simple email link: `mailto:bookings@gogginspub.ie?subject=Table Booking`

### 4. Contact Form Backend
- **File**: `app/contact/ContactForm.tsx` (line 43)
- Options:
  - Formspree
  - EmailJS
  - SendGrid API
  - Custom API endpoint

### 5. Payment Processing (Shop)
- **File**: `app/shop/cart/page.tsx` (line 28)
- Options:
  - Stripe
  - PayPal
  - Square
  - Custom payment gateway

---

## 🎨 Design Enhancements

### 1. Add Animations
- Consider Framer Motion for page transitions
- Add scroll animations for sections
- Enhance hover effects

### 2. Improve Typography
- Add custom font files if needed
- Adjust font sizes for better hierarchy

### 3. Add Loading States
- Skeleton loaders for images
- Loading spinners for forms

---

## 📱 Testing Checklist

- [ ] Test all pages on desktop (1920px, 1366px, 1024px)
- [ ] Test all pages on mobile (375px, 414px)
- [ ] Test navigation menu (desktop & mobile)
- [ ] Test shopping cart functionality
- [ ] Test contact form submission
- [ ] Test gallery lightbox
- [ ] Test all internal links
- [ ] Check SEO meta tags
- [ ] Validate HTML/CSS
- [ ] Test page load speeds

---

## 🚢 Deployment

### Option 1: Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```
- Free tier available
- Automatic deployments
- Built-in analytics

### Option 2: Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

### Option 3: Traditional Hosting
```bash
npm run build
npm start
# Deploy to your server
```

### Pre-Deployment Checklist
- [ ] Update all placeholder content
- [ ] Replace all placeholder images
- [ ] Test in production build: `npm run build`
- [ ] Set environment variables
- [ ] Configure domain name
- [ ] Set up SSL certificate
- [ ] Test all forms and integrations
- [ ] Submit sitemap to Google Search Console

---

## 📊 SEO Optimization

### Already Included:
✅ Meta tags
✅ Open Graph tags
✅ Schema.org markup
✅ Semantic HTML

### Additional Steps:
1. Create `sitemap.xml`
2. Create `robots.txt`
3. Submit to Google Search Console
4. Add Google Analytics
5. Set up Google Business Profile

---

## 🔧 Code Improvements (Optional)

1. **Add Error Boundaries** - Better error handling
2. **Add Loading States** - Better UX
3. **Add Toast Notifications** - Replace alerts
4. **Add Form Validation** - Enhanced validation
5. **Add Unit Tests** - Jest/React Testing Library
6. **Add E2E Tests** - Playwright/Cypress

---

## 📝 Content Updates

### Review All Pages:
- [ ] Home page copy
- [ ] Our Story timeline dates
- [ ] Spaces descriptions
- [ ] Menu items and prices
- [ ] Shop product details
- [ ] Contact information

### Legal Pages (Consider Adding):
- Privacy Policy
- Terms of Service
- Cookie Policy

---

## 🎯 Priority Order

1. **High Priority** (Before Launch):
   - Add real images
   - Update contact information
   - Connect booking system
   - Test all functionality

2. **Medium Priority** (Before Launch):
   - Add Google Maps
   - Connect contact form
   - Update social media links
   - Replace logo

3. **Low Priority** (Post-Launch):
   - Payment integration for shop
   - Advanced animations
   - Analytics setup
   - A/B testing

---

## 💡 Quick Tips

- Search for `TODO` in your codebase to find all placeholders
- Use `npm run build` to test production build locally
- Check browser console for any errors
- Use Lighthouse in Chrome DevTools for performance audit
- Test with screen readers for accessibility

---

## 🆘 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- TypeScript Docs: https://www.typescriptlang.org/docs

Good luck with your launch! 🍺

