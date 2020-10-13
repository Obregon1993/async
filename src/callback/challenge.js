let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let api = 'https://rickandmortyapi.com/api/character/';

let fetchData = (url, cb) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = (event) => {
        if (xhttp.readyState === 4) { //4 porque es la manera de saber q ya esta en el ultimo estado
            if (xhttp.status === 200) {
                cb(null, JSON.parse(xhttp.responseText))// el parse para reseibirlo en la data adecuada
            } else {
                const error = new Error('Error' + url)
                return cb(error, null)
            }
        }
    }
    xhttp.send();
}
//el ejemplo de arriba es una manera de hacer llamadas a un api  utilizando el paquete requerido debido a q si usamos un fetch ya tiene implementado promesas por lo q seleccionamos este paquete para este ejemplo


fetchData(api, (err1, data1) => {
    if (err1) {
        return console.error(err1)
    };
    fetchData(api + data1.results[0].id, (err2, data2) => {
        if(err2) {
            return console.error(err2)
        };
        fetchData(data2.origin.url, (err3,data3)=>{
            if (err3) {
                return console.error(err3)
            };
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})