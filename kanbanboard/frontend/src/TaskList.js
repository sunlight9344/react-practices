import React from 'react';
import Task from './Task';

function TaskList({tasks}) {
    return (
        <div className='TaskList'>
            <ul>
                {tasks.map((task,i) => <Task key={i} no={task.no} name={task.name} done={task.done} />)}
            </ul>
        </div>
    );
}

export default TaskList;