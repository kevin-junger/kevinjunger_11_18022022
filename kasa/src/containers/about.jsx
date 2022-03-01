export default function About() {
  return(
    <main className="about">
      <div className="about__hero"></div>
      <div className="about__collapsible">
        <details className="collapsible">
          <summary className="collapsible__summary">
            <h3>Fiabilité</h3>
          </summary>
          <div className="collapsible__content">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
          </div>
        </details>
        <details className="collapsible">
          <summary className="collapsible__summary">
            <h3>Respect</h3>
          </summary>
          <div className="collapsible__content">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        </details>
        <details className="collapsible">
          <summary className="collapsible__summary">
            <h3>Service</h3>
          </summary>
          <div className="collapsible__content">
            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
          </div>
        </details>
        <details className="collapsible">
          <summary className="collapsible__summary">
            <h3>Sécurité</h3>
          </summary>
          <div className="collapsible__content">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </div>
        </details>
      </div>
    </main>
  )
}