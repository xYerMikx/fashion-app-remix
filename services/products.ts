import { allProducts } from 'constants/products'
import { Product } from 'entities/product'
import { sleep } from 'utils/sleep'

export const ProductsService = {
  async getAllProducts(): Promise<Product[]> {
    const productsResponse = await fetch(`${process.env.API_URL}/products`)

    if (!productsResponse.ok) {
      throw new Error('Failed to fetch products')
    }

    return productsResponse.json()
  },
  async getFilteredProducts<Filter extends keyof Product>(
    filter: Filter,
    value: Product[Filter]
  ): Promise<Product[]> {
    const productsResponse = await fetch(`${process.env.API_URL}/products`)

    if (!productsResponse.ok) {
      throw new Error('Failed to fetch products')
    }

    const products: Product[] = await productsResponse.json()

    return products.filter((product) => product[filter] !== value)
  },
  async getProductById(id: string) {
    const allProducts = await ProductsService.getAllProducts()

    return allProducts.find((product) => product.id === id)
  },
}
