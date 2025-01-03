
import dress from '/images/dress.png'
import womanOutfit from '/images/product.png'
import outfit from '/images/outfit.png'
import { Product, ProductDto } from 'entities/product'

export const heroProducts: ProductDto[] = [
  {
    currency: 'IND',
    id: '1',
    image: dress,
    price: 300,
    title: 'Women Dress M',
  },
  {
    currency: 'IND',
    id: '2',
    image: dress,
    price: 350,
    title: 'Women Dress L',
  },
]

export const womanProducts: Product[] = [
  {
    id: '2',
    image: womanOutfit,
    description: 'Elegant white dress perfect for summer outings.',
    rating: 4.95,
    category: 'Dresses',
    sex: 'woman',
    title: 'Elegant White Dress',
    price: 49.99,
    currency: 'IDR',
  },
  {
    id: '7',
    image: womanOutfit,
    description: 'Sleek and stylish blue evening dress.',
    rating: 4.8,
    category: 'Evening Wear',
    title: 'Blue Evening Dress',
    sex: 'woman',
    price: 89.99,
    currency: 'IDR',
  },
  {
    id: '8',
    image: womanOutfit,
    description: 'Casual green dress for outdoor activities.',
    rating: 4.9,
    category: 'Casual Wear',
    title: 'Casual Green Dress',
    sex: 'woman',
    price: 39.99,
    currency: 'IDR',
  },
  {
    id: '10',
    image: womanOutfit,
    description: 'Charming champagne-colored dress for special events.',
    rating: 4.85,
    category: 'Party Wear',
    title: 'Champagne Party Dress',
    sex: 'woman',
    price: 109.99,
    currency: 'IDR',
  },
]

export const menProducts: Product[] = [
  {
    id: '12',
    image: outfit,
    description: 'Classic black suit for formal occasions.',
    rating: 4.9,
    category: 'Suits',
    title: 'Classic Black Suit',
    price: 149.99,
    sex: 'men',
    currency: 'IDR',
  },
  {
    id: '22',
    image: outfit,
    description: 'Stylish navy blue blazer for evening events.',
    rating: 4.8,
    category: 'Blazers',
    title: 'Navy Blue Blazer',
    sex: 'men',
    price: 99.99,
    currency: 'IDR',
  },
  {
    id: '33',
    image: outfit,
    description: 'Comfortable grey t-shirt for casual wear.',
    rating: 4.7,
    category: 'Casual Wear',
    title: 'Grey Casual T-Shirt',
    sex: 'men',
    price: 19.99,
    currency: 'IDR',
  },
  {
    id: '42',
    image: outfit,
    description: 'Sporty red jacket perfect for outdoor activities.',
    rating: 4.85,
    category: 'Outerwear',
    title: 'Red Sporty Jacket',
    sex: 'men',
    price: 79.99,
    currency: 'IDR',
  },
]

export const allProducts = [...womanProducts, ...menProducts]
