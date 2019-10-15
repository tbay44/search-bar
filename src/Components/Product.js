import React from 'react';


const Product = (props) => {
    return (
    <React.Fragment>
        <h4>Product Name: {props.product_name}</h4>
        <h5>Price: {props.price}</h5>
        <h5>seller: {props.seller}</h5>
        <img src={props.prime_pic} height="200" width="200" />
    </React.Fragment>
    )
}

export default Product;