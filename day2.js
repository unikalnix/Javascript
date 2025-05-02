
// Destructuring, Spread Operator, Rest Operator, forEach, for/in, for/of, map(), filter(), find()

// const vehicles = ['mustang', 'f-150', 'expedition'];
// const [index1, index2, index3] = vehicles

// console.log(index1, index2, index3)

// const car ={
//     name: "Mustang",
//     model: "f-150",
//     suv: "expdetition"
// }

// const {names, model, suv, hello = "Hello" } = car
// console.log(model, suv, hello, names)

// Copy reference
// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4)
// console.log(arr1)

// Spread using arrays
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [...arr1]; // 1, 2, 3
// arr2.push(10)
// console.log(arr2) //async 
// console.log(arr1)

// Ecmascript, ES6
// let [index1, index2, ...indexes] = [1, 2, 3, 4, 5, 6];
// console.log(index1, index2, indexes)

// let fruits = ['Apple', 'Banana', 'Kiwi', 'Mango', 'Grapes'];
// const arr = fruits.forEach(function(fruit){
//     console.log(fruit)
// })


// async/await

// call api => fetch data => users = ['Talha', 'Daniyal']
// users.forEach(function(user) if(user === 'Talha') remove from database)
// for(user of users){if(user === 'Talha') remove from database};

// let fruits = ['Apple', 'Banana', 'Kiwi', 'Mango', 'Grapes'];
// for(let fruit of fruits){
//     if(fruit === 'Mango' || fruit === 'Grapes'){
        
//     }
// }

// All elements will return => condition pass
// const  fruits = ['Apple', 'Banana', 'Kiwi', 'Mango', 'Grapes'];
// const filteredFruits = fruits.filter(function(fruit){
//     return fruit !== 'Mango'
// })
// console.log(fruits)
// console.log(filteredFruits)

// Return first element => condition pass
// const users = [
//     {
//         id: 1,
//         name: "Talha"
//     },
//     {
//         id: 2,
//         name: "Daniyal"
//     },
//     {
//         id: 3,
//         name: "Hanzlaa"
//     },
//     {
//         id: 4,
//         name: "Kamran",
//         hobbies: ['Reading', 'Writing']
//     }
// ]
// console.log(users[3].hobbies[2])

// let user = users.find(function(user){
//     return user.id === 3
// })
// console.log(user)


// Map function
// returns a new array and copy or map all elements of the array
// let arr = [1, 2, 3];
// let arr2 = arr.map(function(element){
//     return element * 2;
// })

// console.log(arr2);

// Reduce Function
// let prices = [24, 12, 56, 69];

// let total = prices.reduce(function(prev, curr){
//     return prev += curr
// }, 0);
// console.log(total)

prices.reduce(function(prev, curr){
        return prev += curr
    }, 0);

prices.reduce((prev, curr) => prev += curr, 0)

// ------------------------------------------- Day 2 -------------------------------------------

// Arrow Function, Async/Await, Try/Catch (Exceptions), Promises