import React, { useState } from 'react';
import styles from './assets/scss/TaskListTask.css';

function Task({no, name, done}) {

    const [check, setCheck] = useState('');
    const [visible, setVisible] = useState(true);

    const handleRemoveClick = () => {
        setVisible(false);
    }

    return (
        <li className={styles.TaskList__Task}>
            <input type='checkbox' value={check} defaultChecked={done} onChange={e => setCheck(e.target.value)}/>
            {name}
            {   
            visible 
            ? 
            <a href='#' className={styles.TaskList__Task__remove} onClick={handleRemoveClick}></a>
            : 
            null
            }
        </li>
    );
}

export default Task;