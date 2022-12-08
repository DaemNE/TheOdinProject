import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name: ""
      }
    }

    componentDidMount()  {
      document.title = `Clicked ${this.state.count} times`
    }
    
    componentDidUpdate(prevProps, prevState)  {
      if (prevState.count !== this.state.count) {
        console.log("updating document title")
        document.title = `Clicked ${this.state.count} times`
      }
    }
    
    
  render() {
      const {count} = this.state
    return (
      <div>
      <input type="text" value={this.state.name} onChange={e => {
        this.setState({name : e.target.value})
      }}/>
        <button onClick={() => this.setState({count: count + 1})}>Button pressed {count} times</button>
      </div>
    
    )
  }
}

export default ClassCounter