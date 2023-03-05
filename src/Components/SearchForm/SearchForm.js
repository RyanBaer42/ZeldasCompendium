import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchForm.css"

const SearchForm = ({ itemNames }) => {
  const [input, setInput] = useState('');

  // filter item names based on the input value
  const filteredItems = itemNames.filter(itemName => 
    itemName.toLowerCase().includes(input.toLowerCase())
  );

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
            list="items"
          />
          <datalist id="items">
            {filteredItems.map((item, index) => (
              <option key={index} value={item} />
            ))}
          </datalist>
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