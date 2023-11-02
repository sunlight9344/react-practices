import React, { useState } from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({title, description, tasks}) {

    const [validCheck, setValidCheck] = useState(true);
    return (
        <div className={styles.Card}>
            <div className= {validCheck && tasks.length ? styles.Card__Title__is_open : styles.Card__Title} onClick={e => setValidCheck(!validCheck)}>
                {/* {validCheck && tasks.length ? styles.Card__Title : styles.Card__Title} onClick={e => setValidCheck(!validCheck)} */}
                {title}
            </div>
            <div>
                {description}
                {validCheck ? <TaskList tasks={tasks} /> : null}
            </div>
        </div>
    );
}

export default Card;