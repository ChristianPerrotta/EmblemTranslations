import { Link } from "react-router-dom";
import Logo from "../assets/emblem-translations-logo.svg";

export function Header() {
    return (
        <>
            <div id="banner">
                <h1 className="text-center"><strong>EMBLEM TRANSLATIONS</strong></h1>
            </div>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">

                <Link className="navbar-brand" to="/">
                    <img id="logo-img" src={Logo} alt="Logo" width="40"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* ----[ DROPDOWN MENU ]---- */ }
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Translations
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="./20th-anniversary">20th Anniversary Encyclopedia</Link></li>
                                </ul>
                            </li>
                            {/* ----[ BACK TO NORMAL ]---- */ }

                            <li className="nav-item">
                                <Link className="nav-link" to="./ancient">Tellius Ancient Language</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}