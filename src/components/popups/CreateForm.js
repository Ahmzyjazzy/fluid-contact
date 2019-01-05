import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { addContact } from '../../store/actions/contactActions'

class CreateForm extends Component {

    state = {}

    closeCreateModal = ()=> {
        this.props.closeModal()
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e)=> {
        let post_data = this.state;
        post_data['id'] = new Date().getTime();
        post_data['isfavorite'] = false;
        this.props.addContact(post_data);
        this.setState({
            firstname:"",
            lastname:"",
            jobtitle:"",
            email:"",phone:"",
            note:"",
            id:null,
            isfavorite:false
        });
        document.getElementById("create_contact_form").reset();
        console.log('this state', this.state);
    }
  
    render() {
        const { isCreateForm } = this.props;

        return (      
            <div className={`modal-dialog ${isCreateForm ? 'open': ''}`} id="modal_create">
                <div className="modal" >
                    <header className="modal-header">
                        <h5>Create contact</h5>
                    </header>
                    <div className="modal-content">
                        <form onSubmit={ this.handleSubmit } id="create_contact_form">
                            <div className="form-inline">
                                <span className="grey-text"><i className="material-icons">account_circle</i></span>
                                <div className="form-group w-150">                            
                                    <input type="text" className="form-control" id="firstname" onChange={this.handleChange} required={true} />
                                    <label htmlFor="first-name" className="floating-label">First name</label>
                                </div>
                                <div className="form-group w-150">
                                    <input type="text" className="form-control" id="lastname" onChange={this.handleChange} required={true} />
                                    <label htmlFor="last-name" className="floating-label">Last name</label>
                                </div>
                            </div>
                            <div className="form-inline">
                                <span className="grey-text"><i className="material-icons">business</i></span>
                                <div className="form-group w-150">
                                    <input type="text" className="form-control" id="company" onChange={this.handleChange} />
                                    <label htmlFor="company" className="floating-label">Company</label>
                                </div>
                                <div className="form-group w-150">
                                    <input type="text" className="form-control" id="jobtitle" onChange={this.handleChange} />
                                    <label htmlFor="job-title" className="floating-label">Job title</label>
                                </div>
                            </div>
                            <div className="form-inline">
                                <span className="grey-text"><i className="material-icons">mail</i></span>
                                <div className="form-group w-470">
                                    <input type="email" className="form-control" id="email" onChange={this.handleChange} required={true} />
                                    <label htmlFor="email" className="floating-label">Email</label>
                                </div>
                            </div>
                            <div className="form-inline">
                                <span className="grey-text"><i className="material-icons">phone</i></span>
                                <div className="form-group w-470">
                                    <input type="tel" className="form-control" id="phone" onChange={this.handleChange} required={true} />
                                    <label htmlFor="phone" className="floating-label">Phone</label>
                                </div>
                            </div>
                            <div className="form-inline">
                                <span className="grey-text"><i className="material-icons">assignment</i></span>
                                <div className="form-group w-470">
                                    <input type="text" className="form-control" id="note" onChange={this.handleChange} />
                                    <label htmlFor="note" className="floating-label">Note</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div className="modal-actions">
                            <button className="btn purple-text"  onClick={ this.closeCreateModal }> Cancel </button>
                            <button className="btn grey-text" onClick={ this.handleSubmit }> Save </button>
                        </div>
                    </div>
                </div>
            </div>
        );
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
        addContact: (post_data) => dispatch(addContact(post_data)),
        closeModal: () => dispatch({ type:'CREATE_MODAL', is_visible: false })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm)

