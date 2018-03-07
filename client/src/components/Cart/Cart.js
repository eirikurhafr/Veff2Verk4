import React from 'react';
import { connect } from 'react-redux';
//import Pizza from '../Pizza/Pizza';

class Cart extends React.Component {
    //componentDidMount() {
    //  const { getAllPizzas } = this.props;
    //    getAllPizzas();
    //}
    render() {
    //      const { pizza } = this.props;
        return (
            <div className="container">
                <p> It's a me... Cartyo </p>
            </div>
        )
    }

};

/*const mapStateToProps = ({pizza}) => {
    return { pizza }
}*/

export default connect()(Cart);