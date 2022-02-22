export default function Rental() {
  return(
    <main className="rental">
      <h2>Loft cozy près du Canal Saint-Martin</h2>
      <em>Paris, Île-de-France</em>
      <em>Alexandre Dumas</em>
      <div style={{
        width: "64px",
        height: "64px",
        borderRadius: "32px",
        backgroundColor: "grey"
      }}></div>
      <ul>
        <li>Cozy</li>
        <li>Canal</li>
        <li>Paris 10</li>
      </ul>
      <div>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
        <i className="fa-solid fa-star-sharp"></i>
      </div>
    </main>
  )
}