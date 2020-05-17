import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './Review';
import FormReview from './FormReview';
import axios from "axios";
import ReviewButton from './ReviewButton';

export class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
       providerId: props.providerId,
       reviews: [],
       isLoaded: false,
       isEmptyState: false
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:4001/api/reviews/?providerId=" + this.state.providerId)
      .then((response) => {
        this.setState({
          reviews: response.data.data.reviews,
          isLoaded: true,
        });
      });
  }

  

  render() {
    if (!this.state.isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
          <div id="reviewsdiv" class="shadow p-3 mb-5 bg-F3F3F3 rounded">
          <p className="menuTitle">Reviews</p>
          
         <ReviewButton />
          {this.state.reviews.map(item =>(
              <div>
                <div className="line"></div>
                <Review
                  id={item._id}
                  userID={item.reviewerId}
                  score={item.score}
                  content={item.description}
                />
              </div>
              ))
          }
        </div>
      );
    }
}
}

export default Menu;
