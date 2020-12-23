import { bookService } from "../../services/book-service.js";

export class Addbook extends React.Component {

    state = {
        filterBy: {
            title: '',

        }

    }

    handelChange = (ev) => {
        const callback = () => {
            this.props.onSetFilter(this.state);
        };
        const value = ev.target.value;
        const field = ev.target.name;
        console.log('field', field)
        this.setState({ [field]: value }, callback)
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    render() {
        return (
            <section className="add-book">
                <img className="missbook" src="assets/img/miss.png" />
                <h2 >Miss Book</h2>
                <input className="input" type="text" placeholder="Find Book by title:" value={this.props.title} name="title" onChange={this.handelChange} />

            </section>
        )
    }
}

