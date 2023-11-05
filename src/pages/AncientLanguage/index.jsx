import "./styles.css";
import LeanneSpeaking from "../../assets/chibi/leanne-idle.png";
import { Link } from "react-router-dom";

export function AncientLanguage() {

    return (
        <main className="container flex-shrink-0">
            
            <img src={LeanneSpeaking} className="img-fluid d-block mx-auto float-sm-start" 
            alt="Leanne Speaking" width="200px"/>

            <div className="row">
                <div className="card border-secondary m-4 col-lg-10">
                    <div className="card-body">
                        <p className="card-text ancient-m">
                            Oh, you want to learn the language I speak? <br />
                            That is so sweet of you!
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <p>
                Have you ever wanted to read and understand the <a href="https://fireemblemwiki.org/wiki/Ancient_language">Tellius Ancient Language</a> when playing Path of Radiance or Radiant Dawn? Now you can! With the following lessons you'll be able to read it in no time. Start from Lesson 1 and work you way up until you achieve Ancient Language literacy!
            </p>

            <div className="container" id="lesson-buttons">
                <div className="row justify-content-center">
                    <div className="col col-auto col-md-2 text-center">
                        <Link to="/ancient/lesson1">
                            <button className="btn btn-primary my-2">Lesson 1</button> <br />
                        </Link>
                        <Link to="/ancient/lesson2">
                            <button className="btn btn-primary my-2">Lesson 2</button> <br />
                        </Link>
                        <Link to="/ancient/lesson3">
                            <button className="btn btn-primary my-2">Lesson 3</button> <br />
                        </Link>
                        <Link to="/ancient/lesson4">
                            <button className="btn btn-primary my-2">Lesson 4</button> <br />
                        </Link>
                        <Link to="/ancient/lesson5">
                            <button className="btn btn-primary my-2">Lesson 5</button>
                        </Link>
                    </div>
                    <div className="col col-auto col-md-2 text-center">
                        <Link to="/ancient/lesson6">
                            <button className="btn btn-primary my-2">Lesson 6</button> <br />
                        </Link>
                        <Link to="/ancient/lesson7">
                            <button className="btn btn-primary my-2">Lesson 7</button> <br />
                        </Link>
                        <Link to="/ancient/lesson8">
                            <button className="btn btn-primary my-2">Lesson 8</button> <br />
                        </Link>
                        <Link to="/ancient/lesson9">
                            <button className="btn btn-primary my-2">Lesson 9</button> <br />
                        </Link>
                        <Link to="/ancient/lesson10">
                            <button className="btn btn-primary my-2">Lesson 10</button>
                        </Link>
                    </div>
                </div>
            </div>

        </main>
    )
}