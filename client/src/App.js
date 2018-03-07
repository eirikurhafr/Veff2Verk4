import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducers from './reducers/reducers';
import Menu from './components/Menu/Menu';
import Offers from './components/Offers/Offers';
import NavigationBar from './components/NavigationBar/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <NavigationBar logoImageUrl="https://png.pngtree.com/element_pic/00/16/07/125784ca9d35135.jpg" />
                    <div className="container">
                        <Switch>
                            <Route path="/pizzas" component={Menu} />
                            <Route path="/offers" component={Offers} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/about" component={About} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </MuiThemeProvider>
        );
    };
};

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><Router><App /></Router></Provider>, document.getElementById('app'));
