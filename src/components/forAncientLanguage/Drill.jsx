import { useEffect, useRef, useState } from "react";

export function Drill({list, type}) {

    const wordToCheck = useRef('');

    const [index, setIndex] = useState(0);
    const [inputVal, setInput] = useState('');
    const [isDisabled, setDisabled] = useState(false);
    const [result, setResult] = useState('invisible');

    function handleCheckWord() {
        let w = wordToCheck.current.trim().toUpperCase();
        if (list[index].toUpperCase() === w) {
            setResult('alert-success')
        } else {
            setResult('alert-danger')
        }
        setDisabled(true);
    }

    function handleNextWord() {
        let newIndex = index + 1;
        if (newIndex > (list.length - 1)) newIndex = 0;
        setIndex(newIndex);
        setInput('');
        setDisabled(false);
        setResult('invisible');
    }

    function handleInputUpdate(e) {
        setInput(e.target.value);
        wordToCheck.current = e.target.value;
    }

    useEffect(() => {

        function handlePressEnter(e) {
            // typing stage
            if(e.key === 'Enter' && !isDisabled) {
                handleCheckWord()
            } else if (e.key === 'Enter' && isDisabled) {
                handleNextWord()
            }
        }

        document.addEventListener('keydown', handlePressEnter);

        return () => {
            document.removeEventListener('keydown', handlePressEnter);
        }

    }, [isDisabled]);

    return (
        <div className="row align-items-center justify-content-center mt-3">
            {type === 'name' ? 
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
            Don't mind the big "G"-like character in the begining of each word. It's just ther to indicate that the initial letter is in upper case. This character has no pronunciation whatsoever.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            : undefined}
            <div className="col col-auto" key={"word" + index}>
                <div className="card" style={{width: 18 + "rem"}}>
                    <div className="card-header text-center">
                        Read the {type}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item ancient-l text-center">{list[index]}</li>
                        <li className="list-group-item text-center">
                            <input className="form-control" type="text" placeholder="reading" 
                            aria-label="default input example" value={inputVal} id="input-element"
                            onChange={handleInputUpdate} disabled={isDisabled} autoFocus />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col col-auto text-center">
                
                <button className="btn btn-primary my-2 mx-2" style={{width: 5 + "rem"}}
                onClick={handleCheckWord} disabled={isDisabled}>Check</button>
                <button className="btn btn-primary my-2" style={{width: 5 + "rem"}}
                onClick={handleNextWord}>Next</button>
                <div className={"alert " + result} role="alert" style={{width: 11 + "rem"}}>
                    {result === "alert-success" ? "Correct" : "Incorrect"}, the {type} is "{list[index]}".
                </div>
            </div>
        </div>
    )
}