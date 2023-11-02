import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler() {
        console.log('TitleBar01 clicked !!!')
    };

    render() {
        return (
            <div>
                <h6 onClick={this.onClickHandler}>
                    TitleBar01
                </h6>
            </div>
        )
    }
}