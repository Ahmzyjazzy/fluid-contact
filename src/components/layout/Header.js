import React from 'react'
import { Link } from 'react-router-dom'
import SearchContainer from '../search/SearchContainer'

const Header = (props) => {
  return (
    <header className="nav-wrapper">
        <nav>
            <div className="title-cont nav-child">
                <span className="menu-toggler"><i className="material-icons">menu</i></span>
                <h2>
                  <Link to="/">Fluid Contacts</Link>
                </h2>
            </div>            
            <SearchContainer />
            <div className="avatar-container nav-child">
                <img src="https://robohash.org/ahmzyjazzy.png?set=set3" alt="profile image" className="nav-child profile-avatar" />
            </div>
        </nav>
    </header>
  )
}

export default Header
