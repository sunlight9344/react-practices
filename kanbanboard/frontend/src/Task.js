import React, { useEffect, useState } from 'react';
import styles from './assets/scss/TaskListTask.css';

const Task = ({deleteTask, updateTask, no, done, name}) => {

    return (
        <li className={styles.TaskList__Task}>
            <input
                type='checkbox'
                checked={done === 'Y'}
                onChange={()=>updateTask(no, done)}/>
            {name}    
            <a href='#' className={styles.TaskList__Task__remove} onClick={()=>deleteTask(no)} />
        </li>
    );
};

export default Task;