import zeldaicon from "../../Images/zeldaicon.png"
import { Link } from "react-router-dom"

import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link className="logo-container" to={"/"}>
                <img className="website-logo" src={zeldaicon} alt="website-logo" />
                <h1 className="website-name">Zelda's Compendium</h1>
            </Link>
        </nav>
    )
}

export default NavBar