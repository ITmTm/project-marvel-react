import {Component} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
	state = {
		error: false
	}


	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
		this.setState({
			error: true
		})
	}

	render() {
		if (this.state.error) {
			// return <h2 style={{margin: '50% auto 0 auto', fontSize: '40px', color: 'red'}}>Something went wrong</h2>
			return <ErrorMessage />
		}

		return this.props.children;
	}
}

export default ErrorBoundary;