import React from 'react';
import { connect } from 'react-redux';
import DetailedPizza from '../DetailedPizza/DetailedPizza';
import { getPizza } from '../../actions/pizzaActions';

class PizzaDetails extends React.Component {
    componentDidMount() {
        const { getPizza } = this.props;
        getPizza();
    }
    render() {
        const { pizzaDetails } = this.props;
        return (
            <div className="container">
                {pizzaDetails.map(p => <DetailedPizza key={p.id} pizzaDetails={p} />)}
            </div>
        )
    }

};

const mapStateToProps = ({ pizzaDetails }) => {
    return { pizzaDetails }
}

export default connect(mapStateToProps, { getPizza })(PizzaDetails);