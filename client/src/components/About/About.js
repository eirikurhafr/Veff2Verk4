import React from 'react';
import { connect } from 'react-redux';
import { getAllPizzas } from '../../actions/pizzaActions';

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <p>This is the About page my dudes</p>
            </div>
        )
    }

};

export default connect(mapStateToProps)(About);