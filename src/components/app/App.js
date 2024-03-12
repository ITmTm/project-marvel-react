// import {Component} from "react";

import {useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';



					// Функциональный компонент hook(i)
const App = () => {
	
	const [selectedChar, setChar] =  useState(null);


	const onCharSelected = (id) => {
		setChar(id);
	}

	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<main>
					{/*<ErrorBoundary>*/}
					{/*	<RandomChar />*/}
					{/*</ErrorBoundary>*/}
					{/*<div className="char__content">*/}
					{/*	<ErrorBoundary>*/}
					{/*		<CharList onCharSelected={onCharSelected} />*/}
					{/*	</ErrorBoundary>*/}
					{/*	<ErrorBoundary>*/}
					{/*		<CharInfo charId={selectedChar} />*/}
					{/*	</ErrorBoundary>*/}
					{/*</div>*/}
					{/*<img className="bg-decoration" src={decoration} alt="vision"/>*/}
					<AppBanner/>
					<ComicsList/>
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
