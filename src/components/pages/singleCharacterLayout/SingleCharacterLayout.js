import { Helmet } from "react-helmet";

import './singleCharacterLayout.scss';

const SingleCharacterLayout = ({data}) => {

	const {name, description, thumbnail} = data;

	return (
		<div className="single-comic">
			<Helmet>
				<meta
					name="description"
					content={`${name} comics book`}
				/>
				<title>{name}</title>
			</Helmet>
			<img className="single-comic__char-img" src={thumbnail} alt={name} />
			<div className="single-comic__info">
				<h2 className="single-comic__name">{name}</h2>
				<p className="single-comic__descr">{description}</p>
			</div>
		</div>
	)
}

export default SingleCharacterLayout;