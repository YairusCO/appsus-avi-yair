export class MailFilter extends React.Component {
  state = {
    filterBy: {
      subject: "",
      read: false,
      Category: "inbox"
    },
  };

  handleChange = (ev) => {
    const subject = ev.target.value;
    this.props.setFilter({ subject });
  };

  handleMailBox = (category) => {
    this.props.setFilter({ category });
  }

  render() {
    return (
      <section className="msg-filter">
                 <button onClick={() => {this.handleMailBox('inbox')}}
            >inbox</button>
                 <button onClick={() => {this.handleMailBox('sent')}}
            >send</button>
        <input
          type="text"
          name="subject"
          value={this.props.subjectFilter}
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
