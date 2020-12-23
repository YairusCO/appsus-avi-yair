import { bookService } from '../../services/book-service'
import { ReviewAdd } from '../cmps/review-add.jsx';
import { Reviews } from '../cmps/reviews.jsx';

export class BookDetails extends React.Component {

    state = {
        book: null
    }

    getCurrencyCode() {
        var currencyCode = '';
        switch (book.listPrice.currencyCode) {
            case "EUR":
                currencyCode = '€';
                break;
            case "USD":
                currencyCode = '$';
                break;
            case "ILS":
                currencyCode = '₪';

        }
    }
    getReading= () => {
        var reading= '';
        if (book.pageCount > 500) reading = 'Long reading';
        else if (book.pageCount > 200) reading = 'Decent reading'
        else reading = 'Light reading'
        return reading
       
    }
    priceColor = () => {
        var color = ''
        const { book } = this.state
        if (book.listPrice.amount > 150) color = 'red'
        else if (book.listPrice.amount < 20) color = 'green'
        return color

    }
    checkPublishedDate = () => {
        var text = ''
        const { book } = this.state
        var year = new Date().getFullYear();
        if (year - (book.publishedDate) > 10) text = '- Veteran Book'
        else if (year - (book.publishedDate) > 1) text = '- New!'
        return text
    }


    componentDidMount() {
        const { id } = this.props.match.params
        bookService.getById(id)
            .then(book => this.setState({ book }))
    }
    onClose = () => {
        this.props.history.push('/book')
    }

    addReview = (review) => {
        bookService.saveReview(this.state.book, review)
            .then(book => this.setState({ book }))
        // this.loadBook()
    }

    render() {
        const { book } = this.state
        if (!book) return <h1>Loading...</h1>
        return <article className="book-details">
            <button onClick={() => this.props.history.push('/book')}>X</button>
            <img className="missbook2" src="assets/img/miss.png" />
            <h2 >Miss Book</h2>
            <h1>{book.title}</h1>
            <h3>{book.subtitle}</h3>
            <img className="tumbnail" src={book.thumbnail} />
            <h3 className={this.priceColor()}>price:{book.listPrice.amount} </h3>
            {book.listPrice.isOnSale && <img src="assets/img/sale.png" />}
            <h3>{this.getReading}</h3>
            <h5>published Date: {book.publishedDate} <span>{this.checkPublishedDate()}</span></h5>
            <h4>Author(s): {book.authors} </h4>
            <p> {book.description}</p>
            <ReviewAdd addReview={this.addReview} />
            <Reviews book={book} />
            {/* <button onClick={this.onClose}>Close</button> */}

        </article>

    }
}