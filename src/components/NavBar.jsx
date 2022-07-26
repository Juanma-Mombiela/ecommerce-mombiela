import React from 'react';
import './Navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

// Preparo las categorías para mapearlas en el navbar. El category me va a permitir la navegación
// por parámetros. El nombre lo voy a usar para mostrarlo en pantalla
const categories = [{
    categoryId: "espadas",
    name: "ESPADAS"
},
{
    categoryId: "arcos",
    name: "ARCOS"
},{
    categoryId: "caballos",
    name: "CABALLOS"
}]

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <Link to={"/"}><img src="/logo.png" alt=""/></Link>
            </div>
            <div className="navbar__links">
                {/* Hago el mapeo. Cada categoría me va a llevar a su categoryId */}
                { categories.map( category => <Link to={`/category/${category.categoryId}`}>
                    <p>{category.name}</p>
                    </Link>)}
                <p>Nosotros</p>
                <p>Contactanos</p>

                { /* Acá uso el ícono del carrito que importé */}
                <div className="navbar__cart">
                  <Link to={"/cart"}><CartWidget /></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
