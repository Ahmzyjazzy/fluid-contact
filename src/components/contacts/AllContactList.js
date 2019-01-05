
import React from 'react'
import ContactSummary from './ContactSummary'

const AllContactList = ({contactList}) => {
    
    const allContact = contactList.map( contact => contact )

    console.log('all contact', allContact);

    if( allContact.length == 0 ) {
        return (
            <ul>   
                <li className="contact-item">
                    <p>Contact list is empty</p>
                </li>
            </ul>
        )
    }

    return (
        <ul>            
            { allContact && allContact.map((contact,i) => {
                return (
                    <li className="contact-item" key={contact.id}>
                        <label className="material-icons sort-label">{ contact.firstname.charAt(0).toUpperCase() }</label>
                        <ContactSummary contact={contact} />
                    </li>
                )
            })} 
        </ul>
    )
}

export default AllContactList




