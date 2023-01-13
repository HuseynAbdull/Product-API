import React, { Component } from 'react'


class CardItem extends Component {
  render(props) {
    const{title,image,price} =this.props;
    return (
      
       
        <div className="col-lg-4 box my-2">
        <div className="card usercard">
        <img src={image} class="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p>{price}</p>
         
        </div>
        </div>
        </div>
    )
  }
}

export default CardItem