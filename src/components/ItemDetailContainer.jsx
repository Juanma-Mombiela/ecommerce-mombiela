import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import { firestore } from './firebase';

function ItemDetailContainer() {
    // Una lógica muy similar a ItemListContainer. Voy a usar este estado para guardar el item
    // const [ item, setItem ] = useState()
    const [ fireItem, setFireItem ] = useState()

    // el useParams me va a permitir leer la url y tomar el id que está después de items/
    const { id } = useParams()
    /*
    useEffect(() => {
        // Esta promesa en dos segundos me va a devolver 1 solo producto
        const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
            // Con esta lógica busco en la lista de productos el que comparta el id con el useParams
            const i = productos.find(product => product.id === parseInt(id))
            resolve(i); 
        }, 2000);
        }
        )
        // Ese producto lo guardo en mi estado
        promesa.then(result => setItem(result)) 
        promesa.catch(err => console.log("Algo salio mal")) 

    },  [id]);
    */

    useEffect(() => {
     const db = firestore
     const collection = db.collection('productos') 
     const item = collection.doc(id)

     item.get()
      .then( (i) => {
        setFireItem({ id: i.id, ...i.data()})
      })

  },  [id]);

    return (
        <div className="itemDetailContainer">
           { /* Los datos del item los envío al componente ItemDetail para que los muestre */ }

            { fireItem ?
            <ItemDetail
             item={fireItem}
             id={fireItem.id}
             name={fireItem.name}     
             price={fireItem.price}
             image={fireItem.image}
             description={fireItem.description}
             stock={fireItem.stock}
             initial={fireItem.initial}
             />
             :
             <h2>Loading</h2>}
        </div>
    )
}

export default ItemDetailContainer
