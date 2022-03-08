import { Link } from "react-router-dom"

export default function RentalCard(props) {
  const title = props.title
  const id = props.id
  const cover = props.cover

  return(
    <Link to={`/${id}`}>
      <figure className="rentalcard">
        <img src={cover} alt={title} className="rentalcard__cover" />
        <figcaption className="rentalcard__caption">
          <h2 className="rentalcard__caption--title">{title}</h2>
        </figcaption>
      </figure>
    </Link>
  )
}