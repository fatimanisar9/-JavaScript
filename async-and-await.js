// Async aur Await JavaScript mein Promise ko easy way mein handle karne ke liye use hote hain.



// async function banaya
async function getData() {

    // Promise create kiya
    let promise = new Promise((resolve) => {

        // 2 seconds ke baad data milega
        setTimeout(() => {
            resolve("Data mil gaya!");
        }, 2000);

    });

    // await Promise ke complete hone ka wait karega
    let result = await promise;

    // Promise ka result print hoga
    console.log(result);
}

// Function ko call kiya
getData();
