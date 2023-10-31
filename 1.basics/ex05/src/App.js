import React from 'react';

function App() {
    // const App = document.createElement('div');
    // App.textContent = "Hello React PPIP";

    const App = React.createElement('div', null, 'Hello World');
    return App;                 

    // THIS IS JSX !!!!!!!!!!!!!!!!
    // 하지만 바벨을 조금 해봐야한다. 20kg 짜리...
    // return (
    //     <div>     
    //         hello World
    //         <ul>
    //             {
    //                 ['1st', '2nd'].map((e) => {
    //                     return <li>${e}</li>;
    //                 })
    //             }
    //         </ul>
    //     </div>
    // );
}

export {App};