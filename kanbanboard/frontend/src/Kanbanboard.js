import React from 'react';
import data from './assets/json/data';
import styles from './assets/scss/Kanbanboard.css';
import CardList from './CardList';

function Kanbanboard(props) {
    
    return (
        // <CardList Title="Todo" cards={[]} />
        <div className={styles.KanbanBoard}>
            <CardList Title='ToDo'  cards={data.filter(card => card.status === 'ToDo')} />
            <CardList Title='Doing' cards={data.filter(card => card.status === 'Doing')} />
            <CardList Title='Done'  cards={data.filter(card => card.status === 'Done')} />
        </div>
    );
}

export default Kanbanboard;