import { Link } from 'react-router-dom'
import './Home.css'
import Card from './Card'

function Home() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">MyWebsite</div>
                <ul className="nav-links">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to ="/Services">Services</Link></li>
                    <li><Link to ="/Contact">Contact</Link></li>
                </ul>
              
            </nav>
            <div className="hero">
            <h1>Wel-come To React project</h1>
            </div>
            <Card title="Home" />
         
           
            
  
  
        </>

        
    )
}
export default Home