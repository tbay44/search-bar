import React from 'react';


const Product = (props) => {
    return (
    <div  className="Carousel-Product">
        <img src={props.prime_pic}  />
        <p>Product Name: {props.product_name}</p>
        <p>Price: {props.price}</p>
    </div>
    )
}

export default Product;