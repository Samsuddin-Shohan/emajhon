import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';




const Product = (props) => {
    const {img, name, price, seller, shipping, stock} = props.product;
    // console.log(props);
    const element = <FontAwesomeIcon icon={faShoppingCart} />;

    return (
        <div className='product'>
           <div>
            <img src={img} alt="" />       
           </div> 
           <div style={{marginLeft: '1rem'}}>
             <h4>{name}</h4>
             <p><small>by: {seller}</small></p>
             <p>${price}</p>
             <p>Only {stock} left in stock - order soon</p>   
             <button 
             onClick={() => {props.handleCart(props.product)}}
             className='btn btn-warning'>{element } Add to Cart</button>
           </div>
        </div>
    );
};

export default Product;