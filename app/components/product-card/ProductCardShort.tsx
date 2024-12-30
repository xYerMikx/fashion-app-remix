import cn from 'classnames'

interface ProductCardProps {
  image: string
  title: string
  price: number
  currency: string
  reversed?: boolean
}

export const ProductCardShort = ({
  currency = '$',
  image,
  price,
  title,
  reversed,
}: ProductCardProps) => {
  return (
    <div className={cn('flex bg-white w-fit', reversed && 'flex-row-reverse')}>
      <img src={image} alt={title} />
      <div className="flex flex-col items-start p-4">
        <h4 className="mb-4 font-playfair-display text-3xl font-normal">
          {title}
        </h4>
        <span>
          {currency} {price}
        </span>
        <button className="mt-auto border-none uppercase underline outline-none">
          Shop now
        </button>
      </div>
    </div>
  )
}
