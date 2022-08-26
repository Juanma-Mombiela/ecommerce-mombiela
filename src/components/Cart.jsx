import { useState } from "react"
import List from "./List";
import Page from "./Page";
import { useCarrito } from "./CustomProvider";
import { db } from "./firebase"
import { collection, addDoc , serverTimestamp } from "firebase/firestore"
import { toast } from "react-toastify";

const Cart = () => {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuarios] = useState([]);
  const { carrito } = useCarrito()

  const handleChangeNombre = (e) => {
    e.preventDefault()
    const input = e.target
    const value = input.value
    setNombre(value)
  }

  const handleChangeApellido = (e) => {
    const input = e.target
    const value = input.value
    setApellido(value)
  }

  const handleConfirm = () => {

    const orden = {
      items: carrito,
      total : 300,
      buyer : {
        name : "Carlos Suarez",
        phone : "36750158",
        email : "email@mail.com"
      },
      date : serverTimestamp()
    }

    const ordersCollection = collection(db, "orders")
    const consulta = addDoc(ordersCollection, orden)

    consulta
      .then((res)=>{
        toast.success(`Orden ${res.id} creada con exito!`)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <Page titulo="Carrito" subtitulo="Compra y vende">

      <input type="text" placeholder="Nombre" onChange={handleChangeNombre} value={nombre} />
      <input type="text" placeholder="Apellido" onChange={handleChangeApellido} value={apellido} />

      <button onClick={handleConfirm}>guardar</button>

      <List usuarios={usuarios} />

    </Page>
  )
}

export default Cart