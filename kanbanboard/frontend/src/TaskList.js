import React, {useEffect, useState} from 'react';
import Task from './Task';
import styles from './assets/scss/TaskListTask.css';

function TaskList({no}) {

    const [tasks, setTasks] = useState(null);

    const deleteTask = async (taskNo) => {
        try{
            const response = await fetch(`/api/task/${taskNo}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: null
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            setTasks(tasks.filter(task => task.no !== taskNo));

        } catch(err) {
            console.log(err);
        }
    }
    
    const fetchTasks = async() => {
        try{
            const response = await fetch(`/api/task?cardNo=${no}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: null
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            setTasks(json.data);

        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {fetchTasks()},[]);

    if (tasks) {
        return (
            <div className='TaskList'>
                <ul>
                    {tasks.map((task,i) => <Task key={i} no={task.no} name={task.name} done={task.done} deleteTask={deleteTask} />)}
                </ul>
                <input
                    className={styles.TaskList__add_task}
                    type='text'
                    placeholder={'테스크 추가하기'}
                ></input>
            </div>
        );
    }
}

export default TaskList;