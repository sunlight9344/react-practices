import React from 'react';
import data from './assets/json/data';
import styles from './assets/scss/Kanbanboard.scss';
import CardList from './CardList';

function Kanbanboard(props) {
    
    const ToDoCards = data.filter(card => card.status === 'ToDo');
    const DoingCards = data.filter(card => card.status === 'Doing');
    const DoneCards = data.filter(card => card.status === 'Done');
    
    return (
        // <CardList Title="Todo" cards={[]} />
        <div className={styles.KanbanBoard}>
            <CardList Title='ToDo' cards={ToDoCards} />
            <CardList Title='Doing' cards={DoingCards} />
            <CardList Title='Done' cards={DoneCards} />
        </div>
    );
}

export default Kanbanboard;