import Carrousel from "../components/carrousel"
import Rate from "../components/rate"
import Collapsible from "../components/collapsible"

export default function RentalContent(props) {
  const rental = props.rental

  return(
    <main className="rental">
      <Carrousel gallery={rental.pictures} />
      <div className="rental__header">
        <div className="rental__info">
          <div className="rental__title">
            <h2 className="rental__title--name">{rental.title}</h2>
            <p className="rental__title--location">{rental.location}</p>
          </div>
          <div className="rental__tags">
            <ul className="rental__tags--list">
              {rental.tags.map((tag) => (
                <li key={`${rental.id}-${tag}`} className="rental__tags--tag">{tag}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rental__secondary">
          <Rate rating={rental.rating}/>
          <div className="rental__host">
            <p className="rental__host--name">{rental.host.name}</p>
            <img src={rental.host.picture} alt={rental.host.name} className="rental__host--avatar" />
          </div>
        </div>
      </div>
      <div className="rental__collapsibles">
        <Collapsible summary="Description" content={<p>{rental.description}</p>} />
        <Collapsible summary="Equipement" content={
            <ul className="collapsible__list">
              {rental.equipments.map((equipment) => (
                <li key={`${rental.id}-${equipment}`}>{equipment}</li>
              ))}
            </ul>
          } />
      </div>
    </main>
  )
}