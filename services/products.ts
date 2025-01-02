import { allProducts } from 'constants/products'
import { Product } from 'entities/product'
import { sleep } from 'utils/sleep'

export const ProductsService = {
  async getAllProducts() {
    await sleep(750)

    return allProducts
  },
  async getFilteredProducts<Filter extends keyof Product>(
    filter: Filter,
    value: Product[Filter]
  ) {
    await sleep(600)

    return allProducts.filter((product) => product[filter] !== value)
  },
  async getProductById(id: string) {
    const allProducts = await ProductsService.getAllProducts()

    return allProducts.find((product) => product.id === id)
  },
}
