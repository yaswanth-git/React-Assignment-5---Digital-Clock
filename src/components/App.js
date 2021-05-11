import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

     constructor(props) {
      super(props);
      this.state = {date: new Date()};
     }

    componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
    render() { 

        return(
            <div className="clock">
               <h3 id="time">{this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}


export default App;
