# Kaaradhya

A demo storefront for Kaaradhya, "Everyday kurtis, on repeat". It sells cotton short kurtis, long kurtas, shirts, tops and pants: 39 pieces from ₹449 to ₹1,499, with the signature cuts in up to 18 colours.

## Run it

```bash
npm install
npm run dev
```

Build with `npm run build`, then preview with `npm run preview`.

## What works

- **Home:**
  - Shade-picker hero: the Everyday Kurti in ten colours, a day-of-the-week timer, one-tap add to bag and search.
  - Promises, "Shop by your day", and best-seller tabs.
  - The Classic Kurta shade card (18 colours).
  - "Plan your week" builder with the WEEKLY20 code.
  - Annotated "the cut" section, customer notes, coupon codes and an Instagram wall.
- **Shop:**
  - Category pages, with filters in the URL: fabric, wear-it-to, colour, price.
  - Sort, and search with suggestions.
- **Product page:**
  - Gallery with zoom, every colour of the same cut, size picker and size guide.
  - Pincode check, reviews, related and recently viewed.
- **Bag:**
  - Drawer and full page.
  - Free shipping progress over ₹799.
  - Coupons: `EVERYDAY10`, `FIRST15` (₹999+), `WEEKLY20` (₹2,999+).
- **Checkout:**
  - Address with pincode autofill, then UPI, card, net banking or COD (₹29).
  - Order confirmation and order history on this device.
- **Also:** wishlist, account, help/FAQ, our story, a 404 page and an error page.

All data is local (`src/data`). The cart, wishlist and orders are saved in localStorage. No real payment is taken. Reviews and customer notes are sample content.

## Stack

- Vite, React 19, React Router 7 and Tailwind CSS v4.
- Motion, Lenis and Phosphor icons.
- Schibsted Grotesk and Caveat fonts.
