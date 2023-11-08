import React, {useState, useEffect} from 'react';
import styles from './assets/scss/Kanbanboard.css';
import CardList from './CardList';

function Kanbanboard() {

    const [cards, setCards] = useState(null);
    
    const fetchCards = async() => {
        try{
            const response = await fetch('/api/card', {
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

            setCards(json.data);

        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {fetchCards()},[]);

    
    return (
        cards ? 
        <div className={styles.KanbanBoard}>
            <CardList Title='ToDo'  cards={cards.filter(card => card.status === 'ToDo')} />
            <CardList Title='Doing' cards={cards.filter(card => card.status === 'Doing')} />
            <CardList Title='Done'  cards={cards.filter(card => card.status === 'Done')} />
        </div>
        :
        <></>
    );
    
}

export default Kanbanboard;