import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar, Main } from './components'
import {HomePage, HelloPage} from './pages'

export default class Root extends React.Component {
  render() {
    return (
      <Main>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/hello" component={HelloPage} />
          </Switch>
        </BrowserRouter>
      </Main>
    )
  }
}
