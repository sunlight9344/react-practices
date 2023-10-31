import React from 'react';

function Clock(props) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    return (
        /*
            comment01: jsx 밖은 javascript 구문(주석 구문)이 가능하다.
        */
        <div
            /*
                이따구로도 가능 -> 비추
            */>
            {/* 
                this is best 계속 이렇게 했었는데 맞나 싶었음 ㅋㅋ
                {('0' + (hours > 12 ? hours-12 : hours)).slice(-2)} 
            */}
            {/* 
                Tip: JSX는 HTML이 아니다!
                그러니까 <!-- --> 주석은 사용할 수 없다.
                // <-- 이것도 안된다. 그냥 화면에 나오게 됨
            */}
            {hours}
            {':'}
            {('0' + minutes).slice(-2)}
            {':'}
            {('0' + seconds).slice(-2)}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    );
}

export default Clock;