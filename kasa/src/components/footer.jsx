import logo from "../assets/kasa_logo_white.png"

export default function Footer() {
  const date = new Date()
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="logo" />
      <p className="footer__copyright">© { date.getFullYear() } Kasa. All rights reserved.</p>
    </footer>
  )
}
