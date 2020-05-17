import React, { Component } from 'react';
import Feature from '../Feature/Feature';
import './CustomizeForm.css';

class CustomizeForm extends Component {
    render() {
        const { updateFeature, features, selected } = this.props;
        const featuresArray = Object.keys(features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <Feature
                    key={idx} 
                    feature={feature}
                    updateFeature={updateFeature}
                    featureHash={featureHash}
                    features={features}
                    selected={selected}
                />
            );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {featuresArray}
            </form>
        );
    }
}

export default CustomizeForm;
