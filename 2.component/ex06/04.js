import update from 'react-addons-update';
import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrder = update(state.order, {
    // 프로퍼티 변경
    receive: {
        $set: '강남구 논현동'
    },
    payment: {
        method: {
            $set: 'Mobile'
        }
    },

    // 배열 요소 객체 프로퍼티 변경
    products: {
        0: {
            amount: {
                $set: 999
            }
        },

        // 배열 요소 추가
        $push: [{
            no: "s004-004",
            name: "보라 캥거루",
            price: 1244,
            amount: 21
        }]
    },
});

console.log(state.order, updateOrder);