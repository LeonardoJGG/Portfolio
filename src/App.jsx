import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div>

      <div id='home'> <Home /> </div>
      <div id='about'> <About /> </div>
      <div id='projects'> <Projects /> </div>
      <div id='contact'> <Contact /> </div>

    </div>
  )
}

export default App
