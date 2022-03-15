import React from 'react'
class Counter extends React.Component{

    // initialize
    constructor(props){
      super(props)
      console.log('Counter Constructor called')
      // this refers to this instance of the class
      // this.state and an (js) object
      this.state = {count:0}
    //   this.add = this.add.bind(this)
    }

    // defined by react components, it gets after components
    // mounts to dom
    componentDidMount(){
        console.log('componentDidMount: Counter class mounted')
    }

    // need to bind this in constructor
    // add(){
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    // use Arrow function for now (binds this to instance)
    // event Handlers: use Arrow function 
    add = ()=>{
        // i want changeState set State
        // setState it update your state object
        // when that happens render is called
        this.setState({
            count: this.state.count + 1
        })
    }

    // When i extend from react component
    // I must define the render method
    render(){
      console.log('Counter render method called')
      return(
          <div className='border'>
              <h1>Counter: {this.props.header}</h1>
              <p>count: {this.state.count}</p>
              <button onClick={this.add}>add</button>
          </div>
      )
    }

}

export default Counter