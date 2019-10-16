import React from "react";
import Product from '../Components/Product'
import { fetchProducts, addPersonal } from '../Actions/productActions';
import { connect } from 'react-redux';



class App extends React.Component {
    
    componentDidMount() {
        this.props.fetchProducts(10)
        this.props.addPersonal(10)
    }
    render(){
    return (
      
        <div>
          <h1> I am one with the force and the force is one with me.</h1>
          {this.props.posts.map(item => {
            return <Product
              key={item.id}
              product_name={item.product_name}
              price={item.price}
              seller={item.seller}
              prime_pic={item.prime_pic}
              />
          })}
        </div>
      
    )
  }
}



const mapStateToProps = state => ({
  posts: state.posts.items,
  personalCarousel: state.posts.item
})


const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (inputId) => dispatch(fetchProducts(inputId)), 
  addPersonal: (inputId) => dispatch(addPersonal(inputId))
})

  export default connect(mapStateToProps, mapDispatchToProps)(App);