import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import SideMenu from './components/layout/SideMenu'
import Dashboard from './pages/Dashboard'
import Setting from './pages/Setting'
import Help from './pages/Help'

class App extends Component {
  
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Main>
            <SideMenu />
            <Section>
              <Switch>
                <Route exact path='/'component={Dashboard} />
                <Route path='/setting' component={Setting} />
                <Route path='/help' component={Help} />
              </Switch>
            </Section>
          </Main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
