// import { AppHeader } from './cmps/app-header.jsx';
// import { About } from './pages/about.jsx'; 
import {Home} from './pages/home.jsx'
import { BookApp } from './apps/Books/BookApp.jsx';
 import { KeepApp } from '../apps/Keep/KeepApp.jsx';
// import { MailApp } from './apps/Mail/MailApp.jsx';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;


// Simple React Component
export class App extends React.Component {
    render() {
        return (
            <Router>
                <section className="app">
                    {/* <AppHeader /> */}
                    <Switch>
                    {/* <Route path="/keep" component={KeepApp} /> */}
                        {/* <Route path="/book" component={BookApp} /> */}
                      
                        {/* <Route path="/Mail" component={MailApp} /> */}
                        {/* <Route path="/about" component={About} /> */}
                        {/* <Route path="/addbook" component={Addbook} /> */}
                        <Route path="/" component={Home} />
                    </Switch>

                </section>
            </Router>
        );
    }
}

//     state = {
//         currPage: 'book'
//     };

//     render() {
//         return <section className="app">
//             {/* <h1>My App</h1> */}
//             {this.state.currPage === 'home' && <Home />}
//             {this.state.currPage === 'book' && <BookApp />}
//         </section>;
//     }
// }





