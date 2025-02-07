import { BrowserRouter, Routes, Route } from "react-router"
import Package from './pages/Package'
import Home from './pages/Package'
import AboutUs from './pages/Package'
import ContactUs from './pages/Package'
import Gallery from './pages/Package'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/package' element={<Package />}></Route>
        <Route path='/about_us' element={<AboutUs />}></Route>
        <Route path='/contact_us' element={<ContactUs />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
