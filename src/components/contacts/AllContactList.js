
import React from 'react'
import ContactSummary from './ContactSummary'

const AllContactList = ({contactList}) => {
    //get all starr
    const allContact = contactList.map( contact => contact )

    return (
        <ul>            
            { allContact && allContact.map((contact,i) => {
                if(i == 0){
                    return (
                        <li className="contact-item">
                            <label className="material-icons sort-label">A</label>
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

export default AllContactList




