// import {Component} from "react";
import {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import {CSSTransition, SwitchTransition} from "react-transition-group";

import AppHeader from '../appHeader/AppHeader';
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = lazy(() => import('../pages/singleComicPage/SingleComicPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));


					// Функциональный компонент hook(i)
const MainContent = () => {
	const location = useLocation();

	return (
		<SwitchTransition>
			<CSSTransition key={location.key} classNames='fade-page' timeout={700} unmountOnExit>
				<Routes location={location}>
					<Route path='/' element={<MainPage />} />
					<Route path='/comics' element={<ComicsPage />} />
					<Route path='/comics/:comicId' element={<SingleComicPage />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</CSSTransition>
		</SwitchTransition>
	)
}

const App = () => {

	return (
		<Router>
			<div className="app">
				<AppHeader />
				<main>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path="*" element={<MainContent />} />
							<Route path="/comics" element={<ComicsPage />} />
							<Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType="comic" />} />
							<Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType="character" />} />
							<Route path="*" element={<Page404 />} />
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	)
}

export default App;


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


