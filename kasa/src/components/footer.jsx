import logo from "../assets/kasa_logo.png"

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="logo" />
      <p>(c) Kasa. All rights reserved.</p>
    </footer>
  )
}