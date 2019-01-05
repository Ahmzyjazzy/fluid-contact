import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import StarredContactList from '../components/contacts/StarredContactList'
import AllContactList from '../components/contacts/AllContactList'
import CreateForm from '../components/popups/CreateForm'

class Contact extends Component {

    displayCreateModal = ()=> {
        this.props.showModal()
    }

    render() {
        const { contactList, isCreateForm } = this.props;

        //get all starr
        const starredContact = contactList.filter( contact => contact.isfavorite )

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
                <button className="btn fab bg-pink btn-fixed-btm" onClick={ this.displayCreateModal }>
                    <i className="material-icons">add</i>
                </button>
                {/* create contact modal */}
                <CreateForm visible={isCreateForm} />
            </Fragment>
        )
    }
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
        showModal: () => dispatch({ type:'CREATE_MODAL', is_visible: true })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
  