import {useState} from "react";
import { Helmet } from "react-helmet";

import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";


import decoration from '../../resources/img/vision.png';

const MainPage = () => {

	const [selectedChar, setChar] =  useState(null);


	const onCharSelected = (id) => {
		setChar(id);
	}

	// console.log('mp');

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Web site created using create-react-app"
				/>
				<title>Marvel React App</title>
			</Helmet>

			<ErrorBoundary>
				<RandomChar/>
			</ErrorBoundary>

			<div className="char__content">

			<ErrorBoundary>
				<CharList onCharSelected={onCharSelected} />
			</ErrorBoundary>
				<div>
					<ErrorBoundary>
						<CharInfo charId={selectedChar} />
					</ErrorBoundary>

					<ErrorBoundary>
						<CharSearchForm />
					</ErrorBoundary>
				</div>
			</div>
			<img className="bg-decoration" src={decoration} alt="vision"/>
		</>
	)
}

export default MainPage;