import React from 'react'
import { connect } from 'react-redux'
import { starContact, unstarContact } from '../../store/actions/contactActions'

const ContactSummary = ({ contact, starContact, unstarContact }) => {

    const handleContactStar = (e)=> {
        const id = e.target.dataset.id;this.props;
        console.log('clicked', contact);
        contact.isfavorite ? unstarContact(contact) : starContact(contact);
    } 
    
    const { firstname, lastname, email, phone, id, isfavorite } = contact;

    return (
        <div className="content">
            <img src={`https://robohash.org/${id}.png?set=set3`} alt="profile image" className="nav-child profile-avatar" />
            <span className="contact-name">{`${firstname} ${lastname}`}</span>
            <span className="contact-email">{ email }</span>
            <span className="contact-phone">{ phone }</span>
            <div className="actions">
                { isfavorite ? 
                    <i className="material-icons" style={{color:'red'}} data-id={id} onClick={ (e)=> handleContactStar(e) }>star_outline</i> :
                    <i className="material-icons" data-id={id} onClick={ (e)=> handleContactStar(e) }>star_outline</i>
                }
                <i className="material-icons" data-id={id}>edit</i>
                <i className="material-icons" data-id={id}>more_vert</i>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { contactList, isCreateForm } = state.contact;
    return{
        contactList,
        isCreateForm
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        starContact: (obj) => dispatch(starContact(obj)),
        unstarContact: (obj) => dispatch(unstarContact(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactSummary)