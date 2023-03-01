import { useEffect, useState, } from 'react';
import { Route, Switch } from 'react-router-dom';
import fetchData from '../../ApiCalls';
import CardContainer from '../CardContainer/CardContainer';
import NavBar from '../NavBar/NavBar';
import SearchForm from '../SearchForm/SearchForm';
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

  if (!loading) {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <SearchForm />
                <CardContainer items={items} />
              </div>
            )}
          />
          <Route
            exact path="/:item"
            render={({match}) => {
              return (
                <div>
                  
                </div>
              )
            }}/>

        </Switch>
      </div>
    )
  }
}

export default App;
