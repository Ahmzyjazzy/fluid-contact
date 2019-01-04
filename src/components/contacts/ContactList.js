
import React from 'react'
import { Link } from 'react-router-dom'
import SearchContainer from '../search/SearchContainer'

const ContactList = (props) => {
  return (
    <li className="contact-item">
        <i className="material-icons starred-icon">star</i>
        <div className="content">
            <img src="https://robohash.org/ahmzyjazzy.png?set=set3" alt="profile image" className="nav-child profile-avatar" />
            <span className="contact-name">Ahmed Olanrewaju</span>
            <span className="contact-email">justsample@mail.com</span>
            <span className="contact-phone">+2348093570289</span>
            <div className="actions">
                <i className="material-icons">star_outline</i>
                <i className="material-icons">edit</i>
                <i className="material-icons">more_vert</i>
            </div>
        </div>
    </li>
  )
}

export default ContactList



