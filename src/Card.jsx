import './Card.css'

function Card(props){
    return(
        <div class="card">
        <img src="./src/assets/react.svg" alt="Card Image"/>
        <div class="card-content">
            <h3>{props.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Read More</button>
        </div>
    </div>
    )
}

export default Card