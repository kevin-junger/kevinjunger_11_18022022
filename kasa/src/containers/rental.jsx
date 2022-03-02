import Carrousel from "../components/carrousel"
import Title from "../components/title"
import Tags from "../components/tags"
import Rate from "../components/rate"
import Host from "../components/host"
import Collapsible from "../components/collapsible"

export default function Rental() {
  return(
    <main className="rental">
      <Carrousel />
      <div className="rental__header">
        <div className="rental__info">
          <Title />
          <Tags />
        </div>
        <div className="rental__secondary">
          <Rate />
          <Host />
        </div>
      </div>
      <div className="rental__collapsibles">
        <Collapsible />
        <details className="collapsible">
          <summary className="collapsible__summary">
            <h3>Equipements</h3>
          </summary>
          <div className="collapsible__content">
            <ul className="collapsible__list">
              <li>Climatisation</li>
              <li>Wi-Fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
          </div>
        </details>
      </div>
    </main>
  )
}
