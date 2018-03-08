import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import reducers from './reducers/reducers';
import Menu from './components/Menu/Menu';
import Offers from './components/Offers/Offers';
import Cart from './components/Cart/Cart';
import About from './components/About/About';
import NavigationBar from './components/NavigationBar/NavigationBar';
import PizzaDetails from './components/PizzaDetails/PizzaDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <NavigationBar logoImageUrl="https://i.imgur.com/51sJROo.jpg" />
                    <div className="container">
                        <Switch>
                            <Route exact path="/pizzas" component={Menu} />
                            <Route path="/offers" component={Offers} />
                            <Route path="/cart" component={Cart} />
                            <Route path="/about" component={About} />
                            <Route path="/:id" component={PizzaDetails} />
                            <Route exact path="/" component={Menu} />
                        </Switch>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    };
};

ReactDOM.render(<Provider store={createStore(reducers, applyMiddleware(thunk))}><Router><App /></Router></Provider>, document.getElementById('app'));
