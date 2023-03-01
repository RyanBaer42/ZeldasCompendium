import { useEffect, useState,  } from 'react';

import fetchData from '../../ApiCalls';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchData()
      .then(data => {
        setItems(data.data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  if (!loading){
    return (
      <div className='App'>
        {/* <NavBar />
        <SearchForm /> */}
        <CardContainer items={items}/>
      </div>
    )
  }
}

export default App;
