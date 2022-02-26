export default function About() {
  return(
    <main style={{
      margin: "1rem"
    }}>
      <div style={{
        width: "100%",
        height: "223px",
        borderRadius: "25px",
        backgroundColor: "grey"
      }}></div>
      <details>
        <summary><h2>Fiabilité</h2></summary>
        <div><p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p></div>
      </details>
      <details>
        <summary><h2>Respect</h2></summary>
        <div><p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></div>
      </details>
      <details>
        <summary><h2>Service</h2></summary>
        <div><p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p></div>
      </details>
      <details>
        <summary>
          <h2>Sécurité</h2>
        </summary>
        <div>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
      </details>
    </main>
  )
}