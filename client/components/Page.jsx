import React, {Component} from 'react';

class Page extends Component {

    constructor(props) {
        super(props);
        console.log("Page props", props)
    }


    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default Page