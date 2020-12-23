const { NavLink, withRouter } = ReactRouterDOM;


function _AppHeader(props) {


    return <nav>
        <ul>
            <li><NavLink activeClassName="my-active" exact to="/">Home</NavLink></li>
            <li><NavLink to="/book">My Books</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/addbook">Add Book</NavLink></li>
        </ul>

    </nav>;
}

//HOC - higher order component
export const AppHeader = withRouter(_AppHeader);