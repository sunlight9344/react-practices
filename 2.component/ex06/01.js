import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts1 = state.order.products;
updateOrderProducts1.push({
    no: 'c003-003',
    name: '노랑낑깡',
    price: 999999,
    amount: 1
});

console.log(state.order.products, updateOrderProducts1, state.order.products === updateOrderProducts1);
console.log("-----------------------------------------------------------------------");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts2 = state.order.products.concat({
    no: 'c003-003',
    name: '노랑낑깡',
    price: 999999,
    amount: 1
});

console.log(state.order.products, updateOrderProducts2, state.order.products === updateOrderProducts2);
console.log("-----------------------------------------------------------------------");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts3 = [...state.order.products, {
    no: 'c003-003',
    name: '노랑낑깡',
    price: 999999,
    amount: 1
}];

console.log(state.order.products, updateOrderProducts3, state.order.products === updateOrderProducts3);