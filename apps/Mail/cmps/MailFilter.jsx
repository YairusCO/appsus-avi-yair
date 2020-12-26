export class MailFilter extends React.Component {
  state = {
    filterBy: {
      subject: "",
      isRead: true,
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

  handleRead = (ev) => {
    const getVal = ev.target.value;
    var isRead
    switch (getVal) {
        case '':
            isRead='';
          break;
        case 'read':
            isRead=true
            break;
        case 'not-read':
            isRead=false;
          break;
    }
    console.log(isRead);
    this.props.setFilter({ isRead });
  }

  render() {
    return (
      <section className="msg-filter">
                 <button  onClick={() => {this.handleMailBox('inbox')}}
            >inbox</button>
                 <button onClick={() => {this.handleMailBox('sent')}}
            >sent</button>
        <input
          type="text"
          name="subject"
          value={this.props.subjectFilter}
          placeholder="Filter by subject"
          autoComplete="off"
          onChange={this.handleChange}
        />
        <select name="read"  onChange= {this.handleRead} >
          <option value=""  >All</option>
          <option value="read"  >Read</option>
          <option value="not-read" >Not read</option>
        </select>
      </section>
    );
  }
}
//onChange={() =>{this.handleRead().value}}