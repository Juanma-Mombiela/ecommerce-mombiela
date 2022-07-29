import './ItemListContainer.css';

function ItemListContainer({ greeting}) {

    return (
        <div className="itemListContainer">
            <h2>{greeting}</h2>        
        </div>
    )
}

export default ItemListContainer
