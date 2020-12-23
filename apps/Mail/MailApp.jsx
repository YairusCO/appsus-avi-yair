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
        body: ''
    };

    componentDidMount() {
        this.loadMsgs();
    }
 

    loadMsgs = () => {
        mailService.query().then(msgs => {
            this.setState({ msgs });
        });
    };

    get msgsForDisplay() {
        const { filterBy } = this.state;
        const filterRegex = new RegExp(filterBy.subject, 'i');
        return this.state.msgs.filter(msg => filterRegex.test(msg.subject));
    }

    render() {
     
        return (
            <section>
                <h1 >Mail.</h1>
                <MailList msgs={msgsForDisplay} onRemove={this.onRemovePet} />
            </section>
        )
    }
}

