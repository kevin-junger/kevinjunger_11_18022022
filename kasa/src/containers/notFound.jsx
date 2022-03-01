import { Link } from "react-router-dom"

export default function NotFound(){
  return(
    <main className="notfound">
      <h2>404</h2>
      <p>Oups ! La page que vous cherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </main>
  )
}