import dress from '/images/dress.png'
import { ProductDto } from 'entities/product'

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
