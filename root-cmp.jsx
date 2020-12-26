// import { AppHeader } from './cmps/app-header.jsx';
// import { About } from './pages/about.jsx'; 
import { Home } from './pages/home.jsx';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter.jsx';
import { MailApp } from './apps/Mail/MailApp.jsx';
import { KeepApp } from './apps/Keep/KeepApp.jsx';


const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;



export class App extends React.Component {
    render() {
        return (
            <Router>
                <AppHeader />
                <section className="app">
                    <Switch>
                        <Route path="/keep" component={KeepApp} />
                        <Route path="/mail" component={MailApp} />
                        <Route path="/" component={Home} />
                    </Switch>

                </section>
                <AppFooter />
            </Router>
        );
    }
}





