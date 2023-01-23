import Navbar from '/components/Navbar'
import Services from '/pages/Services'
import Work from '/pages/Work'
import Squarespace from '/pages/Squarespace'
import Seo from '/pages/Seo'
import Branding from '/pages/Branding'
import About from '/pages/About'
import './App.css'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Services/>
      <Work/>
      <Squarespace/>
      <Seo/>
      <Branding/>
      <About/>
    </div>
  )
}

export default App

