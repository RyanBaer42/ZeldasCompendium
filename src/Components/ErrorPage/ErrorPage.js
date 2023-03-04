import { Link } from "react-router-dom"
import GameOver from "../../Images/GameOver.png"
import "./ErrorPage.css"

const ErrorPage = ({error}) => {
    return (
        <div className="ErrorPage">
            <p className="error-text">Something went wrong{error}</p>
            <Link to={"/"}>
                <button className="error-return-button">Return to Main Page</button>
            </Link>
            <img src={GameOver} alt="Game Over"/>
        </div>
    )
}

export default ErrorPage