import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    console.log(props.product);
    let total = 0;
    for(const product of props.cart){
        total+=product.price;
    }
    let tax = total*.15;
    const {price,shipping} = props.product;


    return (
        <div className='cart-section mt-4'>
               <div className='text-center'>
                    <h4>Order Summary </h4>
                    <p>Items Ordered: {props.cart.length}</p>
               </div>
               <div className="row">
                    <div className="col">
                        <p>Items:</p>
                        <p>Shipping & Handling:</p>
                        <p>Total Before Tax:</p>
                        <p>Estimated Tax:</p>
                        <p className='text-danger fw-bolder'>Orders Total:</p>
                    </div>
                    <div className="col">
                        <p>{price || 0.00}</p>
                        <p>{shipping}</p>
                        <p>{total.toFixed(2)}</p>
                        <p>{tax.toFixed(2)}</p>
                        <p className='text-danger fw-bolder'>{(total+tax).toFixed(2) ||0.00}</p>
                    </div>
               </div>
            </div>
    );
};

export default Cart;