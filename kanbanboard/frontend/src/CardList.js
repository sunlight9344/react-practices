import React from 'react';
import styles from './assets/scss/CardList.scss';
import Card from './Card';

function CardList(props) {
    return (
        <div className={styles.CardList}>
            CardList
            <Card />
        </div>
    );
}

export default CardList;