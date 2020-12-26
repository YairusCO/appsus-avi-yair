// import { AppHeader } from './cmps/app-header.jsx';
// import { About } from './pages/about.jsx'; 
import { MailDetails } from './apps/Mail/MailDetails.jsx';
import { Home } from './pages/home.jsx';
import { AppHeader } from './cmps/AppHeader.jsx';
import { AppFooter } from './cmps/AppFooter.jsx';
import { BookApp } from './apps/Books/book-app.jsx';
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
<<<<<<< HEAD
                        <Route path="/mail/:id" component={MailDetails} />
=======
                        <Route path="/book" component={BookApp} />
>>>>>>> 904fda51080fdacf1e1063dc85d50b1152edb833
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





