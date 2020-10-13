let sum = (num1, num2) => {
    return num1 + num2;
}

let cal = (num1, num2, cb) => {
    return cb(num1, num2);
}

console.log(cal(6, 2, sum));

let date = (cb) => {
    console.log(new Date),
        setTimeout(() => {
            let date = new Date;
            cb(date)
        }, 3000)
}

let printDate = (dateNow) => {
    console.log(dateNow)
}

date(printDate)