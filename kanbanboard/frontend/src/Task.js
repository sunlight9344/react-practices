import React, { useState } from 'react';
import styles from './assets/scss/TaskListTask.scss';

function Task({no, name, done}) {

    const [check, setCheck] = useState('');
    const [isDelete, setIsDelete] = useState(true);

    const handleRemoveClick = () => {
        setIsDelete(false);
    }

    return (
        <li className={styles.TaskList__Task}>
            <input type='checkbox' value={check} defaultChecked={done} onChange={e => setCheck(e.target.value)}/>
            {name}
            {   
            isDelete 
            ? 
            <a href='#' className={styles.TaskList__Task__remove} onClick={handleRemoveClick}></a> 
            : 
            null
            }
        </li>
    );
}

export default Task;