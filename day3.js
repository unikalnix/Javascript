// Arrow Function, Promises, Async/Await, Try/Catch (Exceptions)

// Functions -> Regular function, Arrow Function
// function sum () {} // sum()
// const sum = () => {} // sum()

// setTimeout(() =>{
//     console.log("Running after 2 secs")
// }, 2000)

// console.log("Running instantlty")

// setInterval(() => {
//     console.log("2 secs")
// }, 2000);

// const p1 = new Promise((resolve, reject) => {
//     loader() // diabled, spinner
//     setTimeout(() => {
//         resolve("Resolved");
//     }, 2000);
// })
// p1.then((val) => {
//     console.log(val)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("Level")
// })

// const p2 = () => {
//     return new Promise((res, rej) =>{
//         setTimeout(() => {
//             res("Resolved");
//         }, 2000);
//     })
// }

// p2().then((val) => {
//     console.log(val)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("Level")
// })
// new Object() // {}
// new String() // ""

// Async/await
const fn = async () => {
  try {
    const res = await fetch("http://localhost:3000"); // access network
    const data = await res.json();
    if (data.success) {
      //true
      console.log(data.products); // [products]
    } else {
      console.log(data.message);
    }
  } catch {
    throw new Error("Something went wrong");
  }

  //   res
  //     .then((val) => {
  //       console.log(val);
  //     })
  //     .catch((err) => console.log(err));
};
fn();
