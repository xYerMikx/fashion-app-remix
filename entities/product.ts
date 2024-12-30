export type Product = {
  image: string
  description: string
  rating: number
  category: string
  title: string
  price: number
  currency: string
  id: string
}

export type ProductDto = Pick<
  Product,
  'image' | 'title' | 'price' | 'currency' | 'id'
>
