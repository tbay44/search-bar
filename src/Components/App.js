import React from "react";
import SearchBar from './Search-Bar'
import TopHeader from './TopHeader'
import CategoryOption from './Category-Options';
import { createCategorySelections, changeCurrentSelection } from '../Actions/categoryActions';
import { connect } from 'react-redux'

class App extends React.Component {    
    componentDidMount(){
        this.props.createCategorySelections()
    }
    
    render() {
    return (
            <React.Fragment>
                <TopHeader />
                <div className="header-container">
                    <img id="tbay-img" src="https://tbay44.s3-us-west-1.amazonaws.com/tbay.jpeg"/>
                    <select className="header-category-select" onChange={
                        (event) => 
                        this.props.changeCurrentSelection(
                            {
                                category_id: 0,
                                category_name: event.target.value
                            },
                            this.props.selections
                        )
                    }>
                        <option value="Shop by Category">Shop by Category</option>
                        {this.props.selections.map(category => {
                            return <CategoryOption key={category.category_id} value={category.category_name} />
                        })} 
                    </select>
                    <SearchBar />
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    selections: state.categories.selections
})

export default connect( mapStateToProps, {createCategorySelections, changeCurrentSelection} )(App);