import React from 'react';
import { connect } from 'react-redux';
import Offer from '../Offer/Offer';
import { getAllOffers } from '../../actions/offerActions';

class Offers extends React.Component {
    componentDidMount() {
        const { getAllOffers } = this.props;
        getAllOffers();
    }
    render() {
        const { offers } = this.props;
        return (
            <div className="container">
                {offers.map(p => <Offer key={p.id} offers={p} />)}
            </div>
        )
    }
};

const mapStateToProps = ({offers}) => {
    return { offers }
}

export default connect(mapStateToProps, { getAllOffers })(Offers);