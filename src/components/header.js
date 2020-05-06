import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export class Header extends Component {
    render() {
        return (
            <div id="header">
                <style>
                @import url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@1,300&display=swap");
                </style>
                <h2>Restaurant McRestaurantFace</h2>
            </div>
        );
    }
}

export default Header;