import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList(props) {
    return (
        <ul>
            <FoodListItem name={'Bread'} count={'10'} />
            <FoodListItem name={'Egg'} count={'333'} />
            <FoodListItem name={'Crocodile'} count={'1121'} />
        </ul>
    );
}

export default FoodList;