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
    <div className="rental__rate">
      <ul className="rental__rate--stars">
        {starArray.map((star) => <li key={starArray.indexOf(star)}className="rental__rate--star">{star}</li>)}
      </ul>
    </div>
  )
}
