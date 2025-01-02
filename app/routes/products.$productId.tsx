import { useLoaderData, useNavigate } from '@remix-run/react'
import { ProductsService } from 'services/products'
import star from '~/assets/icons/star.svg'

export const loader = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params

  const product = await ProductsService.getProductById(productId)

  if (!product) {
    throw new Response('Product not found', { status: 404 })
  }

  return product
}

export default function ProductDetail() {
  const product = useLoaderData<typeof loader>()
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/')
  }

  return (
    <section className="size-full bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col space-x-8 lg:flex-row">
          <div className="mb-8 w-full lg:mb-0 lg:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="size-full rounded-lg object-cover shadow-xl"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <button onClick={handleNavigateHome}>← Go back</button>
            <h1 className="text-4xl font-bold text-gray-900">
              {product.title}
            </h1>
            <p className="mt-2 text-xl text-gray-600">{product.category}</p>
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                <img src={star} alt="star" className="mr-2 size-6" />
                <span className="text-lg font-semibold">
                  {product.rating.toFixed(1)}
                </span>
              </div>
            </div>
            <p className="mt-4 text-gray-700">{product.description}</p>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-2xl font-bold text-gray-900">
                {product.currency} {product.price.toFixed(2)}
              </p>
              <button className="hover:bg-primary-dark rounded-lg bg-primary px-4 py-2 text-white shadow-md transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
