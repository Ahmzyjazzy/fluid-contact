import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//layout component
import Header from './components/layout/Header'
import SideMenu from './components/layout/SideMenu'
// page containers
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
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
                <Route path='/setting' component={Settings} />
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
