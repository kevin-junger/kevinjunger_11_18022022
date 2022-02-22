import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/header'
import Home from './containers/home'
import About from './containers/about'
import Rental from './containers/rental'
import NotFound from './containers/notFound'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rental' element={<Rental />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
