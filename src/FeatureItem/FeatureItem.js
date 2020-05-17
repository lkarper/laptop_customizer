import React, { Component } from 'react';
import slugify from 'slugify';
import './FeatureItem.css';

class FeatureItem extends Component {
    render() {
        const { itemHash, feature, item, checked } = this.props;
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return (
            <div className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={checked}
                    onChange={e => this.props.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
            </div>
          );
    }
}

export default FeatureItem;
