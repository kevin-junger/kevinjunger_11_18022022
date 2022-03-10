import { useParams } from "react-router-dom"
import NotFound from "./notFound"
import Carrousel from "../components/carrousel"
import Info from "../components/info"
import Tags from "../components/tags"
import Host from "../components/host"
import Rate from "../components/rate"
import Collapsible from "../components/collapsible"

export default function Rental(props) {
  const data = props.data
  const { rentalId } = useParams()
  const rental = data.find((rental) => rental.id === rentalId)

  return rental !== undefined ? (
    <main className="rental">
      <Carrousel gallery={rental.pictures} />
      <section className="rental__header">
        <section className="rental__about">
          <Info title={rental.title} location={rental.location} />
          <Tags id={rental.id} tags={rental.tags} />
        </section>
        <aside className="rental__aside">
          <Rate rating={rental.rating} />
          <Host host={rental.host} />
        </aside>
      </section>
      <section className="rental__collapsibles">
        <Collapsible id='' summary="Description" contentType="text" content={rental.description} />
        <Collapsible id={rental.id} summary="Equipement" contentType="list" content={rental.equipments} />
      </section>
    </main>
  ) : (
    <NotFound />
  )
}
