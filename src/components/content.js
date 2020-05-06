import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'

export class Content extends Component {

    render() {
        return (
            <div id="content">
                <div className="header">
                    <h2 className="text-center restauranttitle" >Restaurant McRestaurantFace</h2>
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
                            alt="Second slide"
                        />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={require('../Images/car.jpg')}
                            alt="Third slide"
                        />
                        </Carousel.Item>
                    </Carousel>
                </div>
           
           
            </div>
        );
    }
}

export default Content;