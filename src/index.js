import React from "react";
import ReactDOM from "react-dom";
import Axios from 'axios'
import './styles.scss';

class App extends React.Component{
  constructor(props){
    super(props)


    this.state = {
      currentProduct : window.productId || 0,
      allProducts : [{ condition: true,
        id: 96,
        price: '$535932.70',
        prime_pic: 'https://tbay44.s3-us-west-1.amazonaws.com/96-0.jpg',
        rating: 3,
        seller: 'Controladora Vuela Compania de Aviacion, S.A.B. de C.V.',
        shipping: true,
        availability: 408,
        product_name: 'Omelette du fromage French thingie' 
      }] 
    }
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts(){
    Axios.get('/api')
    .then(data => data.data)
    .then(allProducts => {
      this.setState({
        allProducts: allProducts
      })
    })
  }

  render() {
    return (
      <div>
        <h1> I am one with the force and the force is one with me.</h1>
        <h4>Product Name: {this.state.allProducts[this.state.currentProduct].product_name}</h4>
        <h5>Price: {this.state.allProducts[this.state.currentProduct].price}</h5>
        <h5>seller: {this.state.allProducts[this.state.currentProduct].seller}</h5>
        <img src={this.state.allProducts[this.state.currentProduct].prime_pic} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));