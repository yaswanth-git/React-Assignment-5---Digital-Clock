import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={}
        this.updateTime();
    }
    updateTime(){
        var date = new Date(); /* creating object of Date class */
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var midday = "AM";
        midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
        hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); /* assigning hour in 12-hour format */
        const updateTime = (k) => { /* appending 0 before time elements if less than 10 */
            if (k < 10) {
                return "0" + k;
            }
            else {
                return k;
            }
        }
        min = updateTime(min);
        sec = updateTime(sec);
        this.setState({time:hour+":"+min+":"+sec+" "+midday})
    }
    componentDidMount(){
        setInterval(()=>{
            this.updateTime()
        },1000);
    }
    render() {
        return(
            <div>
               <h3>{this.state.time}</h3>
            </div>
        )
    }
}


export default App;
