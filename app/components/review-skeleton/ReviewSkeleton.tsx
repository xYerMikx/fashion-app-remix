export const ReviewSkeleton = () => (
  <div className="relative overflow-hidden">
    <div
      className="mb-16 flex gap-4 transition-transform duration-500
    ease-in-out"
    >
      {Array.from({ length: 4 }, (_, k) => k + 1).map((index) => (
        <div
          key={index}
          className="grow-1 flex shrink-0 basis-calc-full animate-pulse sm:basis-calc-1/2 lg:basis-calc-1/3"
        >
          <div className="flex w-full flex-col rounded-lg bg-gray-200 p-4 shadow-md">
            <div className="mb-4 flex items-center gap-2">
              <div className="size-9 rounded-[50%] bg-gray-300"></div>
              <div className="flex-1">
                <div className="mb-2 h-4 w-3/4 bg-gray-300"></div>
                <div className="h-4 w-1/2 bg-gray-300"></div>
              </div>
            </div>
            <div className="h-6 bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
