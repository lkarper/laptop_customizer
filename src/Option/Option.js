import React, { Component } from 'react';
import './Option.css';

class Option extends Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        const {feature, selectedOption } = this.props;
        return (
            <div className="summary__option">
              <div className="summary__option__label">{feature}</div>
              <div className="summary__option__value">{selectedOption.name}</div>
              <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
              </div>
            </div>
          );
    }
}

export default Option;
