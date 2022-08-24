import React, { useState } from 'react';
import ItemCount from './ItemCount';


function ItemDetail( { item, id, stock, initial}) {

    console.log("item",item)
    console.log("id",id)
    console.log("stock",stock)
    console.log("initial",initial)

    const [ counter, setCounter ] = useState(initial)

    function add(){
        if (counter < stock ){
            setCounter(counter+1)
        }
    }

    function substract() {
        if (counter > initial ){
            setCounter(counter-1)
        }
    }

    return (

        <div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div>
                <ItemCount initial={initial} stock={stock} add={add} substract={substract}
                item={item} counter={counter}  id={id}/>
          </div>
        </div>
    )
}

export default ItemDetail 

