import React, { Component } from 'react';
import Navbar from './navbar';
import Product from './product';
import ShoppingCart from './shopping-cart'

class App extends Component {
    state = {
        items: []
      } 

    addItem = (amount, name, price) => {
        const updatedItems = [...this.state.items];
        const existingItem = updatedItems.find(item => item.name === name);
    
        if(existingItem){
            existingItem.amount++;
        }else{
            updatedItems.push({
                amount,
                name,
                price
            });
        }
        this.setState({items: updatedItems});
    }

    render() { 
        return <>
            <Navbar/>
            <div className="main-container">
                <div className = "product-container">
                    <Product onAdd={() => this.addItem(1, 'Äpfel', 4.99)} image="apple.jpg" title="Apples" description="Saftig, süß und ein echter Klassiker. Unsere Äpfel sind die perfekte Balance aus Frische und Geschmack - ideal für jeden Tag." />
                    <Product onAdd={() => this.addItem(1, 'Gurken', 2.99)} image="cucumber.jpg" title="Cucumbers" description="Frisch, knackig und erfrischend - unsere Gurken sind perfekt für Salate, Smoothies oder einfach als gesunder Snack zwischendurch." />
                    <Product onAdd={() => this.addItem(1, 'Tomaten', 1.99)} image="tomatoe.jpg" title="Tomatoes" description="Sonnengereift und voller Geschmack! Diese Tomaten bringen Farbe und Aroma auf deinen Teller - egal ob roh, gekocht oder gegrillt."/>
                    <Product onAdd={() => this.addItem(1, 'Birnen', 3.49)} image="pear.jpg" title="Pears" description="Zart, aromatisch und leicht süß - Birnen sind nicht nur lecker, sondern auch vollgepackt mit wertvollen Nährstoffen."/>
                </div>
                <ShoppingCart items={ this.state.items } />
            </div>
            </> 
    }
}
 
export default App;