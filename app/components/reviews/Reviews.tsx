import { useState } from 'react'
import { Review as ReviewType } from 'entities/review'
import { Review } from '~/components/review/Review'

interface ReviewsProps {
  reviews: ReviewType[]
}

export const Reviews = ({ reviews }: ReviewsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const cardsPerView = 3
  const totalPages = Math.ceil(reviews.length / cardsPerView)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section className="mb-16 w-full bg-gray-100 py-8">
      <div className="relative mx-auto px-4">
        <div className="relative overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {reviews.map(({ id, ...review }) => (
              <Review key={id} {...review} />
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 rounded-full border-slate-300 px-2.5 py-1.5 text-slate-800 shadow-md transition hover:bg-slate-200"
        >
          ←
        </button>

        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 -translate-y-1/2 rounded-full border-slate-300 px-2.5 py-1.5 text-slate-800 shadow-md transition hover:bg-slate-200"
        >
          →
        </button>
      </div>
    </section>
  )
}
