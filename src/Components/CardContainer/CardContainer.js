import ItemCard from "../ItemCard/ItemCard"
import "./CardContainer.css"

const CardContainer = ({items}) => {
    const itemCards = items.map(item => {
        return (
            <ItemCard 
            key={item.id}
            image={item.image}
            name={item.name}
            />
        )
    })
    return (
        <div className="card-container">
            {itemCards}
        </div>
    )
}

export default CardContainer