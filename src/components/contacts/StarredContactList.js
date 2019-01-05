
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
                return (
                    <li className="contact-item" key={contact.id}>
                        <i className="material-icons starred-icon">star</i>
                        <ContactSummary contact={contact} />
                    </li>
                )
            })} 
        </ul>
    )
}

export default StarredContactList



