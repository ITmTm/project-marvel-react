// import {Component} from "react";
import {useState, useEffect} from "react";
import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

import './charInfo.scss';


                            // Функциональный компонент hook(i)
const CharInfo = (props) => {

    const [char, setChar] = useState(null);


    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateChar();
        // eslint-disable-next-line
    }, [props.charId]);


    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }

        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
			.then(() => setProcess('confirmed'))
    }


    const onCharLoaded = (char) => {
        setChar(char)
    }


	// Удаление данной конструкции
    // const skeleton = char || loading || error ? null : <Skeleton />;
    // const errorMessage = error ? <ErrorMessage /> : null;
    // const spinner = loading ? <Spinner /> : null;
    // const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="char__info">
			{setContent(process, View, char)}
        </div>
    )
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'}
    }

    return (
        <>
            <div className="char__basics">
                <img
                    src={thumbnail}
                    alt={name}
                    style={imgStyle}
                />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {
                    comics.map((item, i) => {
                        // eslint-disable-next-line
                        if (i > 9) return;
                        return (
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

CharInfo.propTypes = {
  charId: PropTypes.number
}



// class CharInfo extends Component {
//
//     state = {
//         char: null,
//         loading: false,
//         error: false
//     }
//
//     marvelService = new MarvelService();
//
//     componentDidMount() {
//         this.updateChar();
//     }
//
//     componentDidUpdate(prevProps) {
//         if (this.props.charId !== prevProps.charId) {
//             this.updateChar();
//         }
//     }
//
//
//     updateChar = () => {
//         const {charId} = this.props;
//         if (!charId) {
//             return;
//         }
//
//         this.onCharLoading();
//
//         this.marvelService
//             .getCharacter(charId)
//             .then(this.onCharLoaded)
//             .catch(this.onError)
//     }
//
//
//
//     onCharLoaded = (char) => {
//         this.setState({
//             char,
//             loading: false
//         })
//     }
//
//     onCharLoading = () => {
//         this.setState({
//             loading: true
//         })
//     }
//
//     onError = () => {
//         this.setState({
//             loading: false,
//             error: true
//         })
//     }
//
//
//     render() {
//         const {char, loading, error} = this.state;
//
//         const skeleton = char || loading || error ? null : <Skeleton />;
//         const errorMessage = error ? <ErrorMessage /> : null;
//         const spinner = loading ? <Spinner /> : null;
//         const content = !(loading || error || !char) ? <View char={char} /> : null;
//
//         return (
//             <div className="char__info">
//                 {skeleton}
//                 {errorMessage}
//                 {spinner}
//                 {content}
//             </div>
//         )
//     }
// }
//
// const View = ({char}) => {
//     const {name, description, thumbnail, homepage, wiki, comics} = char;
//
//     let imgStyle = {'objectFit' : 'cover'};
//     if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
//         imgStyle = {'objectFit' : 'contain'}
//     }
//
//     return (
//         <>
//             <div className="char__basics">
//                 <img
//                     src={thumbnail}
//                     alt={name}
//                     style={imgStyle}
//                 />
//                 <div>
//                     <div className="char__info-name">{name}</div>
//                     <div className="char__btns">
//                         <a href={homepage} className="button button__main">
//                             <div className="inner">homepage</div>
//                         </a>
//                         <a href={wiki} className="button button__secondary">
//                             <div className="inner">Wiki</div>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div className="char__descr">
//                 {description}
//             </div>
//             <div className="char__comics">Comics:</div>
//             <ul className="char__comics-list">
//                 {comics.length > 0 ? null : 'There is no comics with this character'}
//                 {
//                     comics.map((item, i) => {
//                         // eslint-disable-next-line
//                         if (i > 9) return;
//                         return (
//                             <li key={i} className="char__comics-item">
//                                 {item.name}
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </>
//     )
// }

export default CharInfo;