import {mailService} from './services/mail-service.js';
export class MailDetails extends React.Component {
state = {
    msg: null
}

componentDidMount() {
    const { id } = this.props.match.params
    mailService.getById(id)
        .then(msg => this.setState({ msg }))
}

onClose = () => {
    this.props.history.push('/mail')
}

render(){
    const {msg} = this.state
    if(!msg)return <h1>Loading..</h1>
    return <article className="mail-details">
           <button onClick={() => this.props.history.push('/mail')}>X</button>
            <h2>{msg.subject}</h2>
            <h2>{msg.body}</h2>
          </article>
}
}
