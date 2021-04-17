import React, { Component } from "react";

class NotFound extends Component {
	render() {
		const { location } = this.props;
		console.log(this.props);

		return <div>{location.pathname} is not found </div>;
	}
}

export default NotFound;
