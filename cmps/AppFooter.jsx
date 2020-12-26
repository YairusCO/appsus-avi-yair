const { NavLink, withRouter } = ReactRouterDOM;


function _AppFooter(props) {


    return <nav className="footer">
     
            <h5>© 2020 </h5>
            <h5>Terms</h5>
            <h5>Privacy</h5>
            <h5>Cookies</h5>


     

    </nav>;
}

//HOC - higher order component
export const AppFooter = withRouter(_AppFooter);