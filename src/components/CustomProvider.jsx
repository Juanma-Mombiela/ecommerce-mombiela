import { createContext, useState } from "react";

export const contexto = createContext(); 
const { Provider } = contexto;


const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);

    const agregarProducto = (producto) => {
        setCantidad(cantidad + producto.cantidad)
    }

    const eliminarProducto = () => {}

    const valorDelContexto = {
        cantidad: cantidad,
        agregarProducto,
        eliminarProducto,
    }

    return(
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}


export default CustomProvider;