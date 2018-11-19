import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleEditComponent, getEditContact } from '../../actions'
import {Draggable} from 'react-beautiful-dnd'
import './style.css'

export class ContactComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      contactKey: props.contactKey
    }
  }
  render() {
    return (
      <Draggable 
        draggableId={this.props.contactKey+1} 
        index={this.props.contactKey}
      >
        {provided => (
          <div onClick={() => {this.props.handleEditComponent(); this.props.getEditContact(this.state.contactKey)}} 
                className='contactComponent'
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}>
            <h3 className='contactComponent__title'>{this.props.name}</h3>
            <h3 className='contactComponent__subTitle'>{this.props.phone}</h3>
            <h3 className='contactComponent__subTitle'>{this.props.email}</h3>
          </div>
        )}  
      </Draggable>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleEditComponent:() => dispatch(handleEditComponent()),
    getEditContact: (contactKey) => dispatch(getEditContact(contactKey))
  };
};
export default connect(null, mapDispatchToProps)(ContactComponent);