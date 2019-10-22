import React from 'react';
import uniqueId from '../Events/Events'
import { resetSelection} from '../Actions/searchActions';
import {connect} from 'react-redux';

const Option = (props) => {
    return (<div 
        id={'searchBar'+props.id}
        className="search-option"
        onMouseOver={() =>{
            document.getElementById('searchBar'+props.id).classList.add("active")
        }}
        onMouseLeave={() =>{
            document.getElementById('searchBar'+props.id).classList.remove("active")
        }}
        onClick={()=>{
            window.uniqueId = props.id;
            window.dispatchEvent(uniqueId)
            document.getElementById("Search-Bar-Id").value = "";
            props.resetSelection()
        }}
    
    >{props.name}</div>)
}




export default connect(null, {resetSelection})(Option)
