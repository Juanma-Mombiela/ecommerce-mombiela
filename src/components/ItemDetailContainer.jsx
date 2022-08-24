import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
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
                <ItemDetail item={item}
                            id={item.id}
                            stock={item.stock}
                            initial={item.initial} />
            </div>
        </>
    );
}

export default ItemDetailContainer;
