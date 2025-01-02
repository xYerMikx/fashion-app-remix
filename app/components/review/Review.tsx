import star from '~/assets/icons/star.svg'

interface ReviewProps {
  rating: number
  name: string
  date: string
  text: string
}

export const Review = ({ date, name, rating, text }: ReviewProps) => {
  return (
    <div className="grow-1 flex shrink-0 basis-calc-full sm:basis-calc-1/2 lg:basis-calc-1/3">
      <div className="flex flex-col rounded-lg bg-white p-4 shadow-md">
        <div className="mb-4 flex items-center gap-2">
          <div className="size-9 rounded-[50%] bg-primary" />
          <div>
            <h4 className="font-playfair-display text-sm uppercase tracking-wider">
              {name}
            </h4>
            <p className="text-sm font-light text-gray-500">{date}</p>
          </div>
          <div className="ml-auto mt-2 flex items-center">
            {Array.from({ length: rating }).map((_, index) => (
              <img key={index} src={star} alt="star-icon" />
            ))}
          </div>
        </div>
        <p className="line-clamp-3 h-full overflow-hidden text-ellipsis text-xs font-light text-slate-700">
          {text}
        </p>
      </div>
    </div>
  )
}
