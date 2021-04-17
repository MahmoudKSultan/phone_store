import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import ProductList from "./components/productList";
import Cart from "./components/Cart/cart";
import Details from "./components/details";
import NotFound from "./components/notFound";
import Model from "./components/model";
import "./App.css";
function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route path="/" component={ProductList} exact />
				<Route exact path="/cart" component={Cart} exact />
				<Route exact path="/details" component={Details} exact />
				<Route path="/not-Found" component={NotFound} />
				<Redirect to="/not-Found" />
			</Switch>
			<Model></Model>
		</React.Fragment>
	);
}

export default App;
