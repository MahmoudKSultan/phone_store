import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import ButtonContainer from "./button";
import { Link } from "react-router-dom";

export default class Model extends Component {
	render() {
		return (
			<ProductConsumer>
				{(value) => {
					const { modelOpen, closeModel, modelProduct } = value;
					const { img, title, price } = modelProduct;

					return !modelOpen ? null : (
						<ModelContainer onClick={closeModel}>
							<div className="container">
								<div className="row">
									<div
										id="model"
										className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
										onClick={(event) => event.stopPropagation()}
									>
										<h5>Item is added ti the cart</h5>
										<img className="img-fluid" src={img} alt="img" />
										<h5>{title}</h5>
										<h5 className="text-muted">price : ${price}</h5>
										<Link to="/">
											<ButtonContainer onClick={closeModel}>
												Continue shopping
											</ButtonContainer>
										</Link>

										<Link to="/cart">
											<ButtonContainer cart onClick={closeModel}>
												Go to Cart
											</ButtonContainer>
										</Link>
									</div>
								</div>
							</div>
						</ModelContainer>
					);
				}}
			</ProductConsumer>
		);
	}
}

const ModelContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	#model {
		background: var(--mainWhite);
	}
`;
