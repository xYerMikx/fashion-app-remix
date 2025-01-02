import { heroProducts } from 'constants/products'
import { useModal } from 'hooks/useModal'
import { Banner } from '~/components/banner/Banner'
import { Header } from '~/components/header/Header'
import { ProductCardShort } from '~/components/product-card/ProductCardShort'
import { Wrapper } from '~/components/wrapper/Wrapper'
import cn from 'classnames'

export const Hero = () => {
  const { isOpen, handleClose } = useModal(true)

  return (
    <section className="bg-[url('/app/assets/images/hero.jpeg')] bg-cover bg-center bg-no-repeat pb-48">
      {isOpen && <Banner onClose={handleClose} />}
      <Wrapper>
        <Header />
        <div className="max-w-[50%] text-white">
          <h2 className="mb-4 uppercase tracking-widest">
            made in Indonesia, dedicated to Indonesia
          </h2>
          <h1 className="font-playfair-display text-7xl font-medium uppercase leading-[100px]">
            Discover the Art of Dressing Up
          </h1>
        </div>
        <ul className="ml-auto w-fit">
          {heroProducts.map(({ currency, id, image, price, title }) => {
            const lastItem = heroProducts[heroProducts.length - 1]
            return (
              <li key={id} className={cn(id !== lastItem.id && 'mb-4')}>
                <ProductCardShort
                  currency={currency}
                  image={image}
                  price={price}
                  title={title}
                  reversed={id === lastItem.id}
                />
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </section>
  )
}
