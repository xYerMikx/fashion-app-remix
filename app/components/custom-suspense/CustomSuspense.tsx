import { Await } from '@remix-run/react'
import { ReactNode, Suspense } from 'react'

interface CustomSuspenseProps<T> {
  promiseResolver: Promise<T> | null

  fallback: ReactNode
  errorElement: ReactNode
  componentRenderer: (data: T | null) => ReactNode
}

export function CustomSuspense<T>({
  fallback,
  promiseResolver,
  errorElement,
  componentRenderer,
}: CustomSuspenseProps<T>) {
  return (
    <Suspense fallback={fallback}>
      <Await resolve={promiseResolver} errorElement={errorElement}>
        {componentRenderer}
      </Await>
    </Suspense>
  )
}
