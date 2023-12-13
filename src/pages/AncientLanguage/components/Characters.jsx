import { useState } from "react"
import "./styles.css";

export default function Characters({list, type}) {

    const [index, setIndex] = useState(0)

    function handleNextCharacter() {
        let newIndex = index + 1;
        if (newIndex > (list.length - 1)) newIndex = 0;
        setIndex(newIndex);
    }

    return (
        <div className="row align-items-center justify-content-center mt-3">

            <div className="col floating-arrow-left">
                <span onClick={handleNextCharacter} className="clickable not-selectable">〈</span>
            </div>

            <div className="col col-auto" key={"letter" + index}>
                <div className="card" style={{width: 12 + "rem"}}>
                    <div className="card-header text-center">
                        New {type}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item ancient-l text-center">{list[index]}</li>
                        <li className="list-group-item text-center">Reading: {list[index]}</li>
                    </ul>
                </div>
            </div>

            <div className="col floating-arrow-right">
                <span onClick={handleNextCharacter} className="clickable not-selectable">〉</span>
            </div>
        </div>
    )
}