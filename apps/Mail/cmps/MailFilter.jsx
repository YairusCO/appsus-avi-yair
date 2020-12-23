export class MailFilter extends React.Component {

  
    state = {
        
        filterBy: {
            subject: '',
            isRead: false
        },
       
    };

    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.filterBy);
        };
        
        const filterBy = {...this.state.filterBy}
        filterBy[ev.target.subject] = ev.target.value;

        this.setState({filterBy}, callback);
    };

    render() {
        return <section className="msg-filter">
            <input type="text" name="name"
                value={this.state.filterBy.subject}
                placeholder="Filter by name"
                autoComplete="off"
                onChange={this.handleChange} />
        </section>;
    }

}