const { NavLink, withRouter } = ReactRouterDOM;


function _AppHeader(props) {


    return <nav className="header">
        <ul>
            <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
            <li><NavLink to="/keep">Keep</NavLink></li>
            <li><NavLink to="/mail">Mail</NavLink></li>

        </ul>

    </nav>;
}

//HOC - higher order component
export const AppHeader = withRouter(_AppHeader);