// Demo catalogue built from the client's photos (public/media/products/kNN-1 / kNN-2).
// `n` is the source photo number (src/assets/image/ImgNN). Several photos show the same
// piece styled twice; those become extra gallery images (`more`) instead of new products.
// Shape mirrors what a products API would return, so services/catalog.js can switch to fetch() later.
// Prices sit between ₹449 and ₹1,499; ratings and copy are sample data.

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

const CATEGORY = {
  'short-kurtis': { includes: 'One short kurti', care: ['Machine wash cold, gentle', 'Wash darks separately', 'Iron on medium'] },
  kurtas: { includes: 'One kurta (pants not included)', care: ['Machine wash cold, gentle', 'Dry in shade to keep the colour', 'Iron on medium'] },
  'shirts-tops': { includes: 'One shirt or top', care: ['Machine wash cold', 'Do not bleach', 'Iron on medium'] },
  pants: { includes: 'One pair of pants', care: ['Machine wash cold', 'Do not tumble dry', 'Iron on low'] },
}

const item = (category) => (p) => ({ category, sizes: SIZES, ...CATEGORY[category], ...p })
const short = item('short-kurtis')
const kurta = item('kurtas')
const shirt = item('shirts-tops')
const pant = item('pants')

// The everyday short kurti and the classic long kurta: one cut, many colours.
const S = { family: 'everyday-short', fabric: 'Cotton Slub', cut: 'Mandarin collar, 3/4 sleeves, side slits' }
const L = { family: 'classic-long', fabric: 'Cotton Flax', cut: 'Mandarin collar, button placket, calf length' }

const raw = [
  short({ n: 13, ...S, name: 'Everyday Kurti in Ivory', color: 'Ivory', hex: '#efe9dc', occasions: ['office', 'everyday'], price: 649, rating: 4.7, reviews: 312, bestseller: true, badge: 'Bestseller', blurb: 'The kurti we are known for, in soft ivory. A neat mandarin collar, three buttons and side slits that sit just right over jeans or pants.' }),
  short({ n: 14, ...S, name: 'Everyday Kurti in Powder Blue', color: 'Powder Blue', hex: '#9db6cf', occasions: ['college', 'office'], price: 649, rating: 4.7, reviews: 241, bestseller: true, blurb: 'The everyday kurti in a cool powder blue. Looks crisp at 9 a.m. and still fresh at 6.' }),
  short({ n: 15, ...S, name: 'Everyday Kurti in Dusty Rose', color: 'Dusty Rose', hex: '#b9787c', occasions: ['college', 'everyday'], price: 649, rating: 4.6, reviews: 188, blurb: 'The everyday kurti in a muted dusty rose that suits every skin tone.' }),
  short({ n: 16, ...S, more: [39], name: 'Everyday Kurti in Lilac', color: 'Lilac', hex: '#c7aee3', occasions: ['college', 'everyday'], price: 649, compareAt: 799, rating: 4.8, reviews: 276, bestseller: true, badge: 'Most loved', blurb: 'Our best-loved shade. Soft lilac cotton slub with a mandarin collar and 3/4 sleeves.' }),
  short({ n: 17, ...S, name: 'Everyday Kurti in Black', color: 'Black', hex: '#1f1d20', occasions: ['office', 'college'], price: 649, rating: 4.7, reviews: 205, blurb: 'The everyday kurti in black, with tonal buttons. Pair with anything.' }),
  short({ n: 18, ...S, name: 'Everyday Kurti in Navy', color: 'Navy', hex: '#273356', occasions: ['office'], price: 649, rating: 4.6, reviews: 143, blurb: 'Deep navy for meeting days. Smart enough for the boardroom, soft enough for the commute.' }),
  short({ n: 19, ...S, name: 'Everyday Kurti in Mustard', bestseller: true, color: 'Mustard', hex: '#e2c34d', occasions: ['college', 'everyday'], price: 649, rating: 4.6, reviews: 167, blurb: 'A happy mustard yellow for days that need a little sunshine.' }),
  short({ n: 20, ...S, name: 'Everyday Kurti in Ice Grey', color: 'Ice Grey', hex: '#b9c2c7', occasions: ['office', 'everyday'], price: 499, compareAt: 649, rating: 4.5, reviews: 98, blurb: 'A pale ice grey that pairs with navy and black pants alike.' }),
  short({ n: 24, ...S, name: 'Everyday Kurti in Red', bestseller: true, color: 'Red', hex: '#a11a24', occasions: ['college', 'everyday'], price: 649, rating: 4.7, reviews: 159, isNew: true, badge: 'New shade', blurb: 'The everyday kurti in a deep red. The one that gets the compliments.' }),
  short({ n: 41, ...S, name: 'Everyday Kurti in Olive', color: 'Olive', hex: '#5d5a2b', occasions: ['office', 'college'], price: 649, rating: 4.6, reviews: 87, isNew: true, badge: 'New shade', blurb: 'A rich olive green with ivory pants is our favourite Monday outfit.' }),
  short({ n: 49, ...S, name: 'Everyday Kurti in Blush', color: 'Blush', hex: '#f1b9b7', occasions: ['college', 'everyday'], price: 499, compareAt: 649, rating: 4.5, reviews: 76, blurb: 'Soft blush pink with a slightly longer hem. Lovely with black leggings.' }),
  short({ n: 29, name: 'Notch Neck Kurti in Rose', fabric: 'Cotton Cambric', cut: 'Notch neck, 3/4 sleeves, straight hem', color: 'Rose', hex: '#b57a78', occasions: ['office', 'everyday'], price: 599, rating: 4.5, reviews: 64, blurb: 'A clean notch neck in rose cambric, with a straight hem and sleeves that end just below the elbow.' }),

  kurta({ n: 11, ...L, more: [35], name: 'Classic Kurta in Lilac', color: 'Lilac', hex: '#c9b2e2', occasions: ['office', 'everyday'], price: 899, compareAt: 1099, rating: 4.8, reviews: 228, bestseller: true, badge: 'Bestseller', blurb: 'The long kurta that started it all, in our signature lilac. Calf length, side slits, a placket that buttons properly.' }),
  kurta({ n: 9, ...L, more: [32], name: 'Classic Kurta in Mustard', color: 'Mustard', hex: '#e3c140', occasions: ['everyday', 'college'], price: 899, rating: 4.7, reviews: 133, blurb: 'Mustard yellow cotton flax that brightens a grey morning.' }),
  kurta({ n: 43, ...L, more: [48], name: 'Classic Kurta in Beige', bestseller: true, color: 'Beige', hex: '#d8c4a5', occasions: ['office', 'everyday'], price: 899, rating: 4.7, reviews: 152, blurb: 'Warm beige with maroon or white palazzos. The most versatile kurta we make.' }),
  kurta({ n: 44, ...L, more: [12], name: 'Classic Kurta in Maroon', color: 'Maroon', hex: '#8f1d2c', occasions: ['office', 'everyday'], price: 899, rating: 4.7, reviews: 119, blurb: 'Deep maroon that looks festive with a dupatta and sharp without one.' }),
  kurta({ n: 45, ...L, name: 'Classic Kurta in Mauve', color: 'Mauve', hex: '#b48789', occasions: ['office', 'everyday'], price: 899, rating: 4.6, reviews: 82, blurb: 'A soft mauve that goes with ivory, black or blush bottoms.' }),
  kurta({ n: 46, ...L, name: 'Classic Kurta in Sage', color: 'Sage', hex: '#8eaa86', occasions: ['everyday', 'office'], price: 899, rating: 4.7, reviews: 91, isNew: true, badge: 'New shade', blurb: 'Fresh sage green, cool to look at and cooler to wear.' }),
  kurta({ n: 47, ...L, name: 'Classic Kurta in Denim Blue', color: 'Denim Blue', hex: '#6f8fb5', occasions: ['office', 'college'], price: 899, rating: 4.6, reviews: 77, blurb: 'A washed denim blue that pairs with white pants for an easy office look.' }),
  kurta({ n: 22, ...L, name: 'Classic Kurta in Navy', bestseller: true, color: 'Navy', hex: '#202b4a', occasions: ['office'], price: 949, rating: 4.7, reviews: 104, blurb: 'Navy cotton flax with a sharp slit hem. The presentation-day kurta.' }),
  kurta({ n: 1, ...L, name: 'Classic Kurta in Rani Pink', color: 'Rani Pink', hex: '#e0236e', occasions: ['everyday', 'college'], price: 799, rating: 4.6, reviews: 95, blurb: 'Bold rani pink for the days you want to be seen.' }),
  kurta({ n: 3, ...L, name: 'Classic Kurta in Mint', color: 'Mint', hex: '#cfe1d4', occasions: ['everyday', 'college'], price: 799, rating: 4.5, reviews: 58, blurb: 'Pale mint, soft as a summer morning.' }),
  kurta({ n: 4, ...L, name: 'Classic Kurta in Rust', color: 'Rust', hex: '#7e3a32', occasions: ['office', 'everyday'], price: 799, rating: 4.5, reviews: 49, blurb: 'Earthy rust that pairs beautifully with blush pants.' }),
  kurta({ n: 5, ...L, name: 'Classic Kurta in Black', color: 'Black', hex: '#1d1b1e', occasions: ['office', 'everyday'], price: 799, rating: 4.7, reviews: 121, blurb: 'The black kurta, finished with tonal buttons. Try it with red palazzos.' }),
  kurta({ n: 6, ...L, name: 'Classic Kurta in White', color: 'White', hex: '#f4f3f0', occasions: ['office', 'everyday'], price: 799, rating: 4.6, reviews: 88, blurb: 'Crisp white cotton flax. Not see-through, we promise.' }),
  kurta({ n: 7, ...L, name: 'Classic Kurta in Powder Blue', color: 'Powder Blue', hex: '#8fb0d6', occasions: ['office', 'college'], price: 799, rating: 4.6, reviews: 73, blurb: 'Powder blue over navy pants, a combination that never misses.' }),
  kurta({ n: 8, ...L, name: 'Classic Kurta in Ivory', color: 'Ivory', hex: '#efe7d6', occasions: ['office', 'everyday'], price: 799, rating: 4.6, reviews: 66, blurb: 'Warm ivory, softer than white and easier to live in.' }),
  kurta({ n: 10, ...L, name: 'Classic Kurta in Peach', color: 'Peach', hex: '#f6c39a', occasions: ['everyday', 'college'], price: 799, rating: 4.5, reviews: 52, blurb: 'A light peach that glows in daylight.' }),
  kurta({ n: 40, ...L, name: 'Classic Kurta in Olive', color: 'Olive', hex: '#57552a', occasions: ['office', 'everyday'], price: 799, rating: 4.6, reviews: 61, blurb: 'Olive green with beige palazzos. Calm and grown-up.' }),
  kurta({ n: 50, ...L, name: 'Classic Kurta in Blush', color: 'Blush', hex: '#f2b6b6', occasions: ['everyday', 'college'], price: 799, rating: 4.5, reviews: 47, blurb: 'Blush pink with a matching straight pant look.' }),

  shirt({ n: 27, more: [36, 42], name: 'Cotton Shirt in Black', family: 'everyday-shirt', fabric: 'Cotton Poplin', cut: 'Classic collar, roll-up sleeves, curved hem', color: 'Black', hex: '#1e1c1f', occasions: ['office', 'college'], price: 799, rating: 4.7, reviews: 133, bestseller: true, blurb: 'A soft black shirt with a curved hem you can tuck or leave out. Sleeves roll and stay.' }),
  shirt({ n: 30, name: 'Cotton Shirt in Olive', family: 'everyday-shirt', fabric: 'Cotton Poplin', cut: 'Classic collar, roll-up sleeves, curved hem', color: 'Olive', hex: '#4f4a24', occasions: ['office', 'college'], price: 799, rating: 4.6, reviews: 57, blurb: 'The cotton shirt in olive, over ivory wide pants.' }),
  shirt({ n: 34, name: 'Cotton Shirt in Red', family: 'everyday-shirt', fabric: 'Cotton Poplin', cut: 'Classic collar, roll-up sleeves, curved hem', color: 'Red', hex: '#a71b26', occasions: ['college', 'office'], price: 799, rating: 4.6, reviews: 69, blurb: 'The cotton shirt in red, tucked into black wide-leg pants.' }),
  shirt({ n: 38, name: 'Cotton Shirt in Navy', family: 'everyday-shirt', fabric: 'Cotton Poplin', cut: 'Classic collar, full sleeves, curved hem', color: 'Navy', hex: '#1d2440', occasions: ['office'], price: 849, rating: 4.6, reviews: 48, blurb: 'The cotton shirt in navy, cropped at the waist to sit over high-rise palazzos.' }),
  shirt({ n: 31, more: [37], name: 'Sleeveless Shirt in Black', fabric: 'Rayon', cut: 'V neck, sleeveless, button front', color: 'Black', hex: '#1f1d20', occasions: ['college', 'everyday'], price: 699, rating: 4.5, reviews: 54, blurb: 'A breezy sleeveless shirt with a soft V neck. For hot college afternoons.' }),
  shirt({ n: 21, more: [25, 26], name: 'Tiered Bell-Sleeve Top', fabric: 'Cotton Dobby', cut: 'Tie neck, tiered body, bell sleeves', color: 'Ivory', hex: '#efe8da', occasions: ['college', 'everyday'], price: 749, rating: 4.7, reviews: 92, isNew: true, badge: 'New', blurb: 'An ivory dobby top with a tie neck, a tiered body and bell sleeves.' }),
  shirt({ n: 23, more: [33], name: 'Tie-Neck Peplum Top', fabric: 'Cotton Dobby', cut: 'Tie neck, peplum waist, frill sleeves', color: 'Ivory', hex: '#ede5d4', occasions: ['college', 'everyday'], price: 699, rating: 4.6, reviews: 71, blurb: 'A sweet tie-neck top with a peplum waist. Lovely with khaki or maroon pants.' }),

  pant({ n: 2, name: 'Pleated Straight Pants in Black', fabric: 'Cotton Twill', cut: 'High rise, front pleats, straight leg', color: 'Black', hex: '#1d1c1e', occasions: ['office', 'college'], price: 499, compareAt: 699, rating: 4.6, reviews: 118, blurb: 'High-rise black pants with front pleats and an elastic back. The pants under every kurti.' }),
  pant({ n: 28, name: 'Elastic Straight Pants in Grey', fabric: 'Cotton Twill', cut: 'High rise, elastic back, straight leg', color: 'Grey', hex: '#7c8187', occasions: ['college', 'everyday'], price: 449, compareAt: 599, rating: 4.5, reviews: 84, blurb: 'Soft grey straight pants with deep pockets. Wear with tops and short kurtis.' }),
]

const slugify = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const id = (n) => `k${String(n).padStart(2, '0')}`

export const products = raw.map(({ n, more = [], ...p }) => ({
  id: id(n),
  slug: slugify(p.name),
  images: [`${id(n)}-1`, ...(more.length ? more.map((m) => `${id(m)}-1`) : [`${id(n)}-2`])],
  ...p,
}))

export const getProduct = (pid) => products.find((p) => p.id === pid)
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)
