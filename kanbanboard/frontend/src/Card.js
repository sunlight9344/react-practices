import React from 'react';
import CardTitle from './CardTitle';
import CardDetails from './CardDetails';
import styles from './assets/scss/Card.scss';

function Card(props) {
    return (
        <div className={styles.Card}>
            Card
            <CardTitle />
            <CardDetails />
        </div>
    );
}

export default Card;