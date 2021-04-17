import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import Title from "../title";
import CartColumns from "./cartColumns";
import CartList from "./cartList";
import CartTotal from "./cartTotal";

class Cart extends Component {
	render() {
		return (
			<div className="cart">
				<ProductConsumer>
					{(value) => {
						const { cart } = value;
						return cart.length === 0 ? (
							<h1>Cart is empty</h1>
						) : (
							<section>
								<Title title="Cart" name="Your" />
								<CartColumns />
								<CartList value={value} />
								<CartTotal value={value} />
							</section>
						);
					}}
				</ProductConsumer>
			</div>
		);
	}
}

export default Cart;
