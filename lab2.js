var add = function (a, b){
    return a+b;
}

var sub = function (a, b){
    return a-b;
}

var makeACall = function (a, b, add, sub){
    if(a>b)
        return sub(a, b);
    else
        return add(a, b);
}

var r = makeACall(5, 3, add, sub);
console.log(r);

var print = function () {
    console.log("Hello-1")
}

setInterval(print, 1000)

setInterval(() => {
    console.log("Hello-2");
}, 2000);

////////////////////////////////

var a =10;

var p1 = new Promise((resolve, reject) => {
    if(a == 10){
        const r = {
            status: true,
            message: 'Success'
        }
        resolve('Success-1');
    } else{
        reject('Failure-1');
    }
})

p1.then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
})