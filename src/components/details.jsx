import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import ButtonContainer from "./button";

class Details extends Component {
	render() {
		return (
			<div>
				<ProductConsumer>
					{(value) => {
						const {
							id,
							title,
							img,
							price,
							company,
							inCart,
							info,
						} = value.detailProduct;

						return (
							<div className="container py-5">
								{/* title */}
								<div className="row">
									<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
										<h1>{title}</h1>
									</div>
								</div>
								{/* end title */}

								{/* product info */}
								<div className="row">
									<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
										<img src={img} alt="" className="img-fluid" />
									</div>

									{/* product text */}
									<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
										<h3>Model : {title}</h3>
										<h5 className="text-title text-uppercase text-muted mt-3 mb-2">
											Made by :
											<span className="text-uppercase"> {company}</span>
										</h5>
										<h5 className="text-blue">
											<strong>
												Price : <span>$</span>
												{price}
											</strong>
										</h5>
										<p className="text-capitalize font-weight-bold mt-5 mb-0">
											Some info about the Product
										</p>
										<p className="text-muted lead">{info}</p>
										<div>
											<Link to="/">
												<ButtonContainer>Back to Products</ButtonContainer>
											</Link>
											<ButtonContainer
												cart
												disabled={inCart}
												onClick={() => {
													value.addToCart(id);
													value.openModel(id);
												}}
											>
												{inCart ? "inCart" : "Add to Cart"}
											</ButtonContainer>
										</div>
									</div>
								</div>
							</div>
						);
					}}

					{/* <Link>
						<ButtonContainer></ButtonContainer>
					</Link> */}
				</ProductConsumer>
			</div>
		);
	}
}
export default Details;
