import { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import './comicsList.scss';

const setContent = (process, items, newItemLoading) => {
	switch (process) {
		case 'waiting':
			return <Spinner />;
		case 'loading':
			return newItemLoading ? items : <Spinner />;
		case 'error':
			return <ErrorMessage />;
		case 'confirmed':
			return items;
		default:
			throw new Error('Unexpected process state');
	}
};

const ComicsList = () => {

	const [comicsList, setComicsList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [comicsEnded, setComicsEnded] = useState(false);
	const isFirstRender = useRef(true);

	const { getAllComics, process, setProcess } = useMarvelService();

	useEffect(() => {
		if (isFirstRender.current) {
			onRequest(offset, true);
		}

		return () => {
			isFirstRender.current = false;
		}
	}, []);

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllComics(offset)
			.then(onComicsListLoaded)
			.then(() => setProcess('confirmed'))
			.catch(err => console.log(err));
	};

	const onComicsListLoaded = (newComicsList) => {
		let ended = false;
		if (newComicsList.length < 8) {
			ended = true;
		}

		setComicsList(comicsList => [...comicsList, ...newComicsList]);
		setNewItemLoading(false);
		setOffset(offset => offset + 8);
		setComicsEnded(ended);
	};

	function renderItems(arr) {
		const items = arr.map((item, i) => {
			return (
				<li key={i} className="comics__item">
					<Link to={`/comics/${item.id}`}>
						<img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
						<div className="comics__item-name">{item.title}</div>
						<div className="comics__item-price">{item.price}</div>
					</Link>
				</li>
			);
		});

		return (
			<ul className="comics__grid">
				{items}
			</ul>
		);
	}

	const elements = useMemo(() => {
		return setContent(process, renderItems(comicsList), newItemLoading)
	}, [process]);

	return (
		<div className="comics__list">
			{elements}
			<button
				onClick={() => onRequest(offset)}
				className="button button__main button__long"
				style={{display: comicsEnded ? 'none' : 'block'}}
				disabled={newItemLoading}>
				<div className="inner">load more</div>
			</button>
		</div>
	)
}

export default ComicsList;