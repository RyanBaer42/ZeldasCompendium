import ItemCard from "../ItemCard/ItemCard"

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
        <div>
            {itemCards}
        </div>
    )
}

export default CardContainer