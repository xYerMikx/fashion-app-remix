import type { MetaFunction } from '@remix-run/node'
import { Hero } from '~/components/hero/Hero'

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
    </div>
  )
}
