import 'tachyons'
import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateRequest from './components/CreateRequest'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './globals'
import { theme } from './theme'
import Burger from './components/Burger'
import Menu from './components/Menu'
import UpdateRequest from './components/UpdateRequest'
import OneRequest from './components/OneRequest'
import AllRequests from './components/AllRequests'
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
        <Router>
          <div>
            <Switch>
              <Route path='/all-requests'>
                <AllRequests auth={auth} />
              </Route>

              <Route path='/request/:id/donate'>
                <OneRequest auth={auth} />
              </Route>

              <Route path='/request/:id/update'>
                <UpdateRequest auth={auth} />
              </Route>

              <Route path='/register'>
                <Register auth={auth} onRegister={setAuth} />
              </Route>

              <Route path='/login'>
                <Login auth={auth} onLogin={setAuth} />
              </Route>

              <Route path='/my-dashboard'>
                <Dashboard
                  auth={auth}
                  handleUnauthorized={() => setAuth(null)}
                />
              </Route>

              <Route path='/create-request'>
                <CreateRequest auth={auth} />
              </Route>

              <Route exact path='/'>
                <LandingPage />
              </Route>
            </Switch>

            <div ref={node}>
              <Burger open={open} setOpen={setOpen} />
              <Menu auth={auth} open={open} setOpen={setOpen} />
            </div>
          </div>
        </Router>
      </>
    </ThemeProvider>
  )
}

export default App
