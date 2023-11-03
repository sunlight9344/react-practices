import React from 'react';
import Task from './Task';
import styles from './assets/scss/TaskListTask.css';

function TaskList({tasks}) {
    return (
        <div className='TaskList'>
            <ul>
                {tasks.map((task,i) => <Task key={i} no={task.no} name={task.name} done={task.done} />)}
            </ul>
            <input
                className={styles.TaskList__add_task}
                type='text'
                placeholder={'테스크 추가하기'}
            ></input>
        </div>
    );
}

export default TaskList;