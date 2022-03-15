import React from 'react'

class TacoForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            price:'',
           
        }
    }
    handleChange=(e)=>{
      console.log('value:', e.target.value)
      console.log('name:', e.target.name)
      this.setState({
        [e.target.name]:e.target.value
      })
      // THIS WORKS
    //   if(e.target.name === 'price'){
    //     this.setState({
    //         price:e.target.value
    //     })
    //  }
    //  if(e.target.name === 'name'){
    //     this.setState({
    //         name:e.target.value
    //     })
    //  }
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        // use addTaco prop to add
        this.props.addTaco(this.state)
    }
    render(){
        return(
            <div>
                <h1>TacoForm</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>name</p>
                    <input name='name' value={this.state.name} onChange={this.handleChange}/>
                    <p>price</p>
                    <input name='price' value={this.state.price} onChange={this.handleChange} />
                    <button>add</button>
                </form>
            </div>
        )
    }
}
export default TacoForm