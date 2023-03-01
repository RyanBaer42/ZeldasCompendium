import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState('')

  

  return (
    <div>
      <NavBar />
      <SearchForm />
      <CardContainer />
    </div>
  )
}

export default App;
