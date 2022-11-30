import React from 'react'
import PropTypes from 'prop-types'

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        }
        setTimeout(() => {
            this.setState({
                status: 1
            })
        },3000); 
    }
    

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }

    onMakeYounger() {
        this.setState({
            age: this.state.age - 3
        })
    }

    render() {
        return (
            <div>
                <p>I'm a new component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr />
                <button className='btn btn-primary' onClick={() => this.onMakeOlder()}>Make me older!</button>
                <br />
                <br />
                <button className='btn btn-primary' onClick={() => this.onMakeYounger()}>Make me younger!</button>
                <hr />
                <button className='btn btn-danger' onClick={this.props.greet}>Greet me!</button>
            </div>  
        )
    }
}

Home.propTypes = {
    name: PropTypes.string,
    Initialage: PropTypes.number,
    greet: PropTypes.func,
}