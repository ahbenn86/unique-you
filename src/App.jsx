import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "/components/Navbar";
import Home from "/pages/Home";
import Services from "/pages/Services";
import Work from "/pages/Work";
import Squarespace from "/pages/Squarespace";
import Seo from "/pages/Seo";
import Branding from "/pages/Branding";
import About from "/pages/About";
import Contact from "/pages/Contact";
import Workshops from "/pages/Workshops";
import Footer from "/components/Footer";
import Success from "/pages/Success";
import Credits from "/pages/Credits";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/our-work" element={<Work />}></Route>
          <Route exact path="/squarespace" element={<Squarespace />}></Route>
          <Route exact path="/seo" element={<Seo />}></Route>
          <Route exact path="/branding" element={<Branding />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/workshops" element={<Workshops />}></Route>
          <Route exact path="/success" element={<Success />}></Route>
          <Route exact path="/credits" element={<Credits />}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
