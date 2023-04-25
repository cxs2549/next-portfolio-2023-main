import Footer from "../components/common/Footer"
import Header from "../components/common/header/Header"
import About from "../components/homepage/About"
import Projects from "../components/homepage/Projects"
import Tech from "../components/homepage/Tech"

const App = () => {
  return (
    <div className="antialiased">
      <Header />
      <Tech />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
