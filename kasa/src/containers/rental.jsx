import { useParams } from "react-router-dom"
import RentalContent from "../components/rentalContent"
import NotFound from "../components/notFound"

export default function Rental(props) {
  const data = props.rentals
  const { rentalId } = useParams()
  const rental = data.find((rental) => rental.id === rentalId)

  return rental !== undefined ? (
    <RentalContent rental={rental} />
  ) : (
    <NotFound />
  )
}
