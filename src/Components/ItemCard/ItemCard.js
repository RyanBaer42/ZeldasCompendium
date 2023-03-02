import { Link } from "react-router-dom";
import "./ItemCard.css"

const ItemCard = ({image, name}) => {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Link to={`/${name}`}>
            <div className="item-card">
                <img className="item-image" src={image} alt={name}/>
                <p>{capitalize(name)}</p>
            </div>
        </Link>
    )
}

export default ItemCard