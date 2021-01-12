import 'tachyons'
import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateRequest from './components/CreateRequest'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import Burger from './components/Burger'
import Menu from './components/Menu'
import UpdateRequest from './components/UpdateRequest'
import Messaging from './components/Messaging'
import { useLocalStorage, useOnClickOutside } from './hooks'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const App = () => {
  const [auth, setAuth] = useLocalStorage('auth_token', null)
  const [open, setOpen] = useState(false)

  const node = useRef()

  useOnClickOutside(node, () => setOpen(false))

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing()
    },
    title: {
      flexGrow: 1,
      textAlign: 'center'
    }
  }))

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h5' className={classes.title}>
              Virtual Foster Closet
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Router>
        <div>
          <Switch>
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
              <Dashboard auth={auth} handleUnauthorized={() => setAuth(null)} />
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

          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu auth={auth} open={open} setOpen={setOpen} />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
