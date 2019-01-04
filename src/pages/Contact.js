import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import StarredContactList from '../components/contacts/StarredContactList'
import AllContactList from '../components/contacts/AllContactList'

class Contact extends Component {

  render() {
    const { contactList } = this.props;

    //get all starr
    const starredContact = contactList.filter( contact => contact.isFavorite )

    return (
        <Fragment>
            <div className="star_outlinered-contacts contacts-container">
                <p className="group-title">Starrered contacts <span className="counts">({ starredContact.length })</span></p>
                <StarredContactList starredContact={starredContact} />
            </div>
            <div className="other-contacts contacts-container">
                <p className="group-title">Contacts <span className="counts">({ contactList.length })</span></p>
                <AllContactList contactList={contactList} />
            </div>
            <button className="btn fab bg-pink btn-fixed-btm">
                <i className="material-icons">add</i>
            </button>
        </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
    const { contactList } = state.contact;
    return{
        contactList
    }
}

export default connect(mapStateToProps)(Contact)
  