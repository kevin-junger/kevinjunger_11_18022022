export default function Rental() {
  return(
    <main className="rental">
      <h2>Loft cozy près du Canal Saint-Martin</h2>
      <em>Paris, Île-de-France</em>
      <em>Alexandre Dumas</em>
      <div style={{
        width: "64px",
        height: "64px",
        borderRadius: "32px",
        backgroundColor: "grey"
      }}></div>
      <ul>
        <li>Cozy</li>
        <li>Canal</li>
        <li>Paris 10</li>
      </ul>
      <div>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
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
