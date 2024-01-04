import {compose,pipe} from 'lodash/fp';
import {Map} from 'immutable';
import { produce } from 'immer';
import micky from './assets/micky.png';
import { store } from './store/store';
import { userAdd, userUpdate, userRemove } from './store/users';
import { bookAdd, bookUpdate, bookRemove, selectAllBooks } from './store/books';

let img = document.getElementById("img");
img.src = micky;

console.log("Hello world");

const input = "    JavaScript    ";
let output = "<h1>" + input.trim() + "</h1>"

const trim = str => str.trim();
const wrapInH1 = str => `<h1>${str}</h1>`;
const wrapInEle = ele => str => `<${ele}>${str}</${ele}>`;


// output = wrapInDiv(trim(input));
// const transform = compose(wrapInDiv,trim)
const transform = pipe(trim,wrapInH1,wrapInEle('div'))

output = transform(input);
console.log(output);


let myMap = Map({name:'Darshan',age:23});

console.log(myMap.get("name"));

console.log(myMap.set('name',"Abhishek").toJS());

let myObj = {name:'Darshan',age:23,address:"Malegaon"}

console.log(produce(myObj,newObj => {
    newObj.name = 'Abhishek'
}));

store.subscribe(() => {
    console.log("Store changd : ", store.getState());
})

store.dispatch(userAdd({
    name: "Darshan Khairnar",
    address: "Malegaon"
}));

store.dispatch(bookAdd({
    title: "Game of Thrones",
    author: "Gorge R. R. Martin"
}))

store.dispatch(userUpdate({
    id: 1,
    address: "Anand Nager"
}))

store.dispatch(userRemove({
    id: 1
}));

store.dispatch((dispatch) => {
    dispatch(userAdd({
        name: 'Abhishek Khairnr',
        address: 'Talegaon'
    }))
})

store.dispatch({
    type: 'getTodo',
    payload:{
        url: 'https://jsonplaceholder.typicode.com/users/1',
        method: 'get'
    }
})

let allBooks = selectAllBooks(store.getState());
console.log(allBooks);



