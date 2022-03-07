export default function Carrousel(props) {
  const gallery = props.gallery
  return(
    <div className="rental__carrousel">
      <img className="rental__carrousel--image" src={gallery[0]} alt="" />
      <div className="rental__carrousel--position">1/4</div>
    </div>
  )
}
