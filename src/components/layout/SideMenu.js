import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = (props) => {
  return (
    <nav className="sidebar">
        <ul className="list-container">
            <li className="menu-item active"><Link to="/"><i className="material-icons">contacts</i> Contacts (538) </Link></li>
            <li className="divider"></li>
            <li className="menu-item"><Link to="/setting"><i className="material-icons">settings</i> Settings </Link></li>
            <li className="menu-item"><Link to="/help"><i className="material-icons">help</i> Help </Link></li>
        </ul>
    </nav>
  )
}

export default SideMenu
