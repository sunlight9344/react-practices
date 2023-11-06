import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

let updateOrder = state.order;
updateOrder.receive = '강남구 서초구...';

console.log(state.order, updateOrder, state.order === updateOrder);
console.log('=====================================================================');

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrder2 = Object.assign({}, state.order, {receive: "강남구 서촉우..."});
console.log(updateOrder2, updateOrder2 === state.order);