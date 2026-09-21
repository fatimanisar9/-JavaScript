// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.


// Ye ek normal function hai
function greet(name, callback) {

    // Name ko print kar rahe hain
    console.log("Hello " + name);

    // Callback function ko call kar rahe hain
    callback();
}

// Ye callback function hai
function message() {

    // Ye message print hoga
    console.log("Welcome to JavaScript!");
}

// greet function ko call kar rahe hain
// message ko callback ke taur par pass kiya
greet("Fatima", message);
