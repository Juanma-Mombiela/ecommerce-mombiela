import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const detallesProductos = [
    { 
        titulo: "Producto",
        detalle: "Detalle del Producto"
    }
]

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(detallesProductos)
            }, 2000)
        })

        pedido.then((resultado) => {
            setProductos(resultado)
            setLoading(false)
        })

        pedido.catch((error) => {
            console.log("Termino el pedido mal")
        })

    }, [])


    if (loading) {
        return (
            <p>Cargando...</p>
        )
    } else {
        return (
            <section className="items">
            {productos.map((producto) => {
                return <ItemDetail
                producto={producto}
                titulo={producto.titulo}     
                detalle={producto.detalle}
             />
            })}
        </section>
            
        )
        
    }

}

export default ItemDetailContainer