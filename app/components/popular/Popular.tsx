export const Popular = () => {
  return (
    <div className="mt-16 grid h-screen grid-cols-2 grid-rows-4 gap-4 font-playfair-display text-5xl font-medium text-white">
      <div className="row-span-2 flex h-full items-center bg-[url('/app/assets/images/formal-woman.jpeg')] bg-cover bg-center bg-no-repeat">
        <h2 className="pl-8 uppercase">formal woman</h2>
      </div>
      <div className="col-start-1 row-span-2 row-start-3 flex h-full items-center bg-[url('/app/assets/images/formal-men.jpeg')] bg-cover bg-center bg-no-repeat">
        <h2 className="pl-8 uppercase">formal Men</h2>
      </div>
      <div className="col-start-2 row-span-4 row-start-1 flex h-full items-center bg-[url('/app/assets/images/casual-style.jpeg')] bg-cover bg-center bg-no-repeat">
        <h2 className="pl-8 uppercase">Casual Style</h2>
      </div>
    </div>
  )
}
