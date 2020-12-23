import { BookPreview } from "./book-preview.jsx";
const {Link} = ReactRouterDOM

export function BookList({ books, onSelectBook }) {

    return (
        books.map(book => {
            return (
                    <Link key={book.id} to={`book/${book.id}`}>
                    <BookPreview  book={book} onSelectBook={onSelectBook}/>
                    </Link>

            )
            
        })
    );
}