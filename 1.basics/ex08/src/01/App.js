import React from 'react';

const str = '변수요';
function App() {
    return (
        <div>
            <h1>뿌</h1>
            <p>01 HTML과의 차이점</p>
            {/*
                1.속성은 CamelCase
            */}

            <input type='text' maxLength='10' />
            {/*
                2. Element는 꼭 닫는다.
            */}

            {/*
                3. JSX Element의 속성 이름은 DOM API와 일치한다.
                <h4 id='title' class='header'>타이틀</h4>
                document.getElementById('title').className = 'header';
            */}
            <h4 id='title' className='header'>타이틀</h4>
        </div>         
    );
}

export {App};