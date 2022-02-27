import StarOn from "../assets/starOn"
import StarOff from "../assets/starOff"

export default function Rental() {
  return(
    <main className="rental">
      <div className="rental__title">
        <h2 className="rental__title--name">Loft cozy près du Canal Saint-Martin</h2>
        <em className="rental__title--location">Paris, Île-de-France</em>
      </div>
      <div className="rental__host">
        <em className="rental__host--name">Alexandre Dumas</em>
        <div className="rental__host--avatar"></div>
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
          <StarOff />
        </ul>
      </div>
      <details>
        <summary>
          <div><h3>Description</h3></div>
        </summary>
        <div><p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied).</p></div>
      </details>
      <details>
        <summary>
          <div><h3>Equipements</h3></div>
        </summary>
        <div>
          <ul>
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
    </main>
  )
}
