import KasaWhite from "../assets/kasaWhite"

export default function Footer() {
  const date = new Date()
  return (
    <footer className="footer">
      <KasaWhite />
      <p className="footer__copyright">© { date.getFullYear() } Kasa. All rights reserved.</p>
    </footer>
  )
}
