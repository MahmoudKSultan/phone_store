import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context";
// import "bootstrap/dist/js/bootstrap.js";
// import "jquery/dist/jquery.js";
ReactDOM.render(
	<React.StrictMode>
		<ProductProvider>
			<Router>
				<App />
			</Router>
		</ProductProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
