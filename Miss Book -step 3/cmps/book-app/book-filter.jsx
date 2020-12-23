export class BookFilter extends React.Component {


    state = {
        title: '',
        fromPrice: 0,
        toPrice: 500,
    }
    handelChange = (ev) => {
        const callback = () => {
            this.props.onSetFilter(this.state);
        };
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        const field = ev.target.name;
        console.log('field', field)
        this.setState({ [field]: value }, callback)

    };
    render() {
        return <div>
            <input className="input" type="text" placeholder="Filter Books by name:" value={this.props.title} name="title" onChange={this.handelChange} />
            <input className="input-num" type="number" placeholder="From Price:" value={this.props.fromPrice} name="fromPrice" onChange={this.handelChange} />
            <input className="input-num" type="number" placeholder="To Price:" value={this.props.toPrice} name="toPrice" onChange={this.handelChange} />
        </div>
    }

    
}