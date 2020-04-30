import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export class BackButton extends Component {
    render() {
        return (
            <div class='My app'>
              <div class="backbutton">
                <a href="#" class='buttonlink'><img class='backbuttonstyle' src={require('../Images/BackButton.png')}></img><span>Back to restaurants!</span></a>
              </div>
            </div>
        );
    }
}

export default BackButton;