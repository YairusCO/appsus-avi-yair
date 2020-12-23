export function Reviews({ book }) {
    if (!book.reviews) return <div>Loading...</div>
    return <article className="book-reviews">
        
        <h3>Previous Reviews :</h3>
        {book.reviews.map((review, idx) =>
            <section className="book-review" key={idx}>
                <button>X</button>
                <h4>Name: {review.fullName}</h4>
                <h4>Rate: {review.rate}</h4>
                <h4>Comment: {review.comment}</h4>

            </section>)}
    </article>
}