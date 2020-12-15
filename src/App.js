import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateRequest from './components/CreateRequest'
import FFRegister from './components/FFRegister'
import FFLogin from './components/FFLogin'
import DonorRegister from './components/DonorRegister'
import DonorLogin from './components/DonorLogin'
import FFDashboard from './components/FFDashboard'
import DonorDashboard from './components/DonorDashboard'
import LandingPage from './components/LandingPage'
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
          <Route path='/foster-family-dashboard'>
            <FFDashboard auth={auth} />
          </Route>

          <Route path='/donor-dashboard'>
            <DonorDashboard auth={auth} />
          </Route>

          <Route path='/create-request'>
            <CreateRequest auth={auth} />
          </Route>

          <Route path='/foster-family-signup'>
            <FFRegister auth={auth} onRegister={setAuth} />
          </Route>

          <Route path='/foster-family-login'>
            <FFLogin auth={auth} onLogin={setAuth} />
          </Route>

          <Route path='/donor-signup'>
            <DonorRegister auth={auth} onRegister={setAuth} />
          </Route>

          <Route path='/donor-login'>
            <DonorLogin auth={auth} onLogin={setAuth} />
          </Route>

          <Route exact path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
export default App
