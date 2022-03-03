import {
  Fragment,
  useState,
  useEffect
} from "react"
import {
  Routes,
  Route,
} from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./containers/home"
import About from "./containers/about"
import Rental from "./containers/rental"
import NotFound from "./containers/notFound"

export default function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('./rentals.json')
    .then((response) => {
      if(!response.ok) {
        throw new Error(`Erreur HTTP - ${response.status}`)
      }
      return response.json()
    })
    .then((json) => {
      setData(json)
      setError(null)
    })
    .catch((err) => {
      setError(err.message)
      setData(null)
    })
    .finally(setLoading(false))
  }, [])

  return (
    <Fragment>
      <Header />
      {loading && <p>Veuillez patienter...</p>}
      {error && <p>${error}</p>}
      {data && 
        <Routes>
          <Route path="/" element={<Home rentals={data} />} />
          <Route path="/about" element={<About />} />
          <Route path=":rentalId" element={<Rental rentals={data} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      }
      <Footer />
    </Fragment>
  )
}
