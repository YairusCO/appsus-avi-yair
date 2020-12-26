const { NavLink, withRouter } = ReactRouterDOM;


function _AppHeader(props) {


    return <nav className="header">
        <ul>
            <li><NavLink activeClassName="my-active toHover" exact to="/">Home</NavLink></li>
            <li><NavLink className="toHover" to="/keep">Keep</NavLink></li>
            <li><NavLink className="toHover" to="/mail">Mail</NavLink></li>
            <li><NavLink className="toHover" to="/book">Book</NavLink></li>

        </ul>

    </nav>;
}

//HOC - higher order component
export const AppHeader = withRouter(_AppHeader);