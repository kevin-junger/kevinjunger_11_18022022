import Carrousel from "../components/carrousel"
import Info from "../components/info"
import Tags from "../components/tags"
import Host from "../components/host"
import Rate from "../components/rate"
import Collapsible from "../components/collapsible"

export default function Wrapper(props) {
  const rental = props.rental

  return(
    <main className="rental">
      <Carrousel gallery={rental.pictures} />
      <div className="rental__header">
        <section className="rental__about">
          <Info title={rental.title} location={rental.location} />
          <Tags id={rental.id} tags={rental.tags} />
        </section>
        <aside className="rental__aside">
          <Rate rating={rental.rating} />
          <Host host={rental.host} />
        </aside>
      </div>
      <div className="rental__collapsibles">
        <Collapsible id='' summary="Description" contentType="text" content={rental.description} />
        <Collapsible id={rental.id} summary="Equipement" contentType="list" content={rental.equipments} />
      </div>
    </main>
  )
}