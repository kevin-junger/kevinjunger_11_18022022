import { Link } from "react-router-dom"

export default function RentalCard() {
  return(
    <figure className="rentalcard">
      <figcaption className="rentalcard__caption">
        <Link to="/rental"><h2 className="rentalcard__caption--title">Titre de la location</h2></Link>
      </figcaption>
    </figure>
  )
}