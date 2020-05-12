import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Reserve from './Reserve';
import Order from './Order'


/*
    To do: API calls
*/


export class Schedule extends Component {

    constructor(props){
        super(props);
        this.state = {
           schedule: props.schedule
        }
    }


    render() {
        return (
            <div id="schedule">
                {this.state.schedule.map(item => (<p>{item.day}: {item.startHour} - {item.endHour}</p>) )}
                <hr></hr>
                <div class="schbuttons">
                    <Reserve />
                    <Order />
                </div>
            </div>
        );
    }
}

export default Schedule;