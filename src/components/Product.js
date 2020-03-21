import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './Context.js';
import PropTypes from 'prop-types';

class Product extends React.Component {
	render() {
		const {product:{id,title,price,img,inCart}} = this.props;
		// console.log(img);
		return (
				<ProductConsumer>
					{(value)=>{
						// console.log(value.handleDetail);
						return (
							<div className="col-sm-6 col-md-4 col-lg-3 mx-auto">
						<div className="card my-3 border-warning">
							<div className="card-body" 
							onClick={()=>{value.handleDetail(id)}}>
							<Link to="/details">
								<img src={img} alt="phone" 
								className="productImg img-fluid img-center text-center"/>
								<p className="lead text-dark text-center">{title}</p>
								<h5 className="text-dark text-center">Ksh{price}</h5>
							</Link>
							<button className="cartBtn btn btn-warning" 
							disabled={inCart===false ? false:true}
							onClick = {()=>{
								value.addToCart(id);
								value.openModal(id);
							}}
							data-toggle="modal" data-target="#myModal"
							>
								{inCart===false?(<i className="fa fa-cart-plus"></i>)
								:(<p className="mb-0 "disabled>In cart</p>)}
							</button>
							</div>
						</div>
					</div>
						)
					}}
				</ProductConsumer>		
		)
	}
}

Product.propTypes = {
	product : PropTypes.shape({
		// shape allows us to define in detail the inner structure of our obj
		// it takes an obj and validates the types inside the obj
		id:PropTypes.number,
		img : PropTypes.string,
		title:PropTypes.string,
		price:PropTypes.number,
		company:PropTypes.string,
		inCart:PropTypes.bool,
		count:PropTypes.number,
		total:PropTypes.number
	}).isRequired
}

export default Product;