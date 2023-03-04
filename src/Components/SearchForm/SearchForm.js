import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchForm.css"

const SearchForm = () => {
    const [input, setInput] = useState('');

    return (
        <div className="SearchForm">
            <form className="form">
                <label className="search-label">Search Items</label>
                <div>
                    <input
                        className="search-input" 
                        title="search"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        required/>
                    <Link to={`/item/${input}`}>
                        <input
                            className="submit-input" 
                            type="submit" 
                            value="Search"
                        />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;