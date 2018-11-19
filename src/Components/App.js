import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'
import { getLocalStorage, changeContactIndex } from '../actions'
import ListContactView from './ListContactView/ListContactView'
import EditComponentsView from './EditContactView/EditContactView'
import { DragDropContext } from 'react-beautiful-dnd'

class App extends Component {

  componentWillUpdate(){
    if(this.props.contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts))
    }
  }

  componentDidMount() {
    this.props.getLocalStorage()
  }

  onDragEnd = result => {
  const {destination, source} = result;
  if (!destination) {
    return;
  }
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }
  this.props.changeContactIndex(destination.index, source.index)
  localStorage.setItem('contacts', JSON.stringify(this.props.contacts))
};
  render() {
    return (
      <div className="app">
      { this.props.editComponent ? 
          <EditComponentsView/>
        :  
        <DragDropContext onDragEnd={this.onDragEnd}>
          <ListContactView key={1} column={1}/>
        </DragDropContext>
      }  
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editComponent: state.app.editComponent,
    contacts: state.app.contacts
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getLocalStorage: () => dispatch(getLocalStorage()),
    changeContactIndex: (newKey, oldKey) => dispatch(changeContactIndex(newKey, oldKey))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);