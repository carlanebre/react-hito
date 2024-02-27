import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from "./components/nav";
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contacto from "./pages/Contacto";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Nav />

      <Router>
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route exact path="/tienda" element={<Tienda />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default App
