import Header from "./components/Header"
import style from "./style.scss"
import Meme from "./components/Meme"

export default function App() {
    function click() {
        console.log("first react listener")
    }

    function point(params) {
        console.log("it is pointed")
    }


    return(
        <>
            {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"30px"}}>
                <img onPointerOver={point} src="https://cdn.pixabay.com/photo/2020/11/13/14/01/pen-5738623_1280.jpg" width="300px"></img>
                <button onClick={click} style={{padding:"40px 100px"}}>Click me</button>
            </div> */}
            <Header />
            <Meme />
        </>
    )
}