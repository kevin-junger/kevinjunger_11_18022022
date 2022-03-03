import RentalCard from "../components/rentalCard"

export default function Home(props) {
  const data = props.rentals
  
  return(
    <main className="home">
      <section className="hero">
        <h1 className="hero__text">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="rentals">
      <div className="rentals__grid">
        {data.map((rental) => (
          <RentalCard key={rental.id} title={rental.title} id={rental.id} />
        ))}
      </div>
    </section>
    </main>
  )
}