import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        // this.val = this.props.begin;
        this.state = {
            val: this.props.begin
        }
    }

    render() {
        return (
            <div>
                <button onClick={
                    e => {

                        // 이게 안되 안되 왜 안 돼
                        // 여기에서 안되는거임 됐었는데 직접 호출하는 건 아니다
                        // 직접 호출하면 안 돼
                        // this.val += 1;
                        // console.log(this.val);
                        // this.render();
                        this.setState({
                            val: this.state.val + this.props.step
                        });

                    }
                }>
                    <strong>+</strong>
                </button>
                {' '}
                <span>
                {
                    // this.val
                    this.state.val
                }
                </span>
            </div>
        );
    }
}