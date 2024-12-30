import { Product } from 'entities/product'
import star from '~/assets/icons/star.svg'

interface ProductCardProps extends Omit<Product, 'id'> {}

export const ProductCardFull = ({
  category,
  currency,
  description,
  image,
  price,
  rating,
  title,
}: ProductCardProps) => {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative h-72">
        <img src={image} alt={title} className="size-full object-cover" />
        <div className="absolute right-2 top-2 rounded-full bg-yellow-500 px-2 py-1 text-sm text-white shadow-md">
          <img src={star} alt="star-icon" />
          {rating.toFixed(2)}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium uppercase text-gray-500">
          {category}
        </p>
        <h3 className="line-clamp-2 font-playfair-display text-2xl text-gray-800">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-gray-600">
          {description}
        </p>
        <p className="mt-4 text-xl font-bold text-gray-800">
          {currency} {price.toFixed(2)}
        </p>
      </div>
    </div>
  )
}
