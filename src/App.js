import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CreateRequest from './components/CreateRequest'
import Register from './components/Register'
import Login from './components/Login'
import { useLocalStorage } from './hooks'
import Navbar from './components/Navbar'
import 'bulma/css/bulma.css'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

const pages = ['Give Stuff', 'Get Stuff', 'My Dashboard', 'Profile']
const App = () => {
  // Does this need Local Storage?
  const [auth, setAuth] = useLocalStorage('', null)

  return (
    <Router>
      <div className='App'>
        {auth && (
          <div>
            <span>Logged in as {auth.username}</span> |{' '}
            <button onClick={() => setAuth(null)}>Log Out</button>
            <div style={styles}>
              <Navbar pages={pages} />
            </div>
          </div>

        )}

        <Switch>
          <Route path='/createrequest'>
            <CreateRequest auth={auth} />
          </Route>

          <Route exact path='/signup'>
            <Register auth={auth} onRegister={setAuth} />
          </Route>

          <Route exact path='/login'>
            <Login auth={auth} onLogin={setAuth} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
