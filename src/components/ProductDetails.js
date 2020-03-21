import React from 'react';
import {ProductConsumer} from './Context.js';
import {Link} from 'react-router-dom';

class ProductDetails extends React.Component {
	render() {
		return (
			<ProductConsumer>
				{(value)=>{
					// console.log(value.detailProduct);
					const {id,title,img,price,company,
						info,inCart} = value.detailProduct;
					return (
						<div className="container mt-5">
							<h3 className="text-center text-secondary">{title}</h3>
							<div className="row">
								<div className="col-md-6 mx-auto mt-3">
									<img src={img} className="img-fluid"/>
								</div>
								<div className="col-md-6 mx-auto mt-3">
									<h3>{title}</h3>
									<h4>Made By:{company}</h4>
									<h4>Price :Ksh{price}</h4>
									<p>Some Info About Product:</p>
									<p className="text-muted">{info}</p>
									<span>
										<Link to ="/">
											<button className="m-2 btn btn-secondary">
											<i className="fa fa-arrow-left m-2"></i>Go Back</button>
										</Link>
										<Link to="/cart">
										<button className="btn btn-warning m-2"
											data-toggle="modal" data-target="#myModal"
											disabled={inCart===false ? false:true}
											onClick = {()=>{
											value.addToCart(id);
											value.openModal(id);
										}}>
											{inCart===false ?"Add to Cart":"In Cart"}
										</button>
										</Link>
									</span>
								</div>
							</div>	
						</div>
					)
				}}
			</ProductConsumer>
		)
	}
}

export default ProductDetails;