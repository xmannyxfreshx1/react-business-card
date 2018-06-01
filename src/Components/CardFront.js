import React from 'react';
import picture from '/Users/Manuel/WebstormProjects/business_card_react/src/picture.jpg';

export  default class CardFront extends React.Component {
    render() {
        return(
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <img width="358" height="458" src={picture} alt="picture"/>
                        </div>

                        <div className='col-xs-6 side-front-content'>
                            <h2>Durham based</h2>

                            <h1>React Software Engineer</h1>

                            <p>Manuel</p>

                            <p>He is currently an intern for Code the Dream.</p>

                            <p>Passion for building great apps!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}