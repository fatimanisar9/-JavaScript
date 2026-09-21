//for-of loop
let name = "Fatima";
for(let i of name){
    console.log(i);
}

// for-in loop
let  student ={
      name : "Fatima"  ,
      age : 19 ,
    city : "Okara"
}
for(let key in student){
    console.log(key , student[key]);
}
// Creat a game 
let gameNum = 30;
let userNum = prompt("Guess the number ");
while(gameNum != userNum){
    userNum = prompt("Ohh sorry wrong number. Guess again!");
}
console.log("Congrulation! Guess correct Number.");