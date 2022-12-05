import React, { Component} from 'react'
import MemoComponent from './MemoComponent';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Vishwas",
      }
    }
    
componentDidMount(){
    setInterval(() => {
        this.setState({
            name: "Vishwas"
        })
    }, 2000);
}

  render() {
      console.log("Parent Component rendered")
    return (
      <div>
      Parent Component
      <MemoComponent name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp