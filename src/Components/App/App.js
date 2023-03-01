import { useEffect, useState } from 'react';
import fetchData from '../../ApiCalls';
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchData()
      .then(data => {
        setItems(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <SearchForm />
      <CardContainer />
    </div>
  )
}

export default App;
