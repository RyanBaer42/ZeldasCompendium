

const ItemCard = ({image, name}) => {
    return (
        <div>
            <img src={image} alt={name}/>
            <p>{name}</p>
        </div>
    )
}

export default ItemCard