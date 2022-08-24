import { BrowserRouter } from "react-router-dom";
import Header from "./Header"
import Main from "./Main";
import CartProvider from "./CartContext";

const App = () => {

    return (
        <CartProvider>
            <BrowserRouter>
                <Header />
                <Main />
            </BrowserRouter>
      </CartProvider>
    )
}

export default App;