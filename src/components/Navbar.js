import React from 'react';
import {Link} from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark py-3 bg-dark">
			
				<Link to="/" className="ml-3 navbar-brand ">
				<i className="fa fa-mobile"></i>TeleHub</Link>

				<button className="navbar-toggler" data-toggle="collapse"
				data-target="#navBarNav">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navBarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link active">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/details" className="nav-link">Products</Link>
						</li>
						<li className="nav-item">
							<Link to="/signup" className="nav-link">Sign up</Link>
						</li>
						<li className="nav-item">
							<Link to="/cart" className="nav-link"><i className="fa fa-shopping-cart"></i>Cart</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Navbar;