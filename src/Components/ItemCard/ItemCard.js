import { Link } from "react-router-dom";
import "./ItemCard.css"

const ItemCard = ({image, name, id}) => {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Link className="card-link" to={`item/${name}`}>
            <div className="item-card" id={id}>
                <img className="item-image" src={image} alt={name}/>
                <p className="card-name">{capitalize(name)}</p>
            </div>
        </Link>
    )
}

export default ItemCard