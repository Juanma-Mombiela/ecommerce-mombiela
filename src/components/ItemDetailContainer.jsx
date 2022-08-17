import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [producto, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {

        const pedido = fetch("https://fakestoreapi.com/products/" + id)

        pedido
            .then((respuesta) => {
                return respuesta.json()
            })
            .then((respuesta) => {
                setItem(respuesta)
            })
            .catch(error => console.log(error))

    }, [id])


    return (
        <>
            <div className='container'>
                <ItemDetail producto={producto} />
            </div>
        </>
    );
}

export default ItemDetailContainer;
