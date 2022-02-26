import { Link } from "react-router-dom"

export default function RentalCard() {
  return(
    <figure className="home__rentals--card">
      <figcaption className="home__rentals--title">
        <Link to="/rental"><h2>Titre de la location</h2></Link>
      </figcaption>
    </figure>
  )
}