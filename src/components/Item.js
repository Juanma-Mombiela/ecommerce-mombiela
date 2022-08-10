import { Link } from "react-router-dom"

const Item = ({ producto }) => {
  return (
    <article className="item">
      <h2 className="item__title">{producto.nombre}</h2>
      <p className="item__price">Precio : ${producto.precio}</p>
      <Link to="/detalle" className="item__button">ver detalle</Link>
    </article>
  )
}
export default Item