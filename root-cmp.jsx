import { AppHeader } from './cmps/app-header.jsx';
import { About } from './pages/about.jsx'; 
import {Home} from './pages/home.jsx'
import { BookApp } from './pages/book-app.jsx';
import { Addbook } from './pages/addbook.jsx';
import { BookDetails } from './pages/book-details.jsx';
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

// Simple React Component
export class App extends React.Component {
    render() {
        return (
            <Router>
                <section className="app">
                    <AppHeader />
                    <Switch>
                        <Route path="/book/:id" component={BookDetails} />
                        <Route path="/book" component={BookApp} />
                        <Route path="/about" component={About} />
                        <Route path="/addbook" component={Addbook} />
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





