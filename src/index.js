import React from 'react';
import ReactDOM from 'react-dom';
import '/Users/Manuel/WebstormProjects/business_card_react/src/index.css';
import picture from '/Users/Manuel/WebstormProjects/business_card_react/src/picture.jpg';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/*

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();





// React component for form inputs
class CardInput extends React.Component {
    render() {
        return(
            <fieldset>
                <input name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
            </fieldset>
        )
    }
}

// React component for textarea
class CardTextarea extends React.Component {
    render() {
        return(
            <fieldset>
                <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required ></textarea>
            </fieldset>
        )
    }
}

// React component for form button
class CardBtn extends React.Component {
    render() {
        return(
            <fieldset>
                <button className={this.props.className} type={this.props.type} value={this.props.value}>{this.props.value}</button>
            </fieldset>
        )
    }
}

// React component for social profile links
class CardProfileLinks extends React.Component {
    render() {
        const profileLinks = ['twitter', 'linkedin', 'github', 'facebook'];

        const completeProfileLinks =[
            {id:0, name:'twitter', linker:'https://twitter.com/xMANNYxFR3SHx1?lang=en'},
            {id:1, name:'linkedin', linker:'https://www.linkedin.com/in/manuel-ramos-gonzalez-60244010a/'},
            {id:2, name:'github', linker:'https://github.com/xmannyxfreshx1'},
            {id:3, name:'facebook', linker:'https://www.facebook.com/profile.php?id=100000307123534'}
        ];

        //function mappingFunction() {(props)=>{<li key={props.id}>{props.name}</li>};

        const actualLinks = ['https://twitter.com/xMANNYxFR3SHx1?lang=en', 'https://www.linkedin.com/in/manuel-ramos-gonzalez-60244010a/','https://github.com/xmannyxfreshx1','https://www.facebook.com/profile.php?id=100000307123534'];


        const linksList = profileLinks.map((link, index) =>
            <li key={index}><a href={link}><i className={'fab fa-' + link}></i></a></li>
        );

        return(
            <div className='card-social-links'>
                <ul className='social-links'>
                    <li><a href='https://twitter.com/xMANNYxFR3SHx1?lang=en'><i className={'fab fa-twitter'}></i></a></li>
                    <li><a href='https://www.linkedin.com/in/manuel-ramos-gonzalez-60244010a/'><i className={'fab fa-linkedin'}></i></a></li>
                    <li><a href='https://github.com/xmannyxfreshx1'><i className={'fab fa-github'}></i></a></li>
                    <li><a href='https://www.facebook.com/profile.php?id=100000307123534'><i className={'fab fa-facebook'}></i></a></li>
                </ul>
            </div>
            /*<div className='card-social-links'>
                <ul className='social-links'>
                    {linksList}
                </ul>
            </div>
        )
    }
}

// React component for the frontside of the card
class CardFront extends React.Component {
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

// React component for the backside of the card
class CardBack extends React.Component {
    render() {
        return(
            <div className='card-side side-back'>
                <div className='container-fluid'>
                    <h1>Let's get in touch!</h1>

                    <form formAction='' className='card-form'>
                        <div className='row'>
                            <div className='col-xs-6'>
                                <CardInput name='contactFirstName' id='contactFirstName' type='text' placeholder='Your first name' />
                            </div>

                            <div className='col-xs-6'>
                                <CardInput name='contactLastName' id='contactLastName' type='text' placeholder='Your last name' />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-xs-6'>
                                <CardInput name='contactEmail' id='contactEmail' type='email' placeholder='Your email address' />
                            </div>

                            <div className='col-xs-6'>
                                <CardInput name='contactSubject' id='contactSubject' type='text' placeholder='Subject' />
                            </div>
                        </div>

                        <CardTextarea name='contactMessage' id='contactMessage' placeholder='Your message' />

                        <CardBtn className='btn btn-primary' type='submit' value='Send message' />
                    </form>

                    <CardProfileLinks />
                </div>
            </div>
        )
    }
}

//React component for the card (main component)
class Card extends React.Component {
    render() {
        return(
            <div className='card-container'>
                <div className='card-body'>
                    <CardBack />

                    <CardFront />
                </div>
            </div>
        )
    }
}


// Render Card component

*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
