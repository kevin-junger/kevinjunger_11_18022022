import StarOn from "../assets/starOn"
import StarOff from "../assets/starOff"

export default function Rate(props) {
  const rating = props.rating
  const maxRating = 5
  let starArray = []
  
  for(let i = 0; i < rating; i++) {
    starArray[i] = <StarOn />
  }

  if(rating !== maxRating) {
    for(let i = rating; i < maxRating; i++) {
      starArray[i] = <StarOff />
    }
  }

  return(
    <div className="rate">
      <ul className="rate__stars">
        {starArray.map((star) => <li key={starArray.indexOf(star)}className="rate__star">{star}</li>)}
      </ul>
    </div>
  )
}
