export class MailFilter extends React.Component {
  state = {
    filterBy: {
      subject: "",
      read: false,
      Category: "inbox"
    },
  };

  handleChange = (ev) => {
    const callback = () => {
        
      this.props.setFilter(this.state.filterBy);

    };

    const filterBy = { ...this.state.filterBy };
    filterBy[ev.target.name] = ev.target.value;
    console.log('filterBy',filterBy);
    // debugger
    this.setState({ filterBy }, callback);
  };

  render() {
    return (
      <section className="msg-filter">
                 <button onClick={this.handleChange} name="category" value = 'inbox'
            >inbox</button>
                 <button onClick={this.handleChange} name="category" value = "send"
            >send</button>
        <input
          type="text"
          name="subject"
          value={this.state.filterBy.subject}
          placeholder="Filter by subject"
          autoComplete="off"
          onChange={this.handleChange}
        />
        <select name="read" onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="read">Read</option>
          <option value="not-read">Not read</option>
        </select>
      </section>
    );
  }
}
