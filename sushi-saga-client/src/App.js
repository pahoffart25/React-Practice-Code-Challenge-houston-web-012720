import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      displaySushis: [],
      index: [0,1,2,3],
      cash: 100,
      eaten: []
    }
  }

  componentDidMount(){
    //this is where you do initial fetch at
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      let edible = sushis.map(sushi => {return({...sushi, eaten: false})}) // adds a prop to each sushi for bonus to not reshow eaten sushi
      this.setState({
        sushis: edible
      }, this.setDisplay) 
      
    })
  }
  
  setDisplay = () => {
    let display = this.state.index.map(i => this.state.sushis[i]) //function to run resetting the display sushis whenever needed.

    this.setState({displaySushis: display})
  }

  // function to use slice if setting index to 0 
  // call this function in place of set display

  // getSushis = () =>{
  //   this.setState({
  //     displaySushis: this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4)
  //     startIndex: this.state.startIndex + 4
  //   })
  // }

  fourMore =() => {
    let nextIndex = this.state.index.map(i => (i+4))

    this.setState({
      index: nextIndex
    }, this.setDisplay)
  }

  eat = (sushi) => {
    if(this.state.cash >= sushi.price) {
      sushi.eaten = true
      this.state.eaten.push(sushi)

    this.setState({
      cash: this.state.cash - sushi.price
    })
    }else {
        alert("get ya broke ass outta here")
    }
}

  addMoney = (e) => {
    e.preventDefault()

    this.setState({
      cash: this.state.cash + parseInt(e.target[0].value)
    })

    e.target.reset()
  }

  render() {
    console.log(this.state.displaySushis)
    return (
      <div className="app">
        <SushiContainer sushis={this.state.displaySushis} fourMore={this.fourMore} eat={this.eat} cash={this.state.cash} />
        <MoneyForm addMoney={this.addMoney}/>
        <Table cash={this.state.cash} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;