let button = document.querySelector("#btn");
button.onclick = () => {
    console.log("Hello I am button.");
    alert("Hey!");
};

//Screen mode change
let btn = document.querySelector("#mode");
let currtmode = "light"
btn.addEventListener("click" , () => {
     if(currtmode=="light"){
        currtmode = "drak";
        document.querySelector("body").style.backgroundColor = "black";
     }
     else{
        currtmode = "light";
        document.querySelector("body").style.backgroundColor = "white";

     }
     console.log(currtmode);
});