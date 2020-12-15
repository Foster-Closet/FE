import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CreateList from './components/CreateList'
import Register from './components/Register'
import { useLocalStorage } from './hooks'

const App = () => {
  //Does this need Local Storage?
  const [auth, setAuth] = useLocalStorage('', null)

  return (
    <Router>
      <div className='App'>
        {auth && (
          <div>
            <span>Logged in as {auth.username}</span> |{' '}
            <button onClick={() => setAuth(null)}>Log Out</button>
          </div>
        )}

        <Switch>
          <Route path='/createlist'>
            <CreateList auth={auth} />
          </Route>

          <Route exact path='/signup'>
            <Register auth={auth} onRegister={setAuth} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
