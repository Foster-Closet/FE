import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CreateRequest from './components/CreateRequest'
import Register from './components/Register'
import Login from './components/Login'
import FFDashboard from './components/FFDashBoard'
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
          <Route exact path='/foster-family-dashboard'>
            <FFDashboard auth={auth} />
          </Route>

          <Route path='/create-request'>
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
