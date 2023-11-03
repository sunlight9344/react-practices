import React, { useState } from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({title, description, tasks}) {

    const [showDetails, setShowDetails] = useState(true);

    return (
        <div className={styles.Card}>
            <div className= {showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title} onClick={() => setShowDetails(!showDetails)}>
                {title}
            </div>

            <div>
                {description}
                {showDetails ? <TaskList tasks={tasks} /> : null}
            </div>
        </div>
    );
}

export default Card;