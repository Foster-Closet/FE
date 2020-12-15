
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateRequest from './CreateRequest'

function App() {
  //Does this need Local Storage?
  const [auth, setAuth] = useLocalStorage('', null)

  return (
    <Router>
      <div className="App">
        {auth && (
          <div>
            <span>Logged in as {auth.username}</span> | <button onClick={() => setAuth(null)}>Log Out</button>
          </div>
        )}

        <Switch>
          <Route path='/createlist'>
            <CreateRequest auth={auth} />
          </Route>






        </Switch>
      </div>
    </Router>


  )
}
export default App;
