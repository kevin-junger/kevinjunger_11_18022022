import RentalCard from "../components/rentalCard"

export default function Home() {
  return(
    <main className="home">
      <section className="hero">
        <h1 className="hero__text">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="rentals">
      <div className="rentals__grid">
        <RentalCard />
        <RentalCard />
        <RentalCard />
        <RentalCard />
      </div>
    </section>
    </main>
  )
}