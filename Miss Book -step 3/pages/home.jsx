

export class Home extends React.Component {



    render() {
        return (
            <section>
                <img onClick={() => this.props.history.push('/book')} className="missbook-home" src="assets/img/miss.png" />
                <h1 onClick={() => this.props.history.push('/book')} className="title-home">Miss Book</h1>
                <h4 >Reading is a conversation. All books talk. But a good book listens as well.</h4>

            </section>
        )
    }
}

