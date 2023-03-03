import { useEffect, useState, } from 'react';
import { Route, Switch } from 'react-router-dom';
import fetchData from '../../ApiCalls';
import CardContainer from '../CardContainer/CardContainer';
import NavBar from '../NavBar/NavBar';
import SearchForm from '../SearchForm/SearchForm';
import ItemDetails from '../ItemDetails/ItemDetails';
import ErrorPage from '../ErrorPage/ErrorPage';
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
        setError(error.message)
        setLoading(false)
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
            exact path="/item/:item"
            render={({ match }) => {
              console.log(match.params)
              return (
                <ItemDetails itemName={match.params.item} />
              )
            }}/>
          <Route path={"*"} component={ErrorPage} />
        </Switch>
      </div>
    )
  } 
  else if (!loading && error.length){
    return (
      <div>
        <NavBar />
        <ErrorPage error={error}/>
      </div>
    )
  }
}

export default App;
