import React, { Component } from 'react';
import Navbar from './navbar';
import Product from './product';

let products = ["Apple", "Banana", "Lemons", "Strawberry", "Plums"];
let imageSources = ["/assets/img/apple.jpg", "/assets/img/banana.jpg", "/assets/img/lemons.jpg", "/assets/img/strawberries.jpg", "/assets/img/plums.jpg"];


class App extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar />
            <div className = "product-container">
            {products.map((product, idx) => (
                <Product key={idx} title={product} source={imageSources[idx]}/>
            ))}

            </div>
            </> 
        );
    }
}
 
export default App;