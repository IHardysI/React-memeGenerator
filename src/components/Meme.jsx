import data from "../data.js"
import React from "react"

export default function Meme() {
const [meme, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
})

const allMemeImages = data.data.memes
    
    function getItem() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        
        setMemeImage(prevState => {
            return {
                ...prevState,
                randomImage: allMemeImages[randomNumber].url
            }
        })
    }


    return(
        <main className="meme">
            <div className="meme__container">
                <form className="meme__form">
                    <div className="meme__inputs">
                        <input className="meme__input" type="text" name="first-line"></input>
                        <input className="meme__input" type="text" name="second-line"></input>
                    </div>
                    <button onClick={getItem} className="meme__btn" type="button">Get a new meme image  🖼</button>
                </form>
                <img className="meme__img" src={meme.randomImage} />
            </div>
        </main>
    )
}