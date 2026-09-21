// forEach loop use only Array
let num = [1 , 2, 3, 4, 5];

num.forEach((num) =>{    //callback function
    console.log(num*num);
});

let n = prompt("Enter the number");
let arr = [];

for(let i = 1 ; i <= n; i++){
    arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res , cur ) =>{
    return res + cur;
})
console.log(sum);