import Item from "./Item"
import '../styles/items.css';

const ItemList = ({ productos }) => {
    return (
        <section className="items">
            {productos.map((producto) => {
                return <Item key={producto.id} producto={producto}/>
            })}
        </section>
    )
}
export default ItemList