import React, { Component } from 'react';
import CardFront from './Components/CardFront';
import CardBack from './Components/CardBack';
import '/Users/Manuel/WebstormProjects/business_card_react/src/App.css';

class App extends Component {
  render() {
    return (
        <div className='card-container'>
            <div className='card-body'>
                <CardBack />

                <CardFront />
            </div>
        </div>
    );
  }
}

export default App;
