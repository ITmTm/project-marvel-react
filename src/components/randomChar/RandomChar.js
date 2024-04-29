// import {Component} from "react";
import {useState, useEffect} from "react";
import setContent from "../../utils/setContent";

import useMarvelService from "../../services/MarvelService";

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';


                        // Функциональный компонент hook(i)
const RandomChar = () => {

    const [char, setChar] = useState(null);
    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateChar();
        const timerId = setInterval(updateChar, 60000);

        return () => {
            clearInterval(timerId);
        }
        // eslint-disable-next-line
    }, []);


    const onCharLoaded = (char) => {
        setChar(char);
    }


    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011334 - 1011136) + 1011136);
        getCharacter(id)
            .then(onCharLoaded)
			.then(() => setProcess('confirmed'))

    }


    return (
        <div className="randomchar">
			{setContent(process, View, char)}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button
                    className="button button__main"
                    onClick={updateChar}
                >
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki} = data;
    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'}
    }

    return (
        <div className="randomchar__block">
            <img
                src={thumbnail}
                alt="Random character"
                className="randomchar__img"
                style={imgStyle}
            />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">{description}</p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}







// class RandomChar extends Component {
//     state = {
//         char: {},
//         loading: true,
//         error: false
//     }
//
//     marvelService = new MarvelService();
//
//     componentDidMount() {
//         this.updateChar();
//         // this.timerId = setInterval(this.updateChar, 3000);
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerId);
//     }
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
//     updateChar = () => {
//         const id = Math.floor(Math.random() * (1011334 - 1011136) + 1011136);
//         this.onCharLoading();
//         this.marvelService
//             .getCharacter(id)
//             .then(this.onCharLoaded)
//             .catch(this.onError);
//     }
//
//     render() {
//         const {char, loading, error} = this.state;
//         const errorMessage = error ? <ErrorMessage /> : null;
//         const spinner = loading ? <Spinner /> : null;
//         const content = !(loading || error) ? <View char={char} /> : null;
//
//         return (
//             <div className="randomchar">
//                 {errorMessage}
//                 {spinner}
//                 {content}
//                 <div className="randomchar__static">
//                     <p className="randomchar__title">
//                         Random character for today!<br/>
//                         Do you want to get to know him better?
//                     </p>
//                     <p className="randomchar__title">
//                         Or choose another one
//                     </p>
//                     <button
//                         className="button button__main"
//                         onClick={this.updateChar}
//                     >
//                         <div className="inner">try it</div>
//                     </button>
//                     <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
//                 </div>
//             </div>
//         )
//     }
// }
//
// const View = ({char}) => {
//     const {name, description, thumbnail, homepage, wiki} = char;
//     let imgStyle = {'objectFit' : 'cover'};
//     if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
//         imgStyle = {'objectFit' : 'contain'}
//     }
//
//     return (
//         <div className="randomchar__block">
//             <img
//                 src={thumbnail}
//                 alt="Random character"
//                 className="randomchar__img"
//                 style={imgStyle}
//             />
//             <div className="randomchar__info">
//                 <p className="randomchar__name">{name}</p>
//                 <p className="randomchar__descr">{description}</p>
//                 <div className="randomchar__btns">
//                     <a href={homepage} className="button button__main">
//                         <div className="inner">homepage</div>
//                     </a>
//                     <a href={wiki} className="button button__secondary">
//                         <div className="inner">Wiki</div>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default RandomChar;