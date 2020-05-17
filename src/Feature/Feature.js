import React, { Component } from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import slugify from 'slugify';
import './Feature.css';

class Feature extends Component {
    render() {
        const { features, feature, updateFeature, selected, featureHash } = this.props;
        const options = features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <FeatureItem
                    key={itemHash} 
                    itemHash={itemHash}
                    feature={feature}
                    item={item}
                    updateFeature={updateFeature}
                    checked={item.name === selected[feature].name}
                />
            );
        });
            
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        );
    }
}

export default Feature;
