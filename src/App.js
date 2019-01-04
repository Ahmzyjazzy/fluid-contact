import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
//layout component
import Header from './components/layout/Header'
import SideMenu from './components/layout/SideMenu'
// page containers
import Contact from './pages/Contact'
import Settings from './pages/Settings'
import Help from './pages/Help'

class App extends Component {
  
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <main>
            <SideMenu contactList={this.props.contactList} />
            <section className="contact-list">
              <Switch>
                <Route exact path='/'component={Contact} />
                <Route path='/setting' component={Settings} />
                <Route path='/help' component={Help} />
              </Switch>
            </section>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const { contactList } = state.contact;
  return{
      contactList
  }
}

export default connect(mapStateToProps)(App)
