import Rentals from "../components/rentals"

export default function Home() {
  return(
    <main className="home">
      <section className="home__hero">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <Rentals />
    </main>
  )
}