import { Link } from 'react-router-dom'
import logo from '../assets/kasa_logo.png'

export default function Header() {
  return (
    <header className='header'>
      <Link to='/'><img className='header__logo' src={logo} alt='logo' /></Link>
      <nav className='header__nav'>
        <Link to='/'>Accueil</Link>
        <Link to='/about'>A propos</Link>
      </nav>
    </header>
  )
}