import React from 'react';
// local
import {ProductConsumer} from './../Context.js';
import CartColumns from './CartColumns.js';
import EmptyCart from './EmptyCart.js';
import CartList from './CartList.js';
import CartTotals from './CartTotals.js';

class Cart extends React.Component {
	render() {
		return (
			<div className="container mx-auto">
			<ProductConsumer>
				{(value)=>{
					const {cart} = value;
					// check if cart is empty!
					if(cart.length > 0){
						return (
							<React.Fragment>
								<h3 className="text-center py-5 ">Your Cart</h3>
								<CartColumns />
								<CartList value={value}/>
								<CartTotals value={value}/>
							</React.Fragment>
							)
					}
					else{
						return (
							<EmptyCart />
						)
					}
				}}
			</ProductConsumer>
			</div>
		)
	}
}

export default Cart;