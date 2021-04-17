import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CartTotal extends Component {
	render() {
		const {
			cartSubTotal,
			cartTax,
			cartTotal,
			cart,
			handleClearCart,
		} = this.props.value;
		const emptyCart = cart.length === 0 ? true : false;
		return (
			<React.Fragment>
				{!emptyCart && (
					<div className="container">
						<div className="row">
							<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
								<Link to="/">
									<button
										className="btn btn-outline-danger text-uppercase mb-3 px-5"
										type="button"
										onClick={() => {
											handleClearCart();
										}}
									>
										clear cart
									</button>
								</Link>
								<h5>
									<span className="text-title"> subtotal :</span>{" "}
									<strong>$ {cartSubTotal} </strong>
								</h5>
								<h5>
									<span className="text-title"> tax :</span>{" "}
									<strong>$ {cartTax} </strong>
								</h5>
								<h5>
									<span className="text-title"> total :</span>{" "}
									<strong>$ {cartTotal} </strong>
								</h5>
							</div>
						</div>
					</div>
				)}
			</React.Fragment>
		);
	}
}
