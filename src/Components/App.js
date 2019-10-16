import React from "react";
import Product from '../Components/Product'
import { fetchProducts, addPersonal } from '../Actions/productActions';
import { incrementButton, decrementButton, initializeButton } from '../Actions/carouselActions';
import { connect } from 'react-redux';



class App extends React.Component {
    
    componentDidMount() {
        this.props.fetchProducts(50)
        this.props.addPersonal(50)
        this.props.initializeButton()
    }

    carouselPage () {
      let carouselProducts = [];
      if(this.props.pageOne === undefined){
        carouselProducts;  
      }else if(this.props.sponserCarouselPageNum === 1){
        carouselProducts = this.props.pageOne
      }else if(this.props.sponserCarouselPageNum === 2){
        carouselProducts = this.props.pageTwo
      }else if(this.props.sponserCarouselPageNum === 3){
        carouselProducts = this.props.pageThree
      }

      return carouselProducts.map(item => {
        return <Product
          key={item.id}
          product_name={item.product_name}
          price={item.price}
          seller={item.seller}
          prime_pic={item.prime_pic}
          />;
    })

    }

    render(){
    return (
        <React.Fragment>
          <h1> The force is with me and my friends.</h1>
          <div className="Carousel-Container">
          <button className="back-bttn" onClick={
            (event) => this.props.decrementButton(this.props.sponserCarouselPageNum)
          }>Back</button> 
          <div className="Carousel">
          {this.carouselPage()}
        </div>
        <button className="forward-bttn" onClick={
          (event) => this.props.incrementButton(this.props.sponserCarouselPageNum)
        }>Forward</button>
        </div>
        </React.Fragment>
      
    )
  }
}



const mapStateToProps = state => ({
  pageOne: state.posts.pageOne,
  pageTwo: state.posts.pageTwo,
  pageThree: state.posts.pageThree,
  personalCarousel: state.personalCarousel.items,
  sponserCarouselPageNum: state.sponserCarouselPageNum.page
})


const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (inputId) => dispatch(fetchProducts(inputId)), 
  addPersonal: (inputId) => dispatch(addPersonal(inputId)),
  incrementButton: (inputId) => dispatch(incrementButton(inputId)),
  decrementButton: (inputId) => dispatch(decrementButton(inputId)),
  initializeButton: () => dispatch(initializeButton())
})

  export default connect(mapStateToProps, mapDispatchToProps)(App);