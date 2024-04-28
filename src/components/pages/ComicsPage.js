import { Helmet } from "react-helmet";

import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Page with list of our comics"
				/>
				<title>Comics page</title>
			</Helmet>
			<AppBanner/>
			<ComicsList/>
		</>
	)
}

export default ComicsPage;