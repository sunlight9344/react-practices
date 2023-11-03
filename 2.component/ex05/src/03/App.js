import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state ={ currentTime: this._getCurrentTime() }
    }
    
    _getCurrentTime() {
        const date = new Date();
        return {
            date
        }
    }

    componentDidMount() {
        this.intervalid = setInterval(() => {
            this._getCurrentTime;
        }, 1000);
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                    <Clock 
                        hours={this.state}
                        minutes={32}
                        seconds={14}
                        session={'pm'}
                    />
            </div>
        );
    }
}