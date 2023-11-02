import React from 'react';
import data from './assets/json/data';
import styles from './assets/scss/Kanbanboard.scss';
import CardList from './CardList';

function Kanbanboard(props) {
    
    const ToDoCards = data.filter(card => card.status === 'ToDo');
    console.log(ToDoCards);
    
    return (
        // <CardList Title="Todo" cards={[]} />
        <div className={styles.Kanbanboard}>
            Kanbanboard
            {
                <CardList />
            }
        </div>
    );
}

export default Kanbanboard;