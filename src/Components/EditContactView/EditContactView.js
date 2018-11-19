import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewContact, handleEditComponent } from '../../actions'
import './style.css'

export class EditContactView extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: this.props.editContact.firstName,
      lastName: this.props.editContact.lastName,
      phone: this.props.editContact.phone,
      email: this.props.editContact.email,
      dateOfBirth: this.props.editContact.dateOfBirth
    }
  }
  handleChange(e, type) {
    this.setState({
      [type]: e.target.value,
    })
  }

  changeContact = () => {
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email,
      dateOfBirth: this.state.dateOfBirth,
    }
    if(data.firstName && data.lastName && data.phone && data.email && data.dateOfBirth) {
      this.props.addNewContact(data, this.props.editComponentKey)
      this.props.handleEditComponent()
    }
    else {
      alert('Заповніть будь ласка всі поля')
    }
  }

  render() {
    const buttonName = (this.props.editComponentKey >= 0) ? 'Edit Contact' : 'Add Contact'
    return (
      <div className='editView'>
        <div className="editView__wrapper">
          <div className="editView__input-container">
            <h3 className="input-container__title">First Name</h3>
            <input 
              value={this.state.firstName}
              onChange={(e) => this.handleChange(e, 'firstName')}
              type="text" 
              className="input-container__input"/>
          </div>
          <div className="editView__input-container">
            <h3 className="input-container__title">Last Name</h3>
            <input 
              value={this.state.lastName}
              onChange={(e) => this.handleChange(e, 'lastName')}
              type="text" 
              className="input-container__input"/>
          </div>
          <div className="editView__input-container">
            <h3 className="input-container__title">Phone</h3>
            <input 
              value={this.state.phone}
              onChange={(e) => this.handleChange(e, 'phone')}
              type="text" 
              className="input-container__input"/>
          </div>
          <div className="editView__input-container">
            <h3 className="input-container__title">Email</h3>
            <input 
              value={this.state.email}
              onChange={(e) => this.handleChange(e, 'email')}
              type="text" 
              className="input-container__input"/>
          </div>
          <div className="editView__input-container">
            <h3 className="input-container__title">Date of Birth</h3>
            <input 
              value={this.state.dateOfBirth}
              onChange={(e) => this.handleChange(e, 'dateOfBirth')}
              type="text" 
              className="input-container__input"/>
          </div>
        </div>
        <button onClick={() => this.changeContact()} className='editView__button button'>{buttonName}</button>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    editContact: state.app.editContact,
    editComponentKey: state.app.editComponentKey
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewContact: (data, key) => dispatch(addNewContact(data, key)),
    handleEditComponent:() => dispatch(handleEditComponent()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditContactView);
