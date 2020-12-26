const { NavLink, withRouter } = ReactRouterDOM;


export class Home extends React.Component {



    render() {
        return (
            <div className="jumbo">
            <section>
                <img className="appsus-logo" src="assets/img/appsus.png" />
                <h1 className="btnhome"><NavLink  className="toHover" to="/keep">Miss Keep</NavLink></h1>
                <h1 className="btnhome"><NavLink  className="toHover" to="/book">Miss Book</NavLink></h1>
                <h1 className="btnhome"><NavLink  className="toHover" to="/mail">Mister Mail</NavLink></h1>
                
               

            </section>
            </div>
        )
    }
}
export const AppHeader = withRouter(Home);
