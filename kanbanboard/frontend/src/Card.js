import React, { useState } from 'react';
import styles from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({no, title, description}) {

    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className={styles.Card}>
            <div className= {showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title} onClick={() => setShowDetails(!showDetails)}>
                {title}
            </div>

            <div>
                {showDetails ?
                    <div className={styles.Card__Details}>
                        {description}
                        <TaskList no={no}/>
                    </div>:
                    <></>
                }  
            </div>
        </div>
    );
}

export default Card;