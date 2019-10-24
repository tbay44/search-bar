import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faPinterestSquare } from '@fortawesome/free-brands-svg-icons'
import { changeUniqueId } from '../Actions/productAction';
import { connect } from 'react-redux'


class LowerHeader extends React.Component{


componentDidMount() {
    window.addEventListener("uniqueId", (event) => {
        this.props.changeUniqueId(window.uniqueId);
      }
    )
}

currentCategoryName(){
    for(var i = 0; i < this.props.categories.length; i++){
        if(this.props.categories[i].category_id === this.props.category){
            return this.props.categories[i].category_name
        }
    }
return ""
}

render(){
    return (
        <div className="lower-header-container">
        <p>Back to home page </p>
        <p>Listed in cateogry: </p>
        <div className="lower-header-category-container"> 
            <p>{this.currentCategoryName()} > </p> 
        </div>
        <div className="header-share-container">
            <FontAwesomeIcon className="header-envelope" icon={faEnvelopeSquare} />
            <FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
            <FontAwesomeIcon className="twitter" icon={faTwitterSquare} />
            <FontAwesomeIcon className="pinterest" icon={faPinterestSquare} />
        </div>
        <p id="add-to-watch">Add To Watch List</p>
    </div>
    )
}
}

const mapStateToProps = state => ({
    categories: state.categories.selections,
    category : state.uniqueId.currentCategory
})

export default connect( mapStateToProps, {changeUniqueId} )(LowerHeader);