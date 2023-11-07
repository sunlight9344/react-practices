import React, { useEffect, useState } from 'react';
import styles from './assets/scss/TaskListTask.css';

const Task = ({no, done, name}) => {

    const [tempDone, setTempDone] = useState(done);

    const updateDone = async () => {
        try{
            const response = await fetch(`/api/task/${no}?done=${tempDone=='Y' ? 'N' : 'Y'}`, {
                method: 'put',
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

            setTempDone(json.data.done);
            console.log(json.data);

        } catch(err) {
            console.log(err);
        }
    }

    return (
        <li className={styles.TaskList__Task}>
            <input
                type='checkbox'
                checked={tempDone == 'Y' ? true : false}
                onChange={updateDone}/>
            {name}    
            <a href='#' className={styles.TaskList__Task__remove} onClick={()=>{}} />
        </li>
    );
};

export default Task;