import {Link, NavLink} from "react-router-dom";
import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <Link to='/'>
                    <span>Marvel</span> information portal
                </Link>
            </h1>

            <nav className="app__menu">
                <ul>
                    <li>
                        <NavLink exact activeStyle={{'color': 'rgb(145 201 93)'}} to='/'>Characters</NavLink>
                    </li>
                    /
                    <li>
                        <NavLink exact activeStyle={{'color': 'rgb(145 201 93)'}} to='/comics'>Comics</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;