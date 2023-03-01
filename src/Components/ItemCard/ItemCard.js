import "./ItemCard.css"

const ItemCard = ({image, name}) => {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="item-card">
            <img className="item-image" src={image} alt={name}/>
            <p>{capitalize(name)}</p>
        </div>
    )
}

export default ItemCard