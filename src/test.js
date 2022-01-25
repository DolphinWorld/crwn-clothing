const myPromise = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(()=> {
            resolve('testing')
        }, 1000);
    } else {
        reject("rejected");
    }
});

myPromise
.then(value => value + "asdf")
.then(value => console.log(value))
.catch(v => console.log("reject: ", v));
