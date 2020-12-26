import { mailService } from './services/mail-service.js';
import { MailList } from './cmps/MailList.jsx';
import { MailFilter } from "./cmps/MailFilter.jsx";

export class MailApp extends React.Component {

    state = {
        msgs: [],
        filterBy: {
            subject: '',
            isRead: true,
            category: "inbox"
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
        const filteredByCategory =  this.state.msgs.filter(msg => msg.category === filterBy.category) // msg.isRead === filterBy.isRead 
        return filterBy.subject? filteredByCategory.filter(msg => filterRegex.test(msg.subject)) : filteredByCategory
       
    }
    get msgsForDisplay (){
        return this.getMsgsForDisplay()
    }

    onSetFilter = (filterBy) => {
      
        this.setState({ filterBy: {...this.state.filterBy, ...filterBy } });
    }

    render() {
        
        return (
            <section className="MailApp-css">
                 <img className="mister-mail" src="assets/img/postman-147824_640.png"/>
                 <h2 className="title-mail" >Mister Mail</h2>
                  <MailFilter setFilter={this.onSetFilter} subjectFilter={this.state.filterBy.subject} />
               
                <MailList msgs={this.msgsForDisplay} onRemove={this.onRemoveMsg} onRead={this.onReadMsg} />
            </section>
        );
    }
}

