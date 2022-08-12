

const ItemDetail = ({ producto }) => {
  return (
    <article className="item">
      <h2 className="item__title">{producto.titulo}</h2>
      <p className="item__detalle">{producto.detalle}</p>
    </article>
  )
}
export default ItemDetail