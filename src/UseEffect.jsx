import { useEffect, useState } from "react"



function LearningUseEffect(){

    const [count,setCount] = useState(0)
    const [likeme,setLike]  = useState(0)
    const [latitude,setlatitude] = useState(21231)
    const [longlatitude,setlonglatitude] =useState(12123)

    const increment = ()=>{
        setCount(count+1)
    }

    const decrement =()=>{
        setCount(count-1)
    }

    const likebadhau =()=>{
        setLike(likeme+1)
    }

    useEffect(()=>{
        console.log("useeffect ho")
        setlatitude(latitude+0.1)
        setlonglatitude(longlatitude+0.1)
    },[]) //Runs only once when the component mounts
    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <h2>Like: {likeme}</h2>
        <button onClick={likebadhau}>like me </button>
        <h3>Latitude: {latitude}</h3>
        <h3>Longitude: {longlatitude}</h3>
        </>
    )
}

export default LearningUseEffect