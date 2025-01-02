import type { LoaderFunction, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { menProducts, womanProducts } from 'constants/products'
import { Review } from 'entities/review'
import { FeaturesSection } from '~/components/features-section/FeaturesSection'
import { Footer } from '~/components/footer/Footer'
import { Hero } from '~/components/hero/Hero'
import { Popular } from '~/components/popular/Popular'
import { ProductsCarousel } from '~/components/products-carousel/ProductsCarousel'
import { Reviews } from '~/components/reviews/Reviews'
import { Video } from '~/components/video/Video'
import { Wrapper } from '~/components/wrapper/Wrapper'
import { ReviewsService } from '~/services/reviews'
import { Gap } from '~/ui/gap/Gap'

export const meta: MetaFunction = () => {
  return [
    { title: 'Fashion Application' },
    {
      name: 'description',
      content: 'Welcome to my fashion landing page application',
    },
  ]
}

export const loader: LoaderFunction = async () => {
  const reviews = await ReviewsService.getReviews()

  return reviews
}

export default function Index() {
  const reviews = useLoaderData<Review[]>()

  return (
    <div className="font-lato">
      <Hero />
      <Wrapper>
        <Popular />
        <Gap size={16} />
        <ProductsCarousel
          title="the best dress for the best woman"
          products={womanProducts}
        />
        <Gap size={16} />
        <ProductsCarousel
          title="Best outfit for your happiness"
          products={menProducts}
        />
        <FeaturesSection />
        <Video />
        <Reviews reviews={reviews} />
      </Wrapper>
      <Footer />
    </div>
  )
}
