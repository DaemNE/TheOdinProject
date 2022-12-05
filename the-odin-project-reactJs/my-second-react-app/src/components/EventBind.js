import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

    }

    clickHandler = () => {
        this.setState({
            message: "Goodbye!"
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler}> Click </button>
      </div>
    )
  }
}

export default EventBind