import hero from "../assets/hero.jpg"
import RentalCard from "../components/rentalCard"

export default function Home(props) {
  const data = props.rentals
  
  return(
    <main className="home">
      <section className="hero">
        <img src={hero} alt="" className="hero__image" />
        <div className="hero__text">
          <h1 className="hero__text--header">Chez vous, partout et ailleurs</h1>
        </div>
      </section>
      <section className="rentals">
      <div className="rentals__grid">
        {data.map((rental) => (
          <RentalCard key={rental.id} title={rental.title} id={rental.id} cover={rental.cover} />
        ))}
      </div>
    </section>
    </main>
  )
}