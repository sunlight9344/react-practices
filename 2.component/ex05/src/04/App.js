import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        setTicks(ticks+1);
    }, []);

    return (
        <>
            <span>{ticks}</span>
            <Clock
                message={'ex05: useEffect Hook example'}
                hours={2}
                minutes={9}
                seconds={42}/>
        </>
    );
}