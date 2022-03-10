import StarOn from "../assets/starOn"
import StarOff from "../assets/starOff"

export default function Rate(props) {
  const rating = props.rating
  const maxRating = 5
  let starArray = []
  
  for(let i = 0; i < rating; i++) { // adds a star for each point
    starArray[i] = <StarOn />
  }

  if(rating !== maxRating) {  // if rating isn't 5/5, then takes the rating (e.g. 3) as the starting point in the Array, then adds a greyed-out Star as many times as necessary
    for(let i = rating; i < maxRating; i++) {
      starArray[i] = <StarOff />
    }
  }

  return(
    <div className="rate">
      <ul className="rate__stars">
        {starArray.map((star) => <li key={starArray.indexOf(star)}className="rate__star">{star}</li>)} {/* Maps the Array and adds the stars to the document */}
      </ul>
    </div>
  )
}
