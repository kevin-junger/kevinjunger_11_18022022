import { Link } from "react-router-dom"

export default function Card(props) {
  const title = props.title
  const id = props.id
  const cover = props.cover

  return(
    <Link to={`/${id}`}>
      <figure className="card">
        <img src={cover} alt={title} className="card__cover" />
        <figcaption className="card__caption">
          <h2 className="card__title">{title}</h2>
        </figcaption>
      </figure>
    </Link>
  )
}