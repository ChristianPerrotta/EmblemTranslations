export function Description(props) {
    
    return (
        <div className="container mt-4">
            <img src={props.img} className="float-end p-2" alt="Book cover." width="180px" />   
            {props.paragraphs.map((p, i) => {
                return (<p key={i}>{p}</p>)
            })}
        </div>
    )
}