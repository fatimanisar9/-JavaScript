let data = "website data";

class User{
    constructor(name , email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("Data =" , data);
    }
}
let student1 = new User("Fatima" , "abc@email.com");
let student2 = new User("Ayesha" , "abc@email.com");