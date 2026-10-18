// Navigation content: the mega-menu panels (desktop), menu tabs (phone) and quick chips.

export const megaMenus = [
  {
    id: 'shop',
    label: 'Shop',
    to: '/shop',
    columns: [
      {
        title: 'Categories',
        items: [
          { label: 'Short Kurtis', desc: 'Over jeans, every day', image: 'k16-1', to: '/shop/short-kurtis' },
          { label: 'Kurtas', desc: 'The classic, 18 colours', image: 'k11-1', to: '/shop/kurtas' },
          { label: 'Shirts & Tops', desc: 'Crisp, easy, tuckable', image: 'k27-1', to: '/shop/shirts-tops' },
          { label: 'Pants', desc: 'The ones under it all', image: 'k28-1', to: '/shop/pants' },
          { label: 'Under ₹499', desc: 'Small price, same love', image: 'k20-1', to: '/shop?price=u499' },
        ],
      },
    ],
    feature: { image: 'k24-1', title: 'New shade: the Everyday Kurti in Red', to: '/product/everyday-kurti-in-red' },
  },
  {
    id: 'wear',
    label: 'Wear it to',
    to: '/shop',
    columns: [
      {
        title: 'Shop by your day',
        items: [
          { label: 'College', desc: 'From 9 a.m. lectures', image: 'k19-1', to: '/shop?occasion=college' },
          { label: 'Office', desc: 'Meeting-ready cotton', image: 'k22-1', to: '/shop?occasion=office' },
          { label: 'Everyday', desc: 'Errands, chai, repeat', image: 'k13-1', to: '/shop?occasion=everyday' },
          { label: 'Shirts', desc: 'For the shirt days', image: 'k34-1', to: '/shop/shirts-tops' },
          { label: 'New in', desc: 'Fresh shades and cuts', image: 'k21-1', to: '/shop?sort=new' },
        ],
      },
    ],
    feature: { image: 'k11-1', title: 'The Classic Kurta in Lilac, our bestseller', to: '/product/classic-kurta-in-lilac' },
  },
]

export const navLinks = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'Under ₹499', to: '/shop?price=u499' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]

export const quickChips = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'Short Kurtis', to: '/shop/short-kurtis' },
  { label: 'Kurtas', to: '/shop/kurtas' },
  { label: 'Shirts & Tops', to: '/shop/shirts-tops' },
  { label: 'Pants', to: '/shop/pants' },
  { label: 'Under ₹499', to: '/shop?price=u499' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]
