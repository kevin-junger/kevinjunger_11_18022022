import RentalCard from "./rentalCard"

export default function Rentals() {
  return(
    <section className="rentals">
      <div className="rentals__grid">
        <RentalCard />
        <RentalCard />
        <RentalCard />
        <RentalCard />
      </div>
    </section>
  )
}