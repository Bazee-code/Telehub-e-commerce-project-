import React from 'react';

class CartItem extends React.Component {
	render() {
		const {item:{id,title,img,price,total,count}} = this.props;
		const {value:{increment,decrement,removeItem}} = this.props;
		return (
			<div className="row mt-2 text-center">
				<div className="col-lg-2">
					<img src={img} className="img-fluid" 
					style={{height:"100px",width:"100px"}} alt="product"/>
				</div>
				<div className="col-lg-2">
					<p className="text-muted">
					<span className="d-lg-none">Product:</span>{title}</p>
				</div>
				<div className="col-lg-2">
					<h5><span className="d-lg-none">Price:</span>Ksh{price}</h5>
				</div>
				<div className="col-lg-2">
					<div className="d-flex justify-content-center">
						<span>
							<button className="btn btn-warning m-1" onClick={()=>decrement(id)}>
							<i className="fa fa-minus"></i></button>
							<button className="btn btn-warning m-1">
							{count}</button>
							<button className="btn btn-warning m-1" onClick={()=>increment(id)}>
							<i className="fa fa-plus"></i></button>
						</span>
					</div>
				</div>
				<div className="col-lg-2">
					<button className="btn btn-warning" onClick={()=>removeItem(id)}>
						<i className="fa fa-trash"></i>
					</button>
				</div>
				<div className="col-lg-2">
					<h5><span className="d-lg-none">Total:</span>Ksh{total}</h5>
				</div>
			</div>
		)
	}
}

export default CartItem;