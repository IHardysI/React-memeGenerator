import React from "react"

export default function Meme() {
const [meme, setMemeImage] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
})

const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    
    function getItem() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        
        setMemeImage(prevState => {
            return {
                ...prevState,
                randomImage: allMemes[randomNumber].url
            }
        })
    }

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }


    return(
        <main className="meme">
            <div className="meme__container">
                <form className="meme__form">
                    <div className="meme__inputs">
                        <input className="meme__input" type="text" name="topText" placeholder="First line" onChange={handleChange} value={meme.topText}></input>
                        <input className="meme__input" type="text" name="bottomText" placeholder="Bottom line" onChange={handleChange} value={meme.bottomText}></input>
                    </div>
                    <button onClick={getItem} className="meme__btn" type="button">Get a new meme image  🖼</button>
                </form>
                <div className="meme__img-block">
                    <img className="meme__img" src={meme.randomImage} />
                    <h2 className="meme__text top">{meme.topText}</h2>
                    <h2 className="meme__text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}