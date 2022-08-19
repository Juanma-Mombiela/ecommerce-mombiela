import { useContext } from "react"
import Contador from "./Contador"
import { contexto } from "./CustomProvider"


const ItemDetail = ({ item }) => {

    const { agregarProducto } = useContext(contexto)

    const onAdd = (contador) => {
        item.cantidad = contador
        agregarProducto(item)
    }

    return (
        <div>
            <h2 className="item__title">{item.title}</h2>
            <p className="item__detalle">{item.description}</p>
            <Contador onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail
