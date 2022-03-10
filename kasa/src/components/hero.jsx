import hero from "../assets/hero.jpg"

export default function Hero() {
  return(
    <section className="hero">
      <img src={hero} alt="" className="hero__image" />
      <div className="hero__headline">
        <h1 className="hero__text">Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  )
}
