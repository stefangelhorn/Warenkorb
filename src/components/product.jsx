import React, { Component } from 'react';



class Product extends Component {
    state = {  } 
    render() { 
        const {image, title, description} = this.props;
        return <div className="card" styles={{width: '18rem'}}>
        <img src={"/assets/img/" + image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button onClick={this.props.onAdd} href="/" className="btn btn-primary">Hinzufügen</button>
        </div>
      </div>
    }
}
 
export default Product;