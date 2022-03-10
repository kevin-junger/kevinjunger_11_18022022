import aboutHero from "../assets/about.jpg"
import Collapsible from "../components/collapsible"

export default function About() {
  const aboutContent = [
    {
      "id": 1,
      "summary": "Fiabilité",
      "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      "id": 2,
      "summary": "Respect",
      "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      "id": 3,
      "summary": "Service",
      "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      "id": 4,
      "summary": "Sécurité",
      "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  return(
    <main className="about">
      <div className="about__hero">
        <img src={aboutHero} alt="" />
      </div>
      <div className="about__collapsible">
        {aboutContent.map(topic => <Collapsible key={topic.id} id='' summary={topic.summary} contentType="text" content={topic.content} />)}
      </div>
    </main>
  )
}