import type { MetaFunction } from '@remix-run/node'
import { menProducts, womanProducts } from 'constants/products'
import { FeaturesSection } from '~/components/features-section/FeaturesSection'
import { Hero } from '~/components/hero/Hero'
import { Popular } from '~/components/popular/Popular'
import { ProductsCarousel } from '~/components/products-carousel/ProductsCarousel'
import { Video } from '~/components/video/Video'
import { Wrapper } from '~/components/wrapper/Wrapper'
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

export default function Index() {
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
      </Wrapper>
    </div>
  )
}
