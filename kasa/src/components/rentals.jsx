import Card from "../components/card"

export default function Rentals(props) {
  const rentals = props.rentals

  return(
    <section className="rentals">
      <div className="rentals__grid">
        {rentals.map((rental) => (
          <Card key={rental.id} title={rental.title} id={rental.id} cover={rental.cover} />
        ))}
      </div>
    </section>
  )
}
