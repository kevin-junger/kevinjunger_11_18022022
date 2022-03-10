import Hero from "../components/hero"
import Rentals from "../components/rentals"

export default function Home(props) {
  const data = props.data
  
  return(
    <main className="home">
      <Hero />
      <Rentals rentals={data} />
    </main>
  )
}
