import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Reserve from './Reserve';
import Order from './Order'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import emptyStar from "../Images/Empty_Star.png"
import goldStar from "../Images/Gold_Star.png"
import halfStar from "../Images/Half_Star.png"
import {Image} from "react-bootstrap";


export class Schedule extends Component {
    render() {
        return (
            <div id="schedule">
                <p>Luni: 10:30 - 22:00</p>
                <p>Marti-Vineri: 07:00 - 23:30</p>
                <p>Sambata: 10:30 - 22:00</p>
                <p>Duminica: 11:00 - 17:30</p>
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