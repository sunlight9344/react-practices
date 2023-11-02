import React from 'react';

function TitleBar02(props) {

    const onClickHandler = function() {
        console.log('TitleBar02 clicked !!!')
    };

    return (
        <div>
            <h6 onClick={onClickHandler}>TitleBar02</h6>
        </div>
    );
}

export default TitleBar02;