// import {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {MainPage, ComicsPage} from "../pages"
import AppHeader from '../appHeader/AppHeader';





					// Функциональный компонент hook(i)
const App = () => {
	


	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<main>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/comics' element={<ComicsPage />} />
					</Routes>
				</main>
			</div>
		</Router>
	)
}


// class App extends Component {
//
// 	state = {
// 		selectedChar: null
// 	}
//
// 	onCharSelected = (id) => {
// 		this.setState({
// 			selectedChar: id
// 		})
// 	}
//
// 	render() {
// 		return (
// 			<div className="app">
// 				<AppHeader />
// 				<main>
// 					<ErrorBoundary>
// 						<RandomChar />
// 					</ErrorBoundary>
// 					<div className="char__content">
// 						<ErrorBoundary>
// 							<CharList onCharSelected={this.onCharSelected} />
// 						</ErrorBoundary>
// 						<ErrorBoundary>
// 							<CharInfo charId={this.state.selectedChar} />
// 						</ErrorBoundary>
// 					</div>
// 					<img className="bg-decoration" src={decoration} alt="vision"/>
// 				</main>
// 			</div>
// 		)
// 	}
// }


export default App;
