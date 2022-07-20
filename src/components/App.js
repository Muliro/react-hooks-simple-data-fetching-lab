// create your App component here

import React, {useState, useEffect} from "react";


//App component to render content
function App(){
    const [dogImg, setDogImg] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    //useEffect hook with empty array dependency
    useEffect(() => {
        // fetching data from server
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then((result) => {
            // setting state of random dog image
            setDogImg(result.message);
            setIsLoaded(true);
        }, [])
    })
    // conditional to check if image s loaded
    if (!isLoaded){
        return (
            <p>Loading...</p>
        )
    }
    // return statement to display component to the DOM
    return (
        <img src = {dogImg} alt = "A Random Dog"></img>
    )
}


export default App;