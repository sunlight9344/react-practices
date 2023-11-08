import React, {useEffect, useState, useRef} from 'react';
import Task from './Task';
import styles from './assets/scss/TaskListTask.css';
import update from 'react-addons-update';

function TaskList({no}) {

    const [tasks, setTasks] = useState(null);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask(e.target.value);
            e.target.value = '';
        }
    };

    const addTask = async (name) => {
        const task = {
            name: name,
            done: 'N',
            cardNo: no
        }
        try{
            const response = await fetch('/api/task', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }

            setTasks([ json.data,...tasks]);

        } catch(err) {
            console.log(err);
        }
    }

    const updateTask = async (taskNo, done) => {
        try{
            const response = await fetch(`/api/task/${taskNo}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: `done=${done==='Y' ? 'N' : 'Y'}`
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`)
            }
            
            const index = tasks.findIndex(task => task.no === json.data.no)
            const newTasks = update(tasks , {
                [index]: {
                    done: {
                        $set: json.data.done
                    } 
                }
            });

            setTasks(newTasks);

        } catch(err) {
            console.log(err);
        }
    }

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
                    {tasks?.map((task,i) => <Task key={i} 
                                            no={task.no} 
                                            name={task.name} 
                                            done={task.done} 
                                            deleteTask={deleteTask} 
                                            updateTask={updateTask}/>)}
                </ul>
                <input
                    className={styles.TaskList__add_task}
                    type='text'
                    placeholder={'테스크 추가하기'}
                    onKeyDown={handleKeyDown}
                ></input>
            </div>
        );
    }
}

export default TaskList;