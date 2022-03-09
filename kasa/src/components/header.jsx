import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import KasaOrange from "../assets/kasaOrange"

export default function Header() {
  const location = useLocation()

  return (
    <header className="header">
      <Link to="/"><KasaOrange /></Link>
      <nav className="header__nav">
        <ul className="header__links">
          <li className={location.pathname === "/" ? "header__links--underline" : ""}><Link to="/">Accueil</Link></li>
          <li className={location.pathname === "/about" ? "header__links--underline" : ""}><Link to="/about">A propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}
