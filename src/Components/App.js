import React from "react";
import Product from '../Components/Product'
import { fetchProducts } from '../Actions/productActions';
import { connect } from 'react-redux';



class App extends React.Component {
    
    componentDidMount() {
        this.props.fetchProducts()
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
  posts: state.posts.items
})



  export default connect(mapStateToProps, {fetchProducts})(App);