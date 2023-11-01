import React from 'react';
import MyComponent from './MyComponent';

function App() {
    return (
        <div id={'App'}>
            <MyComponent
                props02={12412413}
                props03={true}
                props04={{no:1, name:'리돌'}}
                props05={['javascript','react']}
                props06={() => '함수'}
                props07={'asdfasf'}
             />
        </div>  
    );
}

export {App};