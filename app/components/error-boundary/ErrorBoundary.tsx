import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from '@remix-run/react'

export function ErrorBoundary() {
  const error = useRouteError()
  const navigate = useNavigate()

  const handleGoHome = () => navigate('/')

  const renderErrorContent = () => {
    if (isRouteErrorResponse(error)) {
      return {
        title: `${error.status} ${error.statusText}`,
        message: error.data || 'Something went wrong.',
      }
    }

    if (error instanceof Error) {
      return {
        title: 'Unexpected Error',
        message: error.message,
      }
    }

    return {
      title: 'Unknown Error',
      message: 'An unexpected error occurred. Please try again later.',
    }
  }

  const { title, message } = renderErrorContent()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-4 rounded-lg bg-white p-8 text-center shadow-lg">
        <div className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto size-10 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1 0h.01m-6.938 4h13.856C19.745 16 21 14.745 21 13.182V8.818C21 7.255 19.745 6 18.182 6H5.818C4.255 6 3 7.255 3 8.818v4.364C3 14.745 4.255 16 5.818 16z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600">{message}</p>

        <button
          onClick={handleGoHome}
          className="rounded-lg bg-blue-500 px-6 py-2 font-semibold text-white shadow-md transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}
