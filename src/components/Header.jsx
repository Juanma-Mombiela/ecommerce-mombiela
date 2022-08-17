import { Link } from "react-router-dom"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <header id="header">
            <h1 className="title" >Titulo de la Web</h1>
            <Link to="/">
                <img className="logo" src="/logo.png"/>
            </Link>
            <NavBar
                type="header"
            />
        </header>
    )
}

export default Header