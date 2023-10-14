import { createElement } from "react";

export function TextRender(props) {
    
    if(props.mode === "topBottom") {
        return (
            <div className="container mt-4 min-vh-100" id="main-text">
                <div id="topDiv">
                    {props.page.map(line => {
                        if(line[0] === "hr") {
                            return <hr />
                        } else {
                            return createElement(line[0], {className: "col"}, line[1])
                        }
                    })}
                </div>
                <div id="bottomDiv">
                {props.page.map(line => {
                        if(line[0] === "hr") {
                            return <hr />
                        } else {
                            return createElement(line[0], {className: "col"}, line[2])
                        }
                    })}
                </div>
            </div>
        )
    } else return (
        <div className="container mt-4 min-vh-100" id="main-text">
            {
            props.page.map(line => {
                if(line[0] === "hr") {
                    return <hr />
                }

                if(props.mode === "intercalated") {
                    return (
                        <div className="row">
                            {createElement(line[0], null, line[1])}
                            {createElement(line[0], null, line[2])}
                        </div>
                    )
                }
                
                if(props.mode === "english") {
                    return (
                        <div className="row">
                            {createElement(line[0], null, line[1])}
                        </div>
                    )
                }
                
                if(props.mode === "japanese") {
                    return (
                        <div className="row">
                            {createElement(line[0], null, line[2])}
                        </div>
                    )
                }

                return ( //leftRight
                    <div className="row">
                        {createElement(line[0], {className: "col"}, line[1])}
                        {createElement(line[0], {className: "col"}, line[2])}
                    </div>
                )
        })}
        </div>       
    )
}