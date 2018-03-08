import React from 'react';
import { connect } from 'react-redux';
//import DetailedPizza from '../DetailedPizza/DetailedPizza';
import { getPizza } from '../../actions/pizzaActions';

class PizzaDetails extends React.Component {
    componentDidMount() {
        console.log('got it');
        const { getPizza } = this.props;
        const { id } = this.props.match.params;
        getPizza(id);
    }
    render() {
        const { pizzaDetails } = this.props;
        return (
            <div className="pizza-wrapper">
                <div className="pizza-image">
                    <img src={pizzaDetails.image} alt=""/>
                </div>
                <div className="pizza-name">{pizzaDetails.name}</div>
                <div className="pizza-description">{pizzaDetails.description}</div>
                <div className="pizza-price">{pizzaDetails.price}</div>
            </div>
        )
    }

};

const mapStateToProps = ({ pizzaDetails }) => {
    return { pizzaDetails }
}

export default connect(mapStateToProps, { getPizza })(PizzaDetails);