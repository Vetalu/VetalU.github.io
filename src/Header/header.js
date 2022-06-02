import React from "react";
import { Link } from "react-router-dom";

export function Header () {
    return (
        <nav className="Header">
            <div>
                <Link to={"/"} > Vitalii Umanskyi </Link>
            </div>
            <div>
                <Link to={"About"} >About Me </Link>
            </div>
            <div>
                My project's
            </div>
            <div>
                Contacts
            </div>
        </nav>
    )
}

