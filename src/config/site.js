// Brand-level settings. Change the name, offers, fees or contact details here, not in components.
export const site = {
  name: 'Kaaradhya',
  tagline: 'Everyday kurtis, on repeat',
  currency: 'INR',
  locale: 'en-IN',
  freeShippingOver: 799,
  shippingFee: 49,
  codFee: 29,
  stitchFee: 0,
  orderPrefix: 'KA',
  instagram: '@kaaradhya.in',
  phone: '+91 99300 21480',
  email: 'hello@kaaradhya.in',

  announcements: [
    'Free shipping on orders above ₹799',
    'Plan your week: 20% off 5 or more with code WEEKLY20',
    'New shades in the Everyday Kurti: Red, Olive and Sage',
  ],

  // Coupon codes accepted at bag / checkout (demo).
  coupons: {
    EVERYDAY10: { type: 'percent', value: 10, label: '10% off everything' },
    FIRST15: { type: 'percent', value: 15, label: '15% off your first order', min: 999 },
    WEEKLY20: { type: 'percent', value: 20, label: '20% off your planned week', min: 2999 },
  },

  footer: {
    blurb: 'Soft cotton kurtis, shirts and pants for college, office and every day in between. One perfect cut, in every colour you love.',
    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'Short Kurtis', to: '/shop/short-kurtis' },
          { label: 'Kurtas', to: '/shop/kurtas' },
          { label: 'Shirts & Tops', to: '/shop/shirts-tops' },
          { label: 'Pants', to: '/shop/pants' },
          { label: 'Under ₹499', to: '/shop?price=u499' },
          { label: 'New shades', to: '/shop?sort=new' },
        ],
      },
      {
        title: 'Help',
        links: [
          { label: 'Track order', to: '/account' },
          { label: 'Size guide', to: '/help#sizing' },
          { label: 'Shipping', to: '/help#shipping' },
          { label: 'Returns', to: '/help#returns' },
          { label: 'Contact', to: '/help#contact' },
        ],
      },
      {
        title: 'Kaaradhya',
        links: [
          { label: 'Our story', to: '/about' },
          { label: 'The fabric', to: '/about#fabric' },
          { label: 'Wishlist', to: '/wishlist' },
          { label: 'Privacy', to: '/help#privacy' },
        ],
      },
    ],
    social: [
      { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
      { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
      { label: 'Pinterest', icon: 'pinterest', href: 'https://pinterest.com' },
      { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
    ],
  },
}
