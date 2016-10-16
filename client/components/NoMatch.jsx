import React, {Component} from 'react';

class NoMatch extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1>404 Page</h1>
                </div>
            </div>
        )
    }
}

export default NoMatch