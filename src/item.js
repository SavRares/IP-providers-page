import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';
import ModalProduct from '../comenzi&rezervari/productModal/ModalProduct';
import axios from 'axios';

const urlApiCourses = 'http://localhost:4000/api/courses/';

const getProduct = async (id) => {
  let product = {};
  await axios({
    method: 'get',
    url: urlApiCourses + id,
  })
    .then((response) => {
      product = response.data.data[0];
    })
    .catch((error) => {
      console.log(error);
    });
  return product;
};

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemPicture: props.itemPicture,
      itemName: props.itemName,
      itemPrice: props.itemPrice,
      productById: {},
      modalShow: false,
    };
  }

  render() {
    return (
      <div id="menuitem">
        <div
          
          onClick={async () => {
            await this.setState({ modalShow: true }, async () => {
              await getProduct(this.props.itemId).then((result) =>
                this.setState({ productById: result })
              );
            });
          }}
        >
          <div class="photo">
            <img src={this.state.itemPicture} alt={'Item Picture'}></img>
          </div>
          <div class="utility">
            <div class="name">{this.state.itemName}</div>
            <div class="price">{this.state.itemPrice} $</div>
          </div>
        </div>
        <ModalProduct
          show={this.state.modalShow}
          onHide={async () => {
            await this.setState({ modalShow: false }
            );
          }}
          product={this.state.productById}
        />
      </div>
    );
  }
}

export default Item;
