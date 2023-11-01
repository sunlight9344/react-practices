import React from 'react';

function App() {

    const h1Style = {
        width: 200,
        color: 'aqua',
        backgroundColor: '#333'
    }

    return (
        <div id={'App'}>
            <h1 style={h1Style}>inline styling</h1>
        </div>  
    );
}

export {App};