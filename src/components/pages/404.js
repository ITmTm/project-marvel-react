import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";

const Page404 = () => {
	return (
		<div>
			<ErrorMessage />
			<p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '45px', 'marginTop': '40px'}}>Page doesn't exist</p>
			<Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '30px', 'marginTop': '30px', 'color': 'rgb(145, 201, 93)'}} to='/'>
				Back to main page
			</Link>
		</div>
	)
}

export default Page404;