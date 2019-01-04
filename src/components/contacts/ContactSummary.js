import React from 'react'
import moment from 'moment'

const ContactSummary = ({ contact }) => {
    const { firstname, lastname, email, phone, id } = contact;
    return (
        <div className="content">
            <img src={`https://robohash.org/${id}.png?set=set3`} alt="profile image" className="nav-child profile-avatar" />
            <span className="contact-name">{`${firstname} ${lastname}`}</span>
            <span className="contact-email">{ email }</span>
            <span className="contact-phone">{ phone }</span>
            <div className="actions">
                <i className="material-icons">star_outline</i>
                <i className="material-icons">edit</i>
                <i className="material-icons">more_vert</i>
            </div>
        </div>
    )
}

export default ContactSummary