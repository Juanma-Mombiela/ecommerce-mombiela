import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../styles/ItemListContainer.css'
import ItemList from "./ItemList"
import Page from "./Page"

const productosIniciales = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300
    }
]

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const pedido = new Promise((res, rej) => {
            setTimeout(() => {
                res(productosIniciales)
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
            <Page titulo="Catalogo" subtitulo="Lo que buscas">
                <ItemList productos={productos} />
            </Page>
        )
    }

}
export default ItemListContainer