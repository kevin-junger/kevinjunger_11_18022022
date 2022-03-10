import { useState } from "react"

export default function Carrousel(props) {
  const gallery = props.gallery

  let [carrouselIndex, updateCarrouselIndex] = useState(0)

  function handleClick(btn) {
    /**
     * If any button is clicked, updateCarrousel() will be called to increment/decrement the carrousel index value and force the carrousel to re-render itself.
     * When the left btn is clicked and carrouselIndex is 0 (which is the first picture), it'll be updated to match the index for the last picture (gallery.length - 1).
     * When the right btn is clicked and carrouselIndex equals gallery.length - 1 (which corresponds to the last picture), it'll be updated with 0.
     */
    
    switch(btn) {
      case "left":
        updateCarrouselIndex((carrouselIndex !== 0 ? carrouselIndex -= 1 : carrouselIndex = gallery.length - 1))
        break
      default:
        updateCarrouselIndex((carrouselIndex !== gallery.length - 1 ? carrouselIndex += 1 : carrouselIndex = 0))
        break
    }
  }

  return(
    <div className="carrousel">
      <div className="carrousel__btn" id="left" onClick={() => handleClick("left")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="white" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
      </div>
      <div className="carrousel__btn" id="right" onClick={() => handleClick("right")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px"><path d="M0 0h24v24H0V0z" fill="none"/><path fill="white" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
      </div>
      <img className="carrousel__image" src={gallery[carrouselIndex]} alt="" /> {/* uses the carrouselIndex value to choose the corresponding picture in the Array */}
      <div className="carrousel__position">{carrouselIndex + 1 }/{gallery.length}</div> {/* likewise, but +1 - otherwise, it would display "0/5" when the first picture is displayed */}
    </div>
  )
}
