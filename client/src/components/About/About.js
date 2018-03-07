import React from 'react';
import { connect } from 'react-redux';

class About extends React.Component {
    render() {
        return (
            <div className="container">
                <p>This is the About page my dudes</p>
            </div>
        )
    }

};

export default connect()(About);