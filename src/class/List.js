import React from "react";
import TacoForm from "./TacoForm";

class List extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = {
      tacos: [
        { name: "beef", price: 2.99 },
        { name: "chicken", price: 3.99 },
      ],
      showForm: true,
    };
  }

  addTaco=(taco)=>{
    // DB CALL SKIPPING
    
    // UPDATE STATE
    let updateTacos = [taco, ...this.state.tacos]
    this.setState({
        tacos:updateTacos
    })

    // what it would look like in functional component
    // let updateTacos = [taco, ...tacos]
    // this.setTacos(updateTacos)

  }

  deleteTaco = (tacoName)=>{
      // DELETE FROM DB SKIPPED
      // REMOVE FROM STATE
      let filteredTacos = this.state.tacos.filter(t => t.name !== tacoName)
      // setState update state trigger render to be called 
      this.setState({
          tacos:filteredTacos
      })
  }

  renderTacos = () => {
    return this.state.tacos.map((t) => {
      return (
        <div className="border">
          <h1>{t.name}</h1>
          <p>${t.price}</p>
          <button onClick={()=>this.deleteTaco(t.name)}>delete</button>
        </div>
      );
    });
  };
  toggleForm =()=>{
      this.setState({
          showForm: !this.state.showForm
      })
  }
  //have to define render
  render() {
    // could cleaner
    // const {showForm} = this.state
    return (
      <div>
        <button onClick={this.toggleForm}>{this.state.showForm ? 'hide' : 'show'}</button>
        {this.state.showForm && <TacoForm addTaco={this.addTaco} />}
        <h1>List</h1>

        {this.renderTacos()}
      </div>
    );
  }
}

export default List;
