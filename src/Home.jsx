import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">MyWebsite</div>
                <ul className="nav-links">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>

            </nav>
        </>
    )
}
export default Home