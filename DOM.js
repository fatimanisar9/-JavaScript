let h2 = document.querySelector("h2")
console.dir(h2);
h2.innerText = h2.innerText + "from Apna College";


let newbtn = document.createElement("Button");
newbtn.innerText = "Click me!";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newbtn);