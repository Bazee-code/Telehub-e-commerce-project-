import React from 'react';

// local
import CartItem from './CartItem.js';

class CartList extends React.Component {
	render() {
		const {value} = this.props;
		const {value:{cart}} = this.props;
		console.log(cart);
		return (
			<div className="container-fluid ">
				{cart.map(item=>(
					<CartItem item ={item} value={value} key={item.id}
					/>))}
			</div>
		)
	}
}

export default CartList;