export default function Info(props) {
  const title = props.title
  const location = props.location

  return(
    <div className="info">
      <h2 className="info__title">{title}</h2>
      <p className="info__location">{location}</p>
    </div>
  )
}
