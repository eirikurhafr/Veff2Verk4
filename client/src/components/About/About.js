import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>About us</h1>
                <p>Single pizzas in your area has the single best pizzas in your area. Get the pizza it's the best. Thanks. Our pizza chefs are award winning pizza makers with experience all over your area. So come on down and get you pizza. First 5 customers every day get a FREE slice/hug. Good music playing all day long.</p>
                <h3>Location</h3>
                <p>Your area.</p>
                <h3>Telephone</h3>
                <p>1-800-best-pizza-in-your-area.</p>
                <img src="https://i.imgur.com/SdaR26h.png" alt="" />
            </div>
        )
    }

};

export default connect()(About);