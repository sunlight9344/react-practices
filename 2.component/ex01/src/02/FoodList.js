import React from 'react';
import FoodListItem from './FoodListItem';

function FoodList({foods}) {
    // 첫번째 방법인데 이렇게는 잘 안쓴다 왜냐하면 return 아래 코드 양이 엄청 많은데 
    // 위에서 변수를 선언하고 하나하나 찾기 힘들기 때문이다.
    // foods.forEach((food) => {
    //     foodItems.push(<FoodListItem name={food.name} count={food.count}/>);
    // });

    return (
        <ul>
            {/* 
                key 값을 넣어줘야함 근데 왜였더라? key 값은 반복되는 element 에 그 안에 넣어주는게 좋다
                *** 성능 *** 차이가 난다고 함 난다요
             */}
            {foods.map(food => { return <FoodListItem key={food.no} name={food.name} count={food.count}/>})}
        </ul>
    );
}

export default FoodList;