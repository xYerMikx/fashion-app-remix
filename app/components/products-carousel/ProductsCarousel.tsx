import { Product } from 'entities/product'
import { ProductCardFull } from '~/components/product-card/ProductCardFull'
import { Button } from '~/ui/button/Button'

interface ProductsCarouselProps {
  title: string
  products: Product[]
}
export const ProductsCarousel = ({
  title,
  products,
}: ProductsCarouselProps) => {
  return (
    <div>
      <h2 className="mb-8 font-playfair-display text-7xl font-medium uppercase">
        {title}
      </h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCardFull {...product} />
          </li>
        ))}
      </ul>
      <Button text="See more" variant="primary" className="mt-4 uppercase" />
    </div>
  )
}
