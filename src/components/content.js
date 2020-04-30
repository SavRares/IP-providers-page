import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'

export class Content extends Component {

    render() {
        return (
            <div id="content">
                <div id="tagslist">
                    <ul>
                        <li class="tag"><a href="#">Tag1</a></li>
                        <li class="tag"><a href="#">Tag2</a></li>
                        <li class="tag"><a href="#">Tag3</a></li>
                        <li class="tag"><a href="#">Tag4</a></li>
                    </ul>
                </div>
                <hr></hr>
                <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../Images/car.jpg')}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../Images/car.jpg')}
                    alt="First slide"
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={require('../Images/car.jpg')}
                    alt="First slide"
                />
                </Carousel.Item>
            </Carousel>
            <hr></hr>
            <p> Some informations about the Restaurant here </p>
            </div>
        );
    }
}

export default Content;