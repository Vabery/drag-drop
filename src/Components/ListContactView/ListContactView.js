import React, { Component } from 'react'
import ContactComponent from './ContactComponent'
import { connect } from 'react-redux'
import { handleEditComponent } from '../../actions/index'
import { Droppable } from 'react-beautiful-dnd'
import './style.css'

export class ListContactView extends Component {

  renderContactContainer = () => {
    const container = this.props.contacts.map((item, key) => {
      return (
        <ContactComponent contactKey={key} name={item.firstName} phone={item.phone} email={item.email}/>
      )
    })
    return container
  }

  render() {
    return (
      <div className='listContact'>
      <Droppable direction={"horizontal"} droppableId={this.props.column}>
        {(provided) => (
          <div className="listContact__wrapper"
                ref={provided.innerRef} 
                {...provided.droppableProps}>
            {this.renderContactContainer()}
            {provided.placeholder}
          </div>
        )}  
      </Droppable>
        <button onClick={() => this.props.handleEditComponent()} className='listContact__button button'>Add Contact</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.app.contacts
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleEditComponent:() => dispatch(handleEditComponent())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContactView);
