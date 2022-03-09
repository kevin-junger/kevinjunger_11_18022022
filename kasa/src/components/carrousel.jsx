import { useState } from "react"

export default function Carrousel(props) {
  const gallery = props.gallery

  let [carrousel, updateCarrousel] = useState(0)

  function handleClick(btn) {
    switch(btn) {
      case "left":
        updateCarrousel((carrousel !== 0 ? carrousel -= 1 : carrousel = gallery.length - 1))
        break
      default:
        updateCarrousel((carrousel !== gallery.length - 1 ? carrousel += 1 : carrousel = 0))
        break
    }
  }

  return(
    <div className="rental__carrousel">
      <div className="rental__carrousel--btn" id="left" onClick={() => handleClick("left")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="white" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
      </div>
      <div className="rental__carrousel--btn" id="right" onClick={() => handleClick("right")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="white" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
      </div>
      <img className="rental__carrousel--image" src={gallery[carrousel]} alt="" />
      <div className="rental__carrousel--position">{carrousel + 1 }/{gallery.length}</div>
    </div>
  )
}
