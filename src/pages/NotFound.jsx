import { Link } from "react-router-dom"
import PetraSpeaking from "../assets/chibi/petra-speaking.png"

export function NotFound() {
    return (
        <div>
            <img src={PetraSpeaking} alt="Petra speaking" className="img-fluid d-block mx-auto mt-5" width="200px"/>
            <h1 className="text-center my-5">I am not finding the page...</h1>
            <Link to="/" className="btn btn-primary d-block mx-auto mb-4" style={{width: 100}}>Home</Link>
        </div>
    )
}