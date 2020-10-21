const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ?
            setTimeout(() => {
                resolve('do something async')
            }, 3000)
            : reject(new Error('test error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('before');
doSomething();
console.log('after');

const anotherFuntion = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    } catch (error) {
        console.error(error)
    }
}

console.log('before 1');
anotherFuntion();
console.log('after 1');