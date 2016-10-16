import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import Page from './Page.jsx';
import * as SampleActions from '../actions'

class App extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render(){

        const { appState, actions } = this.props;
        this.props.params.appState = appState;
        this.props.params.actions = actions;



        return (
            <div>
                <Header/>
                <Page appState={appState} actions={actions}>
                    {this.props.children}
                </Page>
            </div>
        );
    }
}
App.propTypes = {
    appState: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {

    return {
        appState: state.stateReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(SampleActions, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)