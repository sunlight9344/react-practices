import React from 'react';
import styles from './assets/scss/CardList.css';
import Card from './Card';

function CardList({Title, cards}) {
    return (
        <div className={styles.CardList}>
            <h1>{Title}</h1>
            {cards.map((card,i) => <Card key={i} no={card.no} title={card.title} description={card.description} status={card.status} />)}
        </div>
    );
}

export default CardList;