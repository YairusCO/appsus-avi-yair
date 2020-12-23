import {getInbox} from './services/apis/mail-services.js';


export class MailApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inbox: [],
            filter: '',
            currentInboxMsg: null,
        };
    }
   
    componentDidMount() {
        this.props.api
            .getInbox()
            .then(inbox => {
              
                this.setState({ inbox });
            })
    }

    filterChange = (event) => {
        this.setState({ filter: event.target.value });
    }

    showInDialog(currentInboxMsg){
        console.log(currentInboxMsg)
        this.setState({currentInboxMsg})
    }

    render() {
        const { filter } = this.state;
        const inboxFilterd = (
            filter
            ? this.state.inbox.filter((msg) => msg.subject.toLowerCase().includes(filter.toLowerCase()))
            : this.state.inbox
        );
        return (
            <section>
                <h1 >Mail.</h1>
                <div>
                <input type='text' placeholder='Type for search...' onChange={this.filterChange} />
                </div>
                <div>
               <getInbox inbox={inboxFilterd} />
                </div>
            </section>
        )
    }
}

