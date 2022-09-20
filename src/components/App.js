import { useState, useEffect } from "react";
import "./App.css";
import ItemListContainer from "./ItemListContainer";
import Navbar from "./Navbar";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./CartContext";
import Cart from "./Cart";
import { firestore } from "./firebase";

function App() {
  // Este useState lo voy a usar para guardar el resultado de la promesa
  // const [ items, setItems ] = useState([])
  const [fireItems, setFireItems] = useState([]);

  // Con el useEffect me aseguro que la promesa corra cuando se renderea el componente
  /*
  useEffect(() => {
    // Acá preparo mi promesa. Dentro de la promesa armo un setTimeout para simular 2 segundos.
    // Pasados esos dos segundos la promesa me devuelve productos, el listado de arriba
    const promesa = new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve(productos); 
      }, 2000);
    }
    )
    // Para acceder al resultado de la promesa tengo que usar el .then, el .catch me sirve para agarrar
    // algún error si los hubiera.
    // El resultado de la promesa lo guardo en items con setItems.
    promesa.then( result => setItems(result)) 
    promesa.catch( err => console.log("Algo salio mal")) 

  }, []);
  */

  // En el useEffect hago el llamado a firebase para obtener y setear los productos
  useEffect(() => {
    const db = firestore;
    const collection = db.collection("productos");
    const query = collection.get();
    query
      .then((result) => {
        setFireItems(result.docs.map((p) => ({ id: p.id, ...p.data() })));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fireItems]);

  return (
    <div className="app">
      {/* Envuelvo toda mi app en mi provider para poder tomar los datos en cualquier componente */}
      <CartProvider>
        {/* Toda la app la envuelvo en BrowserRouter */}
        <BrowserRouter>
          {/* Navbar la dejo fuera del Switch porque quiero que siempre esté, sin importar la ruta */}
          <Navbar />

          <Routes>
            {/* Importante usar el exact path para no tener problemas */}

            <Route
              exact
              path="/"
              element={
                <ItemListContainer
                  greeting={"Tienda Edad Media"}
                  productos={fireItems}
                />
              }
            />

            {/* Para poder navegar con parámetros necesito usar el ":" */}

            <Route
              exact
              path="/category/:id"
              element={
                <ItemListContainer
                  greeting="Tienda Edad Media"
                  productos={fireItems}
                />
              }
            />

            <Route exact path="/item/:id" element={<ItemDetailContainer />} />

            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
