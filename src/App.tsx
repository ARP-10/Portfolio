import Contact from "./components/contact"
import Mifooter from "./components/footer"
import Header from "./components/header"
import Minavbar from "./components/navbar"
import Projects from "./components/projects"
import Studies from "./components/studies"
import Technologies from "./components/technologies"

function App() {

  return (
    <div>
      <Minavbar />
      <Header />
      <Technologies />
      <Projects/>
      <Studies />
      <Contact />
      <Mifooter />
    </div>

  )
}

export default App
