import React from 'react';

export default class CardBtn extends React.Component {
    render() {
        return(
            <fieldset>
                <button className={this.props.className} type={this.props.type} value={this.props.value}>{this.props.value}</button>
            </fieldset>
        )
    }
};