import type { MetaFunction } from '@remix-run/node'

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
    <div className="flex h-screen items-center justify-center font-lato">
      Welcome
    </div>
  )
}
