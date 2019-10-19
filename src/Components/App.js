import React from "react";
import { changeUniqueId } from '../Actions/productAction'
import { connect } from 'react-redux';
// import {uniqueId} from '../Events/Events'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';



class App extends React.Component {
    
    render(){
    return (
      <h1> Search Bar Here </h1>
    )
  }
}

const mapStateToProps = state => ({
  currentProductId: state.uniqueId.id
})
// window.uniqueId = props.product_id
// window.dispatchEvent(uniqueId);
const mapDispatchToProps = (dispatch) => ({
  changeUniqueId: (inputId) => dispatch(changeUniqueId(inputId))
})

  export default connect(mapStateToProps, mapDispatchToProps)(App);