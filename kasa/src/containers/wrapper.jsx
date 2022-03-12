import { useParams } from "react-router-dom"
import Rental from "./rental"
import NotFound from "./notFound"

export default function Wrapper(props) {
  const data = props.data
  const { rentalId } = useParams()
  const rental = data.find((rental) => rental.id === rentalId)

  //if rental is undefined (which means rentalId doesn't match), notFound is displayed instead
  return rental !== undefined ? (
    <Rental rental={rental} />      
  ) : (
    <NotFound />
  )
}
