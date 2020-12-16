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
import Navbar from './components/Navbar'
import { useLocalStorage } from './hooks'
import 'bulma/css/bulma.css'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}
const pages = ['Notifications', 'Messages', 'My Dashboard', 'Profile']

const App = () => {
  const [auth, setAuth] = useLocalStorage('', null)

  return (
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
      <Router>
        <Switch>
          <Route exact path='/foster-family-dashboard'>
            <FFDashboard auth={auth} />
          </Route>

          <Route exact path='/donor-dashboard'>
            <DonorDashboard auth={auth} />
          </Route>

          <Route exact path='/create-request'>
            <CreateRequest auth={auth} />
          </Route>

          <Route exact path='/foster-family-signup'>
            <FFRegister auth={auth} onRegister={setAuth} />
          </Route>

          <Route exact path='/foster-family-login'>
            <FFLogin auth={auth} onLogin={setAuth} />
          </Route>

          <Route exact path='/donor-signup'>
            <DonorRegister auth={auth} onRegister={setAuth} />
          </Route>

          <Route exact path='/donor-login'>
            <DonorLogin auth={auth} onLogin={setAuth} />
          </Route>

          <Route exact path='/'>
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App
