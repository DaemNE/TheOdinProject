import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Vishwas"
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate() {
      console.log("LifecycleA shouldComponentUpdate")
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("LifecycleA getSnapshotBeforeUpdate")
      return null
    }

    componentDidUpdate(){
      console.log("LifecycleA componentDidUpdate")
    }

    changeState = () => {
      this.setState({
        name: "codevolution"
      })
    }
    
  render() {
      console.log("LifecycleA rendder")
    return (
        
      <div>
        <LifeCycleB />
        <button onClick={this.changeState}>Change state</button>
        Lifecycle A
      </div>
    )
  }
}

export default LifeCycleA
