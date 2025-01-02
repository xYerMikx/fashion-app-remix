import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { FeaturesSection } from '~/components/features-section/FeaturesSection'
import { Footer } from '~/components/footer/Footer'
import { Hero } from '~/components/hero/Hero'
import { Popular } from '~/components/popular/Popular'
import { ProductsCarousel } from '~/components/products-carousel/ProductsCarousel'
import { Reviews } from '~/components/reviews/Reviews'
import { Video } from '~/components/video/Video'
import { Wrapper } from '~/components/wrapper/Wrapper'
import { ReviewsService } from 'services/reviews'
import { Gap } from '~/ui/gap/Gap'
import { ProductsService } from 'services/products'

export const meta: MetaFunction = () => {
  return [
    { title: 'Fashion Application' },
    {
      name: 'description',
      content: 'Welcome to my fashion landing page application',
    },
  ]
}

export const loader = async () => {
  const [reviews, menProducts, womanProducts] = await Promise.all([
    ReviewsService.getReviews(),
    ProductsService.getFilteredProducts('sex', 'men'),
    ProductsService.getFilteredProducts('sex', 'woman'),
  ])

  return { reviews, menProducts, womanProducts }
}

export default function Index() {
  const { reviews, womanProducts, menProducts } = useLoaderData<typeof loader>()

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
