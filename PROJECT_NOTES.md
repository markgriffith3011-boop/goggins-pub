# Goggins of Monkstown - Project Notes

## Project Status
✅ Complete and ready for development

## Quick Start
```bash
npm install
npm run dev
```

## Project Structure
```
goggins-pub/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── our-story/         # Our Story page
│   ├── spaces/            # Spaces/rooms page
│   ├── gallery/           # Gallery with lightbox
│   ├── menu/              # Menu page
│   ├── shop/              # Shop pages
│   │   ├── page.tsx       # Shop listing
│   │   ├── [slug]/        # Product detail pages
│   │   └── cart/          # Shopping cart
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with SEO
│   └── globals.css         # Global styles
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer
│   └── CartIcon.tsx       # Cart icon with badge
├── lib/                   # Utilities
│   └── CartProvider.tsx   # Shopping cart context
└── data/                  # JSON data files
    ├── hours.json         # Opening hours
    ├── menu.json          # Menu items
    └── products.json      # Shop products
```

## TODO Items (Marked in Code)
1. **Images**: Replace all placeholder images with actual photos
   - Hero images
   - Gallery images (12-16 needed)
   - Product images
   - Space/room images

2. **Contact Information**:
   - Replace phone number placeholder: `(01) XXX XXXX`
   - Verify email: `info@gogginspub.ie`
   - Add Google Maps embed in contact page

3. **Social Media**:
   - Add actual Facebook and Instagram links
   - Replace emoji icons with proper social icons

4. **Logo**:
   - Replace emoji logo in header with actual logo image

5. **Booking Integration**:
   - Connect "Book a Table" buttons to actual booking system
   - Update booking URL placeholder

6. **Payment Integration**:
   - Connect shop checkout to payment processor
   - Currently shows alert on checkout

7. **Form Submission**:
   - Connect contact form to email service/API
   - Currently logs to console

## Design System
- **Colors**: Custom Tailwind palette
  - `pub-green`: Deep greens (primary)
  - `pub-cream`: Warm creams (backgrounds)
  - `pub-wood`: Wood browns (accents)
- **Fonts**: 
  - Serif (Georgia) for headings
  - Sans-serif for body text
- **Components**: Reusable button styles, section padding, container widths

## Features Implemented
✅ Responsive design (mobile-first)
✅ SEO optimization (meta tags, OG tags, schema.org)
✅ Shopping cart with Context API
✅ Gallery lightbox with navigation
✅ Contact form with validation
✅ Dynamic product pages
✅ Opening hours from JSON
✅ Menu from JSON
✅ Sticky header navigation
✅ Mobile menu

## Next Steps
1. Install dependencies: `npm install`
2. Add real images to `/public/images/` directory
3. Update all TODO comments in code
4. Test all pages and functionality
5. Deploy to production

