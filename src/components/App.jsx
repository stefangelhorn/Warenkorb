import React, { Component } from 'react';
import Navbar from './navbar';
import Product from './product';

class App extends Component {
    state = {  } 
    render() { 
        return <>
            <Navbar/>
            <div className = "product-container">
                <Product image="apple.jpg" title="Apples" description="Saftig, süß und ein echter Klassiker. Unsere Äpfel sind die perfekte Balance aus Frische und Geschmack - ideal für jeden Tag." />
                <Product image="cucumber.jpg" title="Cucumbers" description="Frisch, knackig und erfrischend - unsere Gurken sind perfekt für Salate, Smoothies oder einfach als gesunder Snack zwischendurch." />
                <Product image="tomatoe.jpg" title="Tomatoes" description="Sonnengereift und voller Geschmack! Diese Tomaten bringen Farbe und Aroma auf deinen Teller - egal ob roh, gekocht oder gegrillt."/>
                <Product image="pear.jpg" title="Pears" description="Zart, aromatisch und leicht süß - Birnen sind nicht nur lecker, sondern auch vollgepackt mit wertvollen Nährstoffen."/>
            </div>
            </> 
    }
}
 
export default App;