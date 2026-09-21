// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// Real-life example:
// Aap kisi restaurant se food order karti hain → order ek Promise hai.
// Food mil gaya → resolve()
// Food nahi mila → reject()

// Promise create kar rahe hain
let myPromise = new Promise((resolve, reject) => {

    // Agar kaam successfully complete ho jaye
    resolve("Kaam successfully complete ho gaya!");

});

// Promise ka result lena
myPromise.then((result) => {

    // Success hone par ye chalega
    console.log(result);

});

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// myPromise
//   .then(handleFulfilledA, handleRejectedA)
//   .then(handleFulfilledB, handleRejectedB)
//   .then(handleFulfilledC, handleRejectedC);