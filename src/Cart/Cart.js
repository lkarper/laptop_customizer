import React, { Component } from 'react';
import Option from '../Option/Option';
import Total from '../Total/Total';
import './Cart.css';

class Cart extends Component {
    render() {

        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            return (
                <Option
                    key={idx} 
                    featureHash={featureHash}
                    feature={feature}
                    selectedOption={selectedOption}
                />
            )
        });
  
        return (
            <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <Total 
                selected={this.props.selected}
            />
          </section>
        )
    }
}

export default Cart;