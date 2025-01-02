import { Link } from '@remix-run/react'
import {
  footerAccountLinks,
  footerHelpLinks,
  footerMenuLinks,
} from 'constants/links'
import { Wrapper } from '~/components/wrapper/Wrapper'

export const Footer = () => {
  return (
    <footer className="bg-primary py-12 text-white">
      <Wrapper>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h4 className="font-playfair-display text-5xl font-medium">
              MODEVA
            </h4>
            <p className="mt-4">WhatsApp: +62 859 9999 9999</p>
            <p>Email: hello@modsen-shop.com</p>
            <p>Address: Lorem ipsum street Block</p>
          </div>

          <div>
            <h5 className="mb-4 font-bold">Menu</h5>
            <ul>
              {footerMenuLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="font-light text-white hover:text-slate-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-bold">Get Help</h5>
            <ul>
              {footerHelpLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="font-light text-white hover:text-slate-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-bold">Account</h5>
            <ul>
              {footerAccountLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="font-light text-white hover:text-slate-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm font-light text-slate-200">
          <p className="mb-1">All rights reserved</p>
          <p>Copyright 2023 By Modsen Fashion</p>
        </div>
      </Wrapper>
    </footer>
  )
}
