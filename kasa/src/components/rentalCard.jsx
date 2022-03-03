import { Link } from "react-router-dom"

export default function RentalCard(props) {
  const title = props.title
  const id = props.id

  return(
    <figure className="rentalcard">
      <figcaption className="rentalcard__caption">
        <Link to={`/${id}`}><h2 className="rentalcard__caption--title">{title}</h2></Link>
      </figcaption>
    </figure>
  )
}