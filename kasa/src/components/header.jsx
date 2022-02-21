import { Link } from "react-router-dom"
import logo from "../assets/kasa_logo.png"

export default function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  )
}