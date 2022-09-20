import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { firestore } from './firebase';

function ItemListContainer({ greeting, productos }) {
    // Voy a usar este estado para guardar los productos que quiero mostrar, sean filtrados o no
    const [ items, setItems ] = useState([])

    // El useParams me va a permitir "leer" la url y lo que hay después de "categorias/ (si hay algo)"
    const { id } = useParams()

    useEffect(() => {
        // Tomo los productos que me envía App y, si hay un id, filtro todos para agarrar sólo los que
        // tengan el id señalado
        if(id){
            /*
            const category = productos.filter(product => product.category === id)
            setItems(category)
            */

            const db = firestore
            const collection = db.collection('productos')
            const query = collection.where('category',"==",id).get()
            query
            .then((result) => {
                setItems(result.docs.map(p => ({id: p.id, ...p.data()})))
              })
              .catch((error) => {
                console.log(error)
              })
        }
        else{
            setItems(productos)
        }     

    }, [id, productos])

    return (
        <div className="itemListContainer">
            <h2>{greeting}</h2>

            { /* Chequeado el filtrado envío los productos a ItemList */}

            {productos.length > 0 ? <ItemList productos={items} /> : <h2>Loading</h2>}           
        </div>
    )
}

export default ItemListContainer
