import StarOn from "../assets/starOn"
import StarOff from "../assets/starOff"

export default function Rental() {
  return(
    <main className="rental">
      <div className="rental__carrousel"></div>
      <div className="rental__title">
        <h2 className="rental__title--name">Loft cozy près du Canal Saint-Martin</h2>
        <p className="rental__title--location">Paris, Île-de-France</p>
      </div>
      <div className="rental__tags">
        <ul className="rental__tags--list">
          <li className="rental__tags--tag">Cozy</li>
          <li className="rental__tags--tag">Canal</li>
          <li className="rental__tags--tag">Paris 10</li>
        </ul>
      </div>
      <div className="rental__rate">
        <ul className="rental__rate--stars">
          <StarOn />
          <StarOn />
          <StarOn />
          <StarOff />
          <StarOff />
        </ul>
      </div>
      <div className="rental__host">
        <p className="rental__host--name">Alexandre Dumas</p>
        <div className="rental__host--avatar"></div>
      </div>
      <div className="rental__collapsibles">
        <details className="collapsible">
          <summary className="collapsible__summary">
            <h3>Description</h3>
          </summary>
          <div className="collapsible__content">
            <p>Vous serez à 50m du canal Saint-Martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied).</p>
          </div>
        </details>
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
