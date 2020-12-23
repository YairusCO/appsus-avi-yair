export function BookPreview({ book, onSelectBook }) {
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


    return (
    
    <article className="book-preview" onClick={() => onSelectBook(book)}>
        <h1>{book.title}</h1>
        <img className="book-icon" src={book.thumbnail}/>
        <h3>price: {currencyCode} {book.listPrice.amount} </h3>
        {book.listPrice.isOnSale && <img src="assets/img/sale.png" />}

    </article>
    );




}