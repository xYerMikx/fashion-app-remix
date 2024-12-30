import dress from '~/assets/images/dress.png'
import womanOutfit from '~/assets/images/product.png'
import outfit from '~/assets/images/outfit.png'
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
    id: '1',
    image: womanOutfit,
    description: 'Elegant white dress perfect for summer outings.',
    rating: 4.95,
    category: 'Dresses',
    title: 'Elegant White Dress',
    price: 49.99,
    currency: 'IDR',
  },
  {
    id: '2',
    image: womanOutfit,
    description: 'Sleek and stylish blue evening dress.',
    rating: 4.8,
    category: 'Evening Wear',
    title: 'Blue Evening Dress',
    price: 89.99,
    currency: 'IDR',
  },
  {
    id: '3',
    image: womanOutfit,
    description: 'Casual green dress for outdoor activities.',
    rating: 4.9,
    category: 'Casual Wear',
    title: 'Casual Green Dress',
    price: 39.99,
    currency: 'IDR',
  },
  {
    id: '4',
    image: womanOutfit,
    description: 'Charming champagne-colored dress for special events.',
    rating: 4.85,
    category: 'Party Wear',
    title: 'Champagne Party Dress',
    price: 109.99,
    currency: 'IDR',
  },
]

export const menProducts: Product[] = [
  {
    id: '1',
    image: outfit,
    description: 'Classic black suit for formal occasions.',
    rating: 4.9,
    category: 'Suits',
    title: 'Classic Black Suit',
    price: 149.99,
    currency: 'IDR',
  },
  {
    id: '2',
    image: outfit,
    description: 'Stylish navy blue blazer for evening events.',
    rating: 4.8,
    category: 'Blazers',
    title: 'Navy Blue Blazer',
    price: 99.99,
    currency: 'IDR',
  },
  {
    id: '3',
    image: outfit,
    description: 'Comfortable grey t-shirt for casual wear.',
    rating: 4.7,
    category: 'Casual Wear',
    title: 'Grey Casual T-Shirt',
    price: 19.99,
    currency: 'IDR',
  },
  {
    id: '4',
    image: outfit,
    description: 'Sporty red jacket perfect for outdoor activities.',
    rating: 4.85,
    category: 'Outerwear',
    title: 'Red Sporty Jacket',
    price: 79.99,
    currency: 'IDR',
  },
]
