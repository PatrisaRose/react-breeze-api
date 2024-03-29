import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navigacio() {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link className="nav-link" to="/">
                            Kezdőlap
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/bejelentkezes">
                            Bejelentkezés
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link className="nav-link" to="/regisztracio">
                            Regisztráció
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}