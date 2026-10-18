// Editorial content for the storefront. Kept out of components so the client
// (or a CMS later) can change copy and imagery in one place.
// Image ids refer to public/media/products (kNN-1 full look, kNN-2 close crop).
// Hero cut-outs live in public/media/hero/kNN.webp.

// Hero: the Everyday Kurti in ten shades. Each shade has a cut-out of the model, the
// product it opens, and the day of the week it is "for" in the planner.
export const heroShades = [
  { n: 16, name: 'Lilac', day: 'Mon', hex: '#c7aee3', ink: '#6a4cbc' },
  { n: 14, name: 'Powder Blue', day: 'Tue', hex: '#9db6cf', ink: '#3f6a94' },
  { n: 19, name: 'Mustard', day: 'Wed', hex: '#e2c34d', ink: '#9a7a12' },
  { n: 18, name: 'Navy', day: 'Thu', hex: '#273356', ink: '#273356' },
  { n: 24, name: 'Red', day: 'Fri', hex: '#a11a24', ink: '#a11a24' },
  { n: 13, name: 'Ivory', day: 'Sat', hex: '#efe9dc', ink: '#9b8a62' },
  { n: 15, name: 'Dusty Rose', day: 'Sun', hex: '#b9787c', ink: '#9a5357' },
  { n: 17, name: 'Black', hex: '#1f1d20', ink: '#1f1d20' },
  { n: 41, name: 'Olive', hex: '#5d5a2b', ink: '#5d5a2b' },
  { n: 20, name: 'Ice Grey', hex: '#b9c2c7', ink: '#5f6b72' },
]

export const searchHints = ['lilac kurti', 'office kurta', 'black shirt', 'under ₹499', 'mustard', 'straight pants']

export const perks = [
  { icon: 'leaf', title: 'Breathable cotton', body: '100% cotton and cotton blends, made for Indian summers' },
  { icon: 'hanger', title: 'Fits real bodies', body: 'Cut and tested on sizes XS to XXL' },
  { icon: 'returns', title: 'Easy 7-day returns', body: 'Free pickup, no questions asked' },
  { icon: 'seal', title: 'Made to last', body: 'Colour-fast dyes, double-stitched seams' },
]

export const categoryLabels = {
  'short-kurtis': 'Short Kurtis',
  kurtas: 'Kurtas',
  'shirts-tops': 'Shirts & Tops',
  pants: 'Pants',
}

export const categorySingular = {
  'short-kurtis': 'Short Kurti',
  kurtas: 'Kurta',
  'shirts-tops': 'Shirt',
  pants: 'Pants',
}

export const categories = [
  { id: 'short-kurtis', label: 'Short Kurtis', image: 'k16-1', to: '/shop/short-kurtis' },
  { id: 'kurtas', label: 'Kurtas', image: 'k11-1', to: '/shop/kurtas' },
  { id: 'shirts-tops', label: 'Shirts & Tops', image: 'k27-1', to: '/shop/shirts-tops' },
  { id: 'pants', label: 'Pants', image: 'k28-1', to: '/shop/pants' },
]

// The inspo's "Shop by category" row, by the life she leads.
export const collections = [
  { id: 'college', label: 'College wear', note: 'for 9 a.m. lectures', image: 'k19-1', to: '/shop?occasion=college' },
  { id: 'office', label: 'Office casuals', note: 'meeting-ready', image: 'k22-1', to: '/shop?occasion=office' },
  { id: 'everyday', label: 'Everyday basics', note: 'chai, errands, repeat', image: 'k13-1', to: '/shop?occasion=everyday' },
  { id: 'u499', label: 'Under ₹499', note: 'small price, same love', image: 'k20-1', to: '/shop?price=u499' },
]

// "Occasion" (her day) is stored in each product's `occasions`.
export const occasionLabels = {
  college: 'College',
  office: 'Office',
  everyday: 'Everyday',
}

export const occasions = collections.filter((c) => c.id !== 'u499')

// Best-seller tabs.
export const collectionTabs = [
  { id: 'best', label: 'Best-sellers', query: { bestseller: true, sort: 'rating' } },
  { id: 'short', label: 'Short kurtis', query: { category: 'short-kurtis', sort: 'rating' } },
  { id: 'kurtas', label: 'Kurtas', query: { category: 'kurtas', sort: 'rating' } },
  { id: 'shirts', label: 'Shirts & tops', query: { category: 'shirts-tops', sort: 'rating' } },
]

// Plan your week: six weekdays to fill, and the code that rewards it.
export const planner = {
  days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  code: 'WEEKLY20',
  min: 5,
}

