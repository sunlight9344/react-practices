import React from 'react';
import './assets/scss/App.css';
import Kanbanboard from './Kanbanboard';

function App() {
    return (
        <div id={'App'} className={'App'}>
            <Kanbanboard />
        </div>  
    );
}

export {App};