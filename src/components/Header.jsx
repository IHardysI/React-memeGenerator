import troll from "../img/Troll Face.svg"

export default function Header() {
    return(
        <header className="header">
            <img className="header__troll" alt="troll" src={troll} />
            <h2 className="header__title">Meme Generator</h2>
        </header>
    )
}