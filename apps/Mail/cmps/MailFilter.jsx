export class MailFilter extends React.Component {
  state = {
    filterBy: {
      subject: "",
      read: false,
    },
  };

  handleChange = (ev) => {
    const callback = () => {
      this.props.setFilter(this.state.filterBy);
    };

    const filterBy = { ...this.state.filterBy };
    filterBy[ev.target.name] = ev.target.value;

    this.setState({ filterBy }, callback);
  };

  render() {
    return (
      <section className="msg-filter">
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
