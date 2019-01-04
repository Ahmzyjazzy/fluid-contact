
import React from 'react'
import { Link } from 'react-router-dom'
import ContactSummary from './ContactSummary'

const StarredContactList = ({starredContact}) => {

    if( starredContact.length == 0 ) {
        return (
            <ul>   
                <li className="contact-item">
                    <p>No starred contact</p>
                </li>
            </ul>
        )
    }
    
    return (
        <ul>            
            { starredContact && starredContact.map((contact,i) => {
                if(i == 0){
                    return (
                        <li className="contact-item">
                            <i className="material-icons starred-icon">star</i>
                            <div className="content">
                                <img src="https://robohash.org/ahmzyjazzy.png?set=set3" alt="profile image" className="nav-child profile-avatar" />
                                <ContactSummary contact={contact} />
                            </div>
                        </li>
                    )
                }
                return (
                    <li className="contact-item" key={contact.id}>
                        <i className="material-icons starred-icon"></i>
                        <ContactSummary contact={contact} />
                    </li>
                )
            })} 
        </ul>
    )
}

export default StarredContactList



