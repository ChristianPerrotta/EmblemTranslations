import { createElement } from "react";

export function TextRender(props) {
    
    // text rendering if topBottom
    if(props.mode === "topBottom") {
        return (
            <div className="container mt-4" id="main-text">
                <div id="topDiv">
                    {props.page.map(line => {
                        if(line[0] === "hr") {
                            return <hr />
                        } else {
                            return createElement(
                                line[0], 
                                {className: line.length === 3 ? "col" : "col " + line[3]}, 
                                line[1]
                            )
                        }
                    })}
                </div>
                <div id="bottomDiv">
                {props.page.map(line => {
                        if(line[0] === "hr") {
                            return <hr />
                        } else {
                            return createElement(
                                line[0], 
                                {className: line.length === 3 ? "col" : "col " + line[3]}, 
                                line[2]
                            )
                        }
                    })}
                </div>
            </div>
        )
    } else return (
        <div className="container mt-4" id="main-text">
            {
            props.page.map((line, i) => {
                if(line[0] === "hr") {
                    return <hr key={i} />
                }

                if(props.mode === "intercalated") {
                    return (
                        <div key={i} className="row">
                            {createElement(line[0], {className: line.length === 3 ? "" : line[3]}, line[1])}
                            {createElement(line[0], {className: line.length === 3 ? "" : line[3]}, line[2])}
                        </div>
                    )
                }
                
                if(props.mode === "english") {
                    return (
                        <div key={i} className="row">
                            {createElement(line[0], {className: line.length === 3 ? "" : line[3]}, line[1])}
                        </div>
                    )
                }
                
                if(props.mode === "japanese") {
                    return (
                        <div key={i} className="row">
                            {createElement(line[0], {className: line.length === 3 ? "" : line[3]}, line[2])}
                        </div>
                    )
                }

                return ( //leftRight
                    <div key={i} className="row">
                        {createElement(
                            line[0],
                            {className: line.length === 3 ? "col" : "col " + line[3]},
                            line[1]
                        )}
                        {createElement(
                            line[0], 
                            {className: line.length === 3 ? "col" : "col " + line[3]}, 
                            line[2]
                        )}
                    </div>
                )
        })}
        </div>       
    )
}