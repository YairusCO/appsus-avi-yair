import { bookService } from "../../services/book-service.js";
import { BookList } from '../cmps/book-app/book-list.jsx';
import { BookFilter } from "../cmps/book-app/book-filter.jsx"
import { BookDetails } from './book-details.jsx';



export class BookApp extends React.Component {

    state = {
        books: [],
        selectedBook: null,
        isDetails: false,
        filterBy: {
            title: '',
            fromPrice: 0,
            toPrice: 500
        }

    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        bookService.query().then(books => {
            this.setState({ books });
        });
        


    };

    getBooksForDisplay = () => {
        const { filterBy } = this.state;
        return this.state.books.filter(book => {
            return book.title.toLowerCase().includes(filterBy.title.toLowerCase()) &&
                book.listPrice.amount >= filterBy.fromPrice &&
                book.listPrice.amount <= filterBy.toPrice

        });
    };

    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    onSelectBook = (book) => {
        console.log('book selected:', book)
        this.setState({ selectedBook: book })
    }

    onDeSelectBook = (book) => {
        console.log('book deselected:', book)
        this.setState({ selectedBook: null })
    }


    render() {
        const { selectedBook } = this.state
        return (
            <section className="book-app">
                <img className="missbook" src="assets/img/miss.png" />
                <h2>Miss Book</h2>
                {!selectedBook && <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />}

                {!selectedBook &&
                    <section className="book-list">
                        <BookList books={this.getBooksForDisplay()} onSelectBook={this.onSelectBook} />
                    </section>}
                {selectedBook && <BookDetails book={selectedBook} onDeSelectBook={this.onDeSelectBook} />}
            </section>

        );
    }
}


