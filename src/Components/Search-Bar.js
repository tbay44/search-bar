import React from 'react'
import Option from './Search-Options'
import {currentSearchString, resetSelection} from '../Actions/searchActions'
import {connect} from 'react-redux'

// var options = [{id: 1, name:'this'},{id: 2, name:'this'}, {id: 3, name:'this'}]
const SearchBar = (props) => {
    return ( 
        <div className="search-container">
            <input 
            className="Search-Bar"
            id="Search-Bar-Id"
            type="search" 
            placeholder="Search Products Here"
            onChange={
            () => { 
                let currentStringVal = document.getElementById("Search-Bar-Id").value
                if(currentStringVal !== '' ){
                    props.currentSearchString(currentStringVal) 
                }else if(currentStringVal === ''){
                    props.resetSelection()
                }
            }
            }></input>
            <button id="Search-Submit"> Search </button>
            { props.options.length === 0 ? "" :
                <div className="search-autofill-options">
                 {props.options.map(option => { return <Option key={option.id} id={option.id} name={option.product_name}/>})}
                </div>
            }    
        </div>
    )
}

const mapStateToProps = state => ({
    options: state.options.products
})


export default connect(mapStateToProps, {currentSearchString, resetSelection})(SearchBar)
// export default SearchBar;