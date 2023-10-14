import './styles.css';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <div id="banner">
                <h1 className="text-center"><strong>EMBLEM TRANSLATIONS</strong></h1>
            </div>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="./20th-anniversary">20th Anniversary</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}