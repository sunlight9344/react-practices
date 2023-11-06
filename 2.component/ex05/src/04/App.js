import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
        setTicks(prev => prev+1);
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return () => {
            clearInterval(timerId);
        };
    });
    
    return (
        <>
            <Clock
                message={'ticks : ' + ticks}
                hours={date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}
                minutes={date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}
                seconds={date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()} />
        </>
    );
}