// The cut, annotated like a tailor's note: positions are % of the photo.
export const theCut = {
  productId: 'k14',
  image: 'k14-1',
  notes: [
    { id: 'collar', x: 63, y: 26, title: 'Mandarin collar', body: 'Stands up neatly without a stiff interlining, so it stays soft after a hundred washes.' },
    { id: 'placket', x: 60, y: 38, title: 'Three-button placket', body: 'Real buttons that open, so it goes over your head without pulling your hair.' },
    { id: 'sleeve', x: 36, y: 50, title: '3/4 sleeves', body: 'They end just below the elbow, the length that works from February to November.' },
    { id: 'fabric', x: 63, y: 59, title: 'Cotton slub', body: 'A soft, slightly textured cotton that breathes and hides creases on long days.' },
    { id: 'slit', x: 34, y: 72, title: 'Side slits', body: 'Short slits at the hem so it sits flat over jeans and moves when you walk.' },
  ],
}

// Shop by price.
export const priceStops = [
  { label: 'Under ₹499', max: 499, to: '/shop?price=u499' },
  { label: 'Under ₹699', max: 699, to: '/shop?price=u499,500-699' },
  { label: 'Under ₹899', max: 899, to: '/shop?price=u499,500-699,700-899' },
]

export const offers = [
  { title: '10% off everything', code: 'EVERYDAY10' },
  { title: '15% off your first order', code: 'FIRST15' },
  { title: '20% off a planned week', code: 'WEEKLY20' },
]

// Sample customer notes (demo content), each linked to what she wears.
export const testimonials = [
  { name: 'Aditi Joshi', city: 'Pune', role: 'Final-year student', rating: 5, productId: 'k16', text: 'I own the lilac, the blue and the black now. Same fit every time, which never happens with online shopping.' },
  { name: 'Neha Raghavan', city: 'Bengaluru', role: 'Product designer', rating: 5, productId: 'k22', text: 'The navy kurta is my presentation outfit. It looks sharp on camera and I can sit cross-legged in it.' },
  { name: 'Simran Kaur', city: 'Chandigarh', role: 'Teacher', rating: 5, productId: 'k27', text: 'Finally a black shirt that does not go grey after five washes. I bought a second one.' },
  { name: 'Fatima Sheikh', city: 'Hyderabad', role: 'MBA student', rating: 4, productId: 'k11', text: 'The cotton really breathes. I wore it through a 38 degree day of interviews.' },
  { name: 'Ishita Bose', city: 'Kolkata', role: 'Bank officer', rating: 5, productId: 'k43', text: 'Beige with maroon pants, exactly like the photo. Ordered on Monday, wore it on Thursday.' },
]

export const instagram = {
  handle: '@kaaradhya.in',
  tag: '#KaaradhyaOnRepeat',
  href: 'https://instagram.com',
  images: ['k21-1', 'k34-1', 'k46-1', 'k39-1', 'k30-1', 'k45-1'],
}

export const serviceRow = perks

// Review pool used to fill product pages (demo).
export const reviewPool = [
  { name: 'Riya M.', rating: 5, title: 'Bought three colours', text: 'The fit is so consistent that I ordered two more shades without thinking twice.' },
  { name: 'Kavya N.', rating: 5, title: 'Soft and breathable', text: 'Wore it through a full college day in May. Did not feel sticky once.' },
  { name: 'Pooja S.', rating: 4, title: 'Slightly long sleeves', text: 'Sleeves are a touch long on me at 5 feet 1, but I just fold them. Lovely colour.' },
  { name: 'Mehak T.', rating: 5, title: 'Colour stays', text: 'Washed it six times, still looks new. The stitching is really neat.' },
  { name: 'Ananya D.', rating: 4, title: 'Great for office', text: 'Smart enough for meetings and comfy enough to sit in all day.' },
]

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'new', label: 'New in' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export const priceBands = [
  { id: 'u499', label: 'Under ₹500', min: 0, max: 499 },
  { id: '500-699', label: '₹500 to ₹699', min: 500, max: 699 },
  { id: '700-899', label: '₹700 to ₹899', min: 700, max: 899 },
  { id: '900-1499', label: '₹900 and above', min: 900, max: 1499 },
]

// Body measurements in inches: bust, waist, hip.
export const sizeChart = [
  ['XS', '32', '26', '35'],
  ['S', '34', '28', '37'],
  ['M', '36', '30', '39'],
  ['L', '38', '32', '41'],
  ['XL', '40', '34', '43'],
  ['XXL', '42', '36', '45'],
]
