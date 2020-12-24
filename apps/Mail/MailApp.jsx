import { mailService } from './services/mail-service.js';
import { MailList } from './cmps/MailList.jsx';
import { MailFilter } from "./cmps/MailFilter.jsx";

export class MailApp extends React.Component {

    state = {
        msgs: [],
        filterBy: {
            subject: '',
            read: false
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
        mailService.remove(msgId).then(() => {
            this.loadMsgs()
        })
    }

    onReadMsg = (msgId) => {
        mailService.isRead(msgId).then(() => {
            this.loadMsgs()
        })
    }

    filterChange = (event) => {
        this.setState({ filterBy: event.target.value });
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
        
        return (
            <section>
                  <MailFilter setFilter={this.onSetFilter} />
                <h2>Mail</h2>
                <MailList msgs={this.msgsForDisplay} onRemove={this.onRemoveMsg} onRead={this.onReadMsg} />
            </section>
        );
    }
}

