import Item from "./Item"

const ItemList = ({ productos }) => {
    return (
        <section className="items">
            {productos.map((producto) => {
                return <Item producto={producto}/>
            })}
        </section>
    )
}
export default ItemList