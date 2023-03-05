import { useState, useEffect } from "react";
import fetchData from "../../ApiCalls";
import ErrorPage from "../ErrorPage/ErrorPage";
import "./ItemDetails.css";

const ItemDetails = ({ itemName }) => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    useEffect(() => {
        setLoading(true);
        setError("");
        fetchData(itemName)
            .then((data) => {
                setItem(data.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [itemName]);

    if (!loading && !error.length) {
        return (
            <div className="ItemDetails">
                <h1 className="item-name">{capitalize(item.name)}</h1>
                <div className="image-container">
                    <img className="detail-item-image" src={item.image} alt={item.name} />
                </div>
                <div className="detail-pair">
                    <div className="detail-label">
                        <p className="label-text">Description</p>
                    </div>
                    <div className="detail-info">
                        <p className="detail-text">{item.description}</p>
                    </div>
                </div>
                <div className="detail-pair">
                    <div className="detail-label">
                        <p className="label-text">Locations</p>
                    </div>
                    <div className="detail-info">
                        <p className="detail-text">{item.common_locations}</p>
                    </div>
                </div>
                <div className="detail-pair">
                    <div className="detail-label">
                        <p className="label-text">Hearts Recovered</p>
                    </div>
                    <div className="detail-info">
                        <p className="detail-text">{item.hearts_recovered}</p>
                    </div>
                </div>
                <div className="detail-pair">
                    <div className="detail-label">
                        <p className="label-text">Cooking Effect</p>
                    </div>
                    <div className="detail-info">
                        <p className="detail-text">{item.cooking_effect}</p>
                    </div>
                </div>
            </div>
        );
    } else if (!loading && error.length) {
        return <ErrorPage error={error} />;
    } else {
        return <div>Loading...</div>;
    }
};

export default ItemDetails;