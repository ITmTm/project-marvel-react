// import {Component} from "react";
import {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import { Transition, TransitionGroup } from "react-transition-group";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import './charList.scss';


                                // Функциональный компонент hook(i)

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
	const [animStart, setAnimStart] = useState(false);


    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line
    }, [])


    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharListLoaded);
    }


    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }


        setCharList(charList => [...charList, ...newCharList]);
		setAnimStart(animStart => true);
        setNewItemLoading(setNewItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }


    const itemRefs = useRef([]);


    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    // Оптимизация метода, чтобы не помещать такую большую конструкцию в render
    function renderItems(arr) {
		let delay = 0;
        const items = arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'}
            }

			const duration = 500;

			const defaultStyle = {
				transition: `all ${duration}ms ease-in-out`,
				opacity: 0,
				transform: 'translateY(-30%)',
				transitionDelay: `${delay}s`
			}

			const transitionStyles = {
				entering: {opacity: 0, transform: 'translateY(-30%)', transitionDelay: `${delay}s`},
				entered: {opacity: 1, transform: 'translateY(0)', transitionDelay: `${delay}s`},
				exiting: {opacity: 1, transform: 'translateY(0)', transitionDelay: `${delay}s`},
				exited: {opacity: 0, transform: 'translateY(30%)', transitionDelay: `${delay}s`},
			};

			if (i >= arr.length - 9) {
				delay += 0.5;
			}

			return (
				<Transition
					timeout={duration}
					key={item.id}
					in={animStart}
				>
					{
						state => (
							<li
								style={{
									...defaultStyle,
									...transitionStyles[state]
								}}
								className="char__item"
								tabIndex={0}
								// Рефы-----------------------------------------
								ref={el => itemRefs.current[i] = el}
								onClick={() => {
									props.onCharSelected(item.id);
									focusOnItem(i);
								}}
								onKeyDown={(e) => {
									if (e.key === ' ' || e.key === "Enter") {
										props.onCharSelected(item.id);
										focusOnItem(i);
									}
								}}>
								<img src={item.thumbnail} alt={item.name} style={imgStyle} />
								<div className="char__name">{item.name}</div>
							</li>
						)
					}
				</Transition>
			)
		});

        // Эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                <TransitionGroup component={null}>
                    {items}
                </TransitionGroup>
            </ul>
        )
    }


    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}



// class CharList extends Component {
//
//     state = {
//         charList: [],
//         loading: true,
//         error: false,
//         newItemLoading: false,
//         offset: 210,
//         charEnded: false
//     }
//
//     marvelService = new MarvelService();
//
//     componentDidMount() {
//         this.onRequest();
//     }
//
//     onRequest = (offset) => {
//         this.onCharListLoading();
//         this.marvelService.getAllCharacters(offset)
//             .then(this.onCharListLoaded)
//             .catch(this.onError)
//     }
//
//     onCharListLoading = () => {
//         this.setState({
//             newItemLoading: true
//         })
//     }
//
//     onCharListLoaded = (newCharList) => {
//         let ended = false;
//         if (newCharList.length < 9) {
//             ended = true;
//         }
//
//
//         this.setState(({offset, charList}) => ({
//             charList: [...charList, ...newCharList],
//             loading: false,
//             newItemLoading: false,
//             offset: offset + 9,
//             charEnded: ended
//         }))
//     }
//
//     onError = () => {
//         this.setState({
//             error: true,
//             loading: false
//         })
//     }
//
//     // Оптимизация метода, чтобы не помещать такую большую конструкцию в render
//     renderItems(arr) {
//         const items = arr.map((item) => {
//             let imgStyle = {'objectFit' : 'cover'};
//             if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
//                 imgStyle = {'objectFit' : 'unset'}
//             }
//
//             return (
//                 <li className="char__item"
//                     key={item.id}
//                     onClick={() => this.props.onCharSelected(item.id)}
//                 >
//                     <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
//                     <div className="char__name">{item.name}</div>
//                 </li>
//             )
//         });
//
//         // Эта конструкция вынесена для центровки спиннера/ошибкиж
//         return (
//             <ul className="char__grid">
//                 {items}
//             </ul>
//         )
//     }
//
//
//     render() {
//
//         const {charList, loading, error, newItemLoading, offset, charEnded} = this.state;
//
//         const items = this.renderItems(charList);
//
//         const errorMessage = error ? <ErrorMessage /> : null;
//         const spinner = loading ? <Spinner /> : null;
//         const content = !(loading || error) ? items : null;
//
//         return (
//             <div className="char__list">
//                 {errorMessage}
//                 {spinner}
//                 {content}
//                 <button
//                     className="button button__main button__long"
//                     disabled={newItemLoading}
//                     style={{'display': charEnded ? 'none' : 'block'}}
//                     onClick={() => this.onRequest(offset)}
//                 >
//                     <div className="inner">load more</div>
//                 </button>
//             </div>
//         )
//     }
// }
//
// CharList.propTypes = {
//     onCharSelected: PropTypes.func.isRequired
// }

export default CharList;