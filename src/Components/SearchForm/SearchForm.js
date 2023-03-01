import { useState } from "react";
import "./SearchForm.css"

const SearchForm = () => {
    const [input, setInput] = useState('')

    

    return (
        <div className="SearchForm">
            <form className="form">
                <label className="search-label">Search Items</label>
                <div>
                    <input 
                        title="search"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}/>
                    <input 
                        type="submit" 
                        value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default SearchForm