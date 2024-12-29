import search from '~/assets/icons/search.svg'

export const Searchbar = () => {
  return (
    <div className="relative w-full">
      <div className="absolute left-1.5 top-1/2 -translate-y-1/2">
        <img src={search} alt="search-icon" />
      </div>
      <input
        className="p-2 pl-8 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Search..."
      />
    </div>
  )
}
