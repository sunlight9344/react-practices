import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state ={ currentTime: new Date(), ticks: 0 }
    }
    
    componentDidMount() {
        this.intervalid = setInterval(() => {
            this.setState({currentTime: new Date()});
            this.setState({ticks: this.state.ticks+1})
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const hours = this.state.currentTime.getHours();
        const minutes = this.state.currentTime.getMinutes();
        const seconds = this.state.currentTime.getSeconds();
        return (
            <div className='clock-display'>
                <h2>ticks:{this.state.ticks}</h2>
                    <Clock 
                        hours={hours < 10 ? '0' + hours : hours}
                        minutes={minutes < 10 ? '0' + minutes : minutes}
                        seconds={seconds < 10 ? '0' + seconds : seconds}
                        session={this.state.currentTime.getHours() < 12 ? 'pm' : 'am'}
                    />
            </div>
        );
    }
}