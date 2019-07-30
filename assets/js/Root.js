import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './pages'

export default class Root extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}
