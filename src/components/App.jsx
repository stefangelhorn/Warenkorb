import React, { Component } from 'react';
import Navbar from './navbar';
import Product from './product';

class App extends Component {
    state = {  } 
    render() { 
        return <>
            <Navbar/>
            <div className = "product-container">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            </> 
    }
}
 
export default App;