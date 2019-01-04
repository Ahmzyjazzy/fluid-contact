import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import StarredContactList from '../components/contacts/StarredContactList'
import AllContactList from '../components/contacts/AllContactList'

class Contact extends Component {

  render() {
    const { contactList } = this.props;

    return (
        <Fragment>
            <div class="star_outlinered-contacts contacts-container">
                <p class="group-title">Starrered contacts <span class="counts">(4)</span></p>
                <StarredContactList />
            </div>
            <div class="other-contacts contacts-container">
                <p class="group-title">Contacts <span class="counts">(5)</span></p>
                <AllContactList />
            </div>
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
  