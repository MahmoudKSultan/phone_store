import React from "react";
import { Component } from "react";
import { storeProducts, detailProduct } from "./data";
// import Product from "./components/product";

const productContext = React.createContext();
const ProductConsumer = productContext.Consumer;
class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct,
		cart: [],
		modelOpen: false,
		modelProduct: detailProduct,
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0,
	};

	componentDidMount = () => {
		const products = [...storeProducts];
		this.setState({ products });
	};

	addToCart = (id) => {
		const tempProducts = [...this.state.products],
			index = tempProducts.indexOf(this.getProduct(id)),
			product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		product.total = product.price;
		this.setState(
			() => {
				return { products: tempProducts, cart: [...this.state.cart, product] };
			},
			() => this.addTotals()
		);
	};

	addTotals = () => {
		let cartSubTotal = 0;
		this.state.cart.map((item) => (cartSubTotal += item.total));
		let cartTax = cartSubTotal * 0.1;
		cartTax = parseFloat(cartTax.toFixed(2));
		let cartTotal = cartTax + cartSubTotal;
		this.setState({ cartSubTotal, cartTax, cartTotal });
	};

	handleIncrement = (id) => {
		let tempCart = [...this.state.cart];
		const product = this.getProduct(id);
		const index = tempCart.indexOf(product);
		tempCart[index].count += 1;
		tempCart[index].total = tempCart[index].count * tempCart[index].price;
		this.setState(
			() => {
				return { cart: tempCart };
			},
			() => this.addTotals()
		);
	};
	handleDecrement = (id) => {
		let tempCart = [...this.state.cart];
		const product = this.getProduct(id);
		const index = tempCart.indexOf(product);
		tempCart[index].count -= 1;
		tempCart[index].total = tempCart[index].count * tempCart[index].price;
		this.setState(
			() => {
				return { cart: tempCart };
			},
			() => this.addTotals()
		);
	};

	handleDeleteProduct = (id) => {
		const cart = this.state.cart.filter((item) => item.id !== id);
		const tempProducts = [...this.state.products];

		const index = tempProducts.indexOf(this.getProduct(id));
		tempProducts[index].count = 0;
		tempProducts[index].total = 0;
		tempProducts[index].inCart = false;

		this.setState(
			() => {
				return { cart, products: tempProducts };
			},
			() => this.addTotals()
		);
	};

	handleClearCart = () => {
		this.setState(
			() => {
				return { cart: [], products: [...storeProducts] };
			},
			() => this.addTotals()
		);
	};

	// for showing model only
	openModel = (id) => {
		const product = this.getProduct(id);
		this.setState(() => {
			return { modelProduct: product, modelOpen: true };
		});
	};

	// for showing model only
	closeModel = () => {
		this.setState(() => {
			return { modelOpen: false };
		});
	};

	// return a spcific product that own this id
	getProduct = (id) => {
		const product = this.state.products.find((product) => product.id === id);
		return product;
	};

	// put the product with the spcific id as the detail product to be shown
	handleDetail = (id) => {
		const product = this.getProduct(id);
		this.setState(() => {
			return { detailProduct: product };
		});
	};

	render() {
		return (
			<productContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart,
					openModel: this.openModel,
					closeModel: this.closeModel,
					handleIncrement: this.handleIncrement,
					handleDecrement: this.handleDecrement,
					handleDeleteProduct: this.handleDeleteProduct,
					handleClearCart: this.handleClearCart,
				}}
			>
				{this.props.children}
			</productContext.Provider>
		);
	}
}

export { ProductProvider, ProductConsumer };
