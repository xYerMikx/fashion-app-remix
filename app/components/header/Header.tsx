import { Link } from '@remix-run/react'
import { headerLinks } from 'constants/links'
import { Searchbar } from '~/components/searchbar/Searchbar'
import cart from '~/assets/icons/shopping-cart.svg'
import login from '~/assets/icons/user.svg'

export const Header = () => {
  return (
    <header className="mb-48 flex min-h-16 items-center justify-between pt-6">
      <div className="font-playfair-display text-5xl text-white">SHOP</div>
      <nav className="max-w-[360px] flex-1">
        <ul className="flex items-center justify-between">
          {headerLinks.map(({ id, name, path }) => (
            <li key={id}>
              <Link
                className="text-white transition-colors hover:underline"
                to={`#${path}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-3">
        <Searchbar />
        <button className="border-none outline-none">
          <img src={login} alt="login-icon" />
        </button>
        <button className="border-none outline-none">
          <img src={cart} alt="cart-icon" />
        </button>
      </div>
    </header>
  )
}
