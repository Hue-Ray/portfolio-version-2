import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <div className=''>
      <Header />
      <Home />
      <About id="about"/>
      <Projects />
    </div>
  )
}

export default App
