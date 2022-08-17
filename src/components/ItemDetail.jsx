const ItemDetail = ({ producto }) => {

  console.log(producto)
    return (
        <div>
            <h2 className="item__title">{producto.title}</h2>
            <p className="item__detalle">{producto.description}</p>
        </div>
    )
}

export default ItemDetail