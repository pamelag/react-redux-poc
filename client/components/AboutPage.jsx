import React, {Component} from 'react';
import ContactForm from './ContactForm.jsx';

class AboutPage extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center">About Page</h1>

                    <ContactForm mystate={this.props.params.appState} myaction={this.props.params.actions}/>
                </div>
            </div>
        )
    }
}

export default AboutPage