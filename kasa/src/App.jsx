import {
  Fragment,
  useState,
  useEffect
} from "react"
import {
  Routes,
  Route
} from "react-router-dom"
import Home from "./containers/home"
import About from "./containers/about"
import Wrapper from "./containers/wrapper"
import Header from "./components/header"
import Footer from "./components/footer"

export default function App() {
  // fetching the JSON and updating the states accordingly

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('./rentals.json')
    .then((response) => {
      if(!response.ok) {
        throw new Error(response.status)
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
          <Route path="/" element={<Home data={data} />} />
          <Route path=":rentalId" element={<Wrapper data={data} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      }
      <Footer />
    </Fragment>
  )
}
