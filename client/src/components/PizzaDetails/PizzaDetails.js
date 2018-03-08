import React from 'react';
import { connect } from 'react-redux';
import { getPizza } from '../../actions/pizzaActions';

class PizzaDetails extends React.Component {
    componentDidMount() {
        console.log('got it');
        const { pizzaId } = this.props.match.params;
        console.log(pizzaId);
        const { getPizza } = this.props;
        getPizza(pizzaId);
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