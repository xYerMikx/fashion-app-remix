export const ProductCardSkeleton = () => (
  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {Array.from({ length: 4 }, (_, k) => k + 1).map((index) => (
      <div
        key={index}
        className="flex h-full animate-pulse flex-col overflow-hidden rounded-lg bg-gray-200 shadow-lg"
      >
        <div className="h-48 bg-gray-300"></div>
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 h-4 w-2/3 bg-gray-300"></div>
          <div className="mb-4 h-6 w-3/4 bg-gray-300"></div>
          <div className="h-4 w-1/2 bg-gray-300"></div>
        </div>
      </div>
    ))}
  </ul>
)
