import React, { Component } from "react";
import Product from "./product";
import Title from "./title";
import { ProductConsumer } from "../context";

class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="products" />
					</div>

					<div className="row">
						<ProductConsumer>
							{(value) =>
								value.products.map((product) => (
									<Product product={product} key={product.id} />
								))
							}
						</ProductConsumer>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default ProductList;
