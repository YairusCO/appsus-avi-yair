import {mailService} from './services/apis/mail-services.js';
import { MailList } from './cmps/MailList.jsx';
import { MailFilter } from "./cmps/MailFilter.jsx";
const { Link } = ReactRouterDOM;

export class MailApp extends React.Component {

    state = {
        msgs: [],
        filterBy: {
            subject: '',
            isRead: false
        },
    };
   
    componentDidMount() {
        this.loadMsgs(); 
    }

    componentWillUnmount() {
    }

    loadMsgs = () => {
        mailService.query().then(msgs => {
            this.setState({ msgs });
        });
    }

    onRemoveMsg = (msgId) => {
        msgService.remove(msgId).then(() => {
            this.loadMsgs()
        })
    }

    filterChange = (event) => {
        this.setState({ filter: event.target.value });
    }

    showInDialog(currentInboxMsg){
        console.log(currentInboxMsg)
        this.setState({currentInboxMsg})
    }

    getMsgsForDisplay = () => {
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.subject, 'i');
        return this.state.msgs.filter(msg => filterRegex.test(msg.subject));
    }
    get msgsForDisplay (){
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.subject, 'i');
        return this.state.msgs.filter(msg => filterRegex.test(msg.subject));
    }

    onSetFilter = (filterBy) => {
        console.log('filterBy:', filterBy);
        this.setState({ filterBy });
    }

    render() {
        const msgsForDisplay = this.msgsForDisplay;
        return (
            <section>
                  <MailFilter setFilter={this.onSetFilter} />
                <h2>Mail</h2>
                <MailList msgs={msgsForDisplay} onRemove={this.onRemove} />
            </section>
        );
    }
}

