
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
