import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateRequest from './components/CreateRequest'
import FFRegister from './components/FFRegister'
import FFLogin from './components/FFLogin'
import DonorRegister from './components/DonorRegister'
import DonorLogin from './components/DonorLogin'
import FFDashboard from './components/FFDashBoard'
import DonorDashboard from './components/DonorDashboard'
import Messaging from './components/Messaging'
import LandingPage from './components/LandingPage'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './globals'
import { theme } from './theme'
import Burger from './components/Burger'
import Menu from './components/Menu'
import { useLocalStorage, useOnClickOutside } from './hooks'

const App = () => {
  const [auth, setAuth] = useLocalStorage('auth_token', null)
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div className='App'>
          <Router>
            <Switch>
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

              <Route path='/foster-family-dashboard'>
                <FFDashboard auth={auth} />
              </Route>

              <Route path='/donor-dashboard'>
                <DonorDashboard auth={auth} />
              </Route>

              <Route path='/create-request'>
                <CreateRequest auth={auth} />
              </Route>

              <Route path='/messaging'>
                <Messaging auth={auth} />
              </Route>

              <Route exact path='/'>
                <LandingPage />
              </Route>
            </Switch>
          </Router>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </div>
      </>
    </ThemeProvider >
  )
}

export default App
