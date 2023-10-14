import { Link } from "react-router-dom";
import './styles.css';

export function BookCard(props) {

    return (
        <div className="card">
            {props.working && <p className="card-header">Currently working on</p>}
            <img src={require('../../assets/' + props.img)} className="card-img" alt={props.alt} />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <Link to={props.path} className="btn btn-primary d-block mx-auto">Go to page</Link>
            </div>
        </div>
    )

}