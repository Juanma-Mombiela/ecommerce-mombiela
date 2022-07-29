
import Header from "./Header"
import ItemListContainer from "./ItemListContainer";

const App = () => {
    return (
        <>
            <Header />

            <ItemListContainer
                greeting={"Item List Contaianer"}
            />
        </>
    )
}

export default App;