import { createContext, useContext, useState } from "react";

const contexto = createContext();
const { Provider } = contexto;

export const useCarrito = () => {
    const valor_del_contexto = useContext(contexto)
    return valor_del_contexto
}

const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);

    const agregarProducto = (producto) => {
        setCantidad(cantidad + producto.cantidad)
    }

    const eliminarProducto = () => { }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnCarrito = (id) => { }

    const valorDelContexto = {
        cantidad: cantidad,
        carrito: carrito,
        setCantidad,
        setCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CustomProvider;