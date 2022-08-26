import { createContext, useContext, useState } from "react";

const contexto = createContext();
const { Provider } = contexto;

export const useCarrito = () => {
    const valor_del_contexto = useContext(contexto)
    return valor_del_contexto
}

const CustomProvider = (props) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([
        {
            id: 1,
            nombre: "Producto 1",
            precio: 100
        }
    ]);

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