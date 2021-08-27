import React, { Component } from 'react';
import './App.css'
import {Button} from './Button';
import 'bootstrap/dist/css/bootstrap.min.css'




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
        zero: 'Zero'
    }

  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {


    return (

        <div className={"d-flex justify-content-center;d-flex align-items-center; "}>

            <Button  sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
            <h1><center>{this.state.count===0?this.state.zero:this.state.count}</center></h1>
          <hr />

          <Button sign="+"  count={this.state.count} updateCount={this.handleCount.bind(this)} />

        </div>
    );
  }
}

export default App;
