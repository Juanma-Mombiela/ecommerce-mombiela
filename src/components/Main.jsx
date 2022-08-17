import ItemListContainer from "./ItemListContainer"
import { Routes , Route } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./Cart"

const Main = () => {

    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </main>
    )
}

export default Main