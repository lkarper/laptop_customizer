import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import slugify from 'slugify';
import './Feature.css';

class Feature extends Component {
    render() {
        const options = this.props.features[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <FeatureItem
                    key={itemHash} 
                    itemHash={itemHash}
                    feature={this.props.feature}
                    item={item}
                    updateFeature={this.props.updateFeature}
                    checked={item.name === this.props.selected[this.props.feature].name}
                />
            );
        });
            
        return (
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                <h3>{this.props.feature}</h3>
                </legend>
                {options}
            </fieldset>
            );
    }
}

export default Feature;