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