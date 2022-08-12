import NavBar from "./NavBar"

const Header = () => {
    return (
        <header id="header">
            <h1 className="title" >Titulo de la Web</h1>
            <img className="logo" src="/logo.png"/>
            <NavBar
                type="header"
            />
        </header>
    )
}

export default Header