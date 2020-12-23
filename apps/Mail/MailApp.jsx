import {mailService} from './services/apis/mail-services.js';


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

    render() {
     
        return (
            <section>
                <h1 >Mail.</h1>
            </section>
        )
    }
}

