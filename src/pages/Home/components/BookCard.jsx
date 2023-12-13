import { Link } from "react-router-dom";

export default function BookCard(props) {

    return (
        <div className="card" style={{width:12+"rem"}}>
            {props.working && <p className="card-header">Currently working on</p>}
            <img src={require('../../../assets/' + props.img)} className="card-img" alt={props.alt} />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <Link to={props.path} className="btn btn-primary d-block mx-auto">Go to page</Link>
            </div>
        </div>
    )

}