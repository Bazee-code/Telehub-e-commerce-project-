import React from 'react';
import {ProductConsumer} from './Context.js';
import {Link} from 'react-router-dom';

class Modal extends React.Component {
	render() {
		return (
			<ProductConsumer>
				{(value)=>{
					const {modalOpen,closeModal} = value;
					const {img,title,price} = value.modalProduct;

					if(modalOpen){ //modalOpen ==false
						return null; //nothing is shown
					}
					else{ //if modal is open
						return(
						<div className="modal fade" id="myModal">
							<div className="modal-dialog">
								<div className="modal-content text-center">
									<div className="modal-header">
										<h3 className="modal-title">Item added to cart</h3>
										<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					          	<span aria-hidden="true">&times;</span>
					        	</button>
									</div>
									<div className="modal-body">
										<img src={img} className="img-fluid" alt="product"/>
										<h4 className="text-muted">Price:Ksh{price}</h4>
										<Link to ="/cart">
											<button className="btn btn-warning" type="button"
											onClick={()=>closeModal()} >Go To Cart</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
						);
					}
				}}
			</ProductConsumer>
		);
	}
}

export default Modal;