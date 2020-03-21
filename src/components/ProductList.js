import React from 'react';

// local
// import {storeProducts} from './../data.js'; 
import {ProductConsumer} from './Context.js';
import Product from './Product.js';

class ProductList extends React.Component {
	// constructor(props){
	// 	super(props);

	// 	this.state = {
	// 		products :storeProducts
	// 	};
	// };

	render() {
		// console.log(this.state.products);
		return (
			<React.Fragment>
				<div className="py-5">
				<div className="row">
					<div className="col-md-5"></div>
					<div className="col-md-2">
					<h2 className=" text-center bg-warning">Our Products</h2>
					</div>
					<div className="col-md-5"></div>
				</div>
					
					<div className="row">
					<ProductConsumer>
						{(value)=>{
						 // console.log(value);
						 return value.products.map(product=>{
						 	return <Product product={product} key={product.id}/>;
						 	})
						}
						}
					</ProductConsumer>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default ProductList;