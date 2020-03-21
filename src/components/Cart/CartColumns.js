import React from 'react';

class CartColumns extends React.Component {
	render() {
		return (
			<div className="container-fluid text-center d-none d-lg-block">
				<div className="row text-center">
					<div className="col-lg-2">PRODUCTS</div>
					<div className="col-lg-2">NAME OF PRODUCT</div>
					<div className="col-lg-2">PRICE</div>
					<div className="col-lg-2">QUANTITY</div>
					<div className="col-lg-2">REMOVE</div>
					<div className="col-lg-2">TOTAL</div>
				</div>
			 </div>
		)
	}

}

export default CartColumns;