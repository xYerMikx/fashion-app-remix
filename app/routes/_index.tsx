import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { FeaturesSection } from '~/components/features-section/FeaturesSection'
import { Footer } from '~/components/footer/Footer'
import { Hero } from '~/components/hero/Hero'
import { Popular } from '~/components/popular/Popular'

import { Video } from '~/components/video/Video'
import { Wrapper } from '~/components/wrapper/Wrapper'
import { ReviewsService } from 'services/reviews'
import { Gap } from '~/ui/gap/Gap'
import { ProductsService } from 'services/products'
import { lazy } from 'react'
import { ProductCardSkeleton } from '~/components/product-card-skeleton/ProductCardSkeleton'
import { ReviewSkeleton } from '~/components/review-skeleton/ReviewSkeleton'
import { CustomSuspense as Suspense } from '~/components/custom-suspense/CustomSuspense'

const ProductsCarousel = lazy(() =>
  import('~/components/products-carousel/ProductsCarousel').then((module) => ({
    default: module.ProductsCarousel,
  }))
)
const Reviews = lazy(() =>
  import('~/components/reviews/Reviews').then((module) => ({
    default: module.Reviews,
  }))
)

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
  try {
    const reviews = ReviewsService.getReviews().catch(() => null)
    const menProducts = ProductsService.getFilteredProducts('sex', 'men').catch(
      () => null
    )
    const womanProducts = ProductsService.getFilteredProducts(
      'sex',
      'woman'
    ).catch(() => null)

    return { reviews, menProducts, womanProducts }
  } catch (error) {
    return { reviews: null, menProducts: null, womanProducts: null }
  }
}

export default function Index() {
  const { womanProducts, menProducts, reviews } = useLoaderData<typeof loader>()

  return (
    <div className="font-lato">
      <Hero />
      <Wrapper>
        <Popular />
        <Gap size={16} />
        <Suspense
          fallback={<ProductCardSkeleton />}
          promiseResolver={womanProducts}
          componentRenderer={(products) => (
            <ProductsCarousel
              title="the best dress for the best woman"
              products={products}
            />
          )}
          errorElement={<div>Error loading products for Woman...</div>}
        />
        <Gap size={16} />
        <Suspense
          fallback={<ProductCardSkeleton />}
          promiseResolver={menProducts}
          componentRenderer={(products) => (
            <ProductsCarousel
              title="Best outfit for your happiness"
              products={products}
            />
          )}
          errorElement={<div>Error loading products for Men...</div>}
        />
        <FeaturesSection />
        <Video />
        <Suspense
          fallback={<ReviewSkeleton />}
          promiseResolver={reviews}
          componentRenderer={(reviews) => <Reviews reviews={reviews} />}
          errorElement={<div>Reviews cannot be loaded...</div>}
        />
      </Wrapper>
      <Footer />
    </div>
  )
}
