export default function Host(props) {
  const host = props.host

  return(
    <div className="host">
      <p className="host__name">{host.name}</p>
      <img src={host.picture} alt={host.name} className="host__avatar" />
    </div>
  )
}
