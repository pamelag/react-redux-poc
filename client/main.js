import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.jsx';
import HomePage from './components/HomePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import NoMatch from './components/NoMatch.jsx';
import reducer from './reducers';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

const store = createStore(reducer);

console.log("store", store);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('react_redux_demo_app')
)