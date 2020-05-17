import React, { Component } from 'react';
import Feature from '../Feature/Feature';
import './CustomizeForm.css';

class CustomizeForm extends Component {

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <Feature
                    key={idx} 
                    feature={feature}
                    updateFeature={this.props.updateFeature}
                    featureHash={featureHash}
                    features={this.props.features}
                    selected={this.props.selected}
                />
            );
        });

        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
        );
    }
}

export default CustomizeForm;