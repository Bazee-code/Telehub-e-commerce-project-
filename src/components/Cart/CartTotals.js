import React from 'react';
import {Link} from 'react-router-dom';

class CartTotals extends React.Component {
	render() {
		const {value:{cartSubTotal,cartTax,cartTotal,clearCart}} = this.props;
		return (
			<React.Fragment>
				<div className="row text-center">
					<div className="col-lg-2"></div>
					<div className="col-lg-2"></div>
					<div className="col-lg-2"></div>
					<div className="col-lg-2"></div>
					<div className="col-lg-2"></div>
					<div className="col-lg-2">
							<Link to="/">
								<button className="btn btn-danger" 
								onClick={()=>clearCart()}>CLEAR CART</button>
							</Link>
		
							<p className="lead">SubTotal :Ksh{cartSubTotal}</p>
							<p className="lead">cartTax :Ksh{cartTax}</p>
							<p className="lead">cartTotal :Ksh{cartTotal}</p>
						</div>
					</div>		
			</React.Fragment>
		)
	}
}

export default CartTotals;