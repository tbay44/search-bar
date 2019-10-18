import React from "react";
import Product from '../Components/Product'
import { fetchProducts } from '../Actions/productsActions';
import { incrementButton, decrementButton, initializeButton } from '../Actions/carouselActions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';



class App extends React.Component {
    
    componentDidMount() {

        window.uniqueId = 0
        this.props.fetchProducts(window.uniqueId)
        this.props.initializeButton()

        window.addEventListener("uniqueId", (event) => {
          this.props.fetchProducts(window.uniqueId)
          this.props.initializeButton()
        }
        )
      }
    

    formatPrice(string) {
      let formatString = string.split('');
      formatString.shift();
      let decimal = formatString.splice(formatString.length-3,formatString.length)
      formatString.reverse()
      for (var i = 0; i < formatString.length; i++){
        if(i % 4 === 0){
          formatString.splice(i, 0, ',')
        }
      }
      formatString.shift();
      formatString.push('$');
      decimal.reverse()
      formatString = decimal.concat(formatString)
      return formatString.reverse().join('');
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
          product_id={item.id}
          product_name={item.product_name}
          price={this.formatPrice(item.price)}
          seller={item.seller}
          prime_pic={item.prime_pic}
          shipping={item.shipping}
          />;
    })

    }

    render(){
    return (
        <React.Fragment>
          <h5 className="Carousel-Page"> Related sponsored items <span>{this.props.sponserCarouselPageNum}/3</span></h5>
        <div className="Carousel-Container">
            <button className="back-bttn" onClick={
              (event) => this.props.decrementButton(this.props.sponserCarouselPageNum)
           }><FontAwesomeIcon icon={faChevronLeft} className="button-chevron" ></FontAwesomeIcon></button> 
            <div className="Carousel">
              {this.carouselPage()}
            </div>
            <button className="forward-bttn" onClick={
              (event) => this.props.incrementButton(this.props.sponserCarouselPageNum)
            }><FontAwesomeIcon icon={faChevronRight} className="button-chevron" ></FontAwesomeIcon></button>
        </div>
        </React.Fragment>
      
    )
  }
}



const mapStateToProps = state => ({
  pageOne: state.posts.pageOne,
  pageTwo: state.posts.pageTwo,
  pageThree: state.posts.pageThree,
  sponserCarouselPageNum: state.sponserCarouselPageNum.page,
  currentProductId: state.uniqueId.id
})


const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (inputId) => dispatch(fetchProducts(inputId)), 
  incrementButton: (inputId) => dispatch(incrementButton(inputId)),
  decrementButton: (inputId) => dispatch(decrementButton(inputId)),
  initializeButton: () => dispatch(initializeButton())
})

  export default connect(mapStateToProps, mapDispatchToProps)(App);