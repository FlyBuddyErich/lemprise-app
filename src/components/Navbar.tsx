import { Link, useLocation } from "react-router-dom"
import logo from '../assets/logo png.png'

const Navbar = () => {
  const location = useLocation()

  return (
    <header className="py-1 px-4 border-b border-gray-200">
      <div className="px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
        <img src={logo} alt="logo" className='h-10'/>
        </Link>

        <nav className="flex gap-8 font-medium">
          <Link
            to="/"
            className={`text-sm uppercase tracking-wider ${location.pathname === "/" ? "underline" : ""}`}
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className={`text-sm uppercase tracking-wider ${location.pathname === "/shop" ? "underline" : ""}`}
          >
            SHOP
          </Link>
          <Link
            to="/cart"
            className={`text-sm uppercase tracking-wider ${location.pathname === "/cart" ? "underline" : ""} relative`}
          >
            CART
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

