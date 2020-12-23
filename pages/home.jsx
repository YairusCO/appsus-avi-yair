import {After} from '../cmps/After.jsx'


export class Home extends React.Component {
    
    state = {
        user: {
            score: 10,
            age: 20,
        },

        color: 'red'
    }

    incScore = () => {
        console.log(this.state);
        const userCopy = this.state.user
        userCopy.score = userCopy.score+1
        this.setState({
            user: {...userCopy}
         }, console.log(this.state))

        // WRONG WAY! //
        //  this.setState({
        //     user: userCopy
        //  }, ()=>{
        //      console.log('state: ', this.state);
        //  })
    }

    componentDidMount() {
        console.log(this);

    }

    render() {
        return (
            <section>
                <h2>Home Sweet Home</h2>
                <h3>{this.state.user.score}</h3>
                <After incScore={this.incScore} />
            </section>
        )
    }
}