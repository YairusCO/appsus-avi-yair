import {mailService} from './services/apis/mail-services.js';
import { MailList } from './cmps/MailList.jsx';
import { MailFilter } from "./cmps/MailFilter.jsx";
const { Link } = ReactRouterDOM;

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

    get msgsForDisplay() {
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.subject, 'i');
        return this.state.msgs.filter(msg => filterRegex.test(msg.subject));
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
                <MailList msgs={msgsForDisplay} onRemove={this.onRemove} />
            </section>
        )
    }
}

