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

class StarRating extends Component
{
    constructor(props) {
        super(props);
    }

    render() //This will require more work, since it isn't responsive and for some reason pictures get shrunk down to 0px on smaller resolutions
    {
        return(
            <Container style={ {height: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Row>
                    <Col sm lg={2}>
                    {this.props.score >= 1 ?
                        this.props.score >=2 ?
                        <Image src={goldStar} alt={""} fluid/>  //score 2+
                        : <Image src={halfStar} alt={""} fluid/> //score 1
                        : <Image src={emptyStar} alt={""} fluid/> //score zero; this can't really show up
                    }
                    </Col>
                    <Col sm lg={2}>
                        {this.props.score >= 3 ?
                            this.props.score >=4 ?
                                <Image src={goldStar} alt={""} fluid/>  //score 4+
                                : <Image src={halfStar} alt={""} fluid/> //score 3
                            : <Image src={emptyStar} alt={""} fluid/> //score 2 exact
                        }
                    </Col>
                    <Col sm lg={2}>
                        {this.props.score >= 5 ?
                            this.props.score >=6 ?
                                <Image src={goldStar} alt={""} fluid/>  //score 6+
                                : <Image src={halfStar} alt={""} fluid/> //score 5
                            : <Image src={emptyStar} alt={""} fluid/> //score 4 exact
                        }
                    </Col>
                    <Col sm lg={2}>
                        {this.props.score >= 7 ?
                            this.props.score >=8 ?
                                <Image src={goldStar} alt={""} fluid/>  //score 8+
                                : <Image src={halfStar} alt={""} fluid/> //score 7
                            : <Image src={emptyStar} alt={""} fluid/> //score 6 exact
                        }
                    </Col>
                    <Col sm lg={2}>
                        {this.props.score >= 9 ?
                            this.props.score >=10 ?
                                <Image src={goldStar} alt={""} fluid/>  //score 10
                                : <Image src={halfStar} alt={""} fluid/> //score 9
                            : <Image src={emptyStar} alt={""} fluid/> //score 8 exact
                        }
                    </Col>
                </Row>
            </Container>
        ) //Possibly cut the stars to half stars? Also, write the number right after the score?
    }

}

export class Schedule extends Component {
    render() {
        return (
            <div id="schedule">
                <p>Luni: 10:30 - 22:00</p>
                <p>Marti-Vineri: 07:00 - 23:30</p>
                <p>Sambata: 10:30 - 22:00</p>
                <p>Duminica: 11:00 - 17:30</p>
                <hr></hr>
                <StarRating score={7}/>
                <hr></hr>
                <Reserve />
                <Order />
            </div>
        );
    }
}

export default Schedule;