import React, {Component} from 'react';
//import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();
        this.props.myaction.submitFormAction({firstName: this.refs.firstName.value});
    }

    render() {
        //const { handleSubmit } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input name="firstName" ref="firstName" className="form-control" placeholder="John" type="text"/>
                </div>

                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        )
    }

}

/*ContactForm = reduxForm({
    form: 'contact' // a unique name for this form
})(ContactForm);*/

export default ContactForm;