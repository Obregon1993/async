const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Whooops!');
        }
    });
}

somethingWillHappen()
    .then(resp => console.log(resp))
    .catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('true')
            }, 2000)
        } else {
            const error = new Error('Whoooops!');
            reject(error)
        }
    })
}

somethingWillHappen2()
.then(resp => console.log(resp))
.catch(err => console.error(err))


//este metodo es para crear varias promesas al mismo tiempo y r etornar un areglo comn los resultados

Promise.all([somethingWillHappen(),somethingWillHappen2()])
.then(resp =>{
    console.log('array de resultados', resp)
})
.catch(err=>{
    console.error(err)
})