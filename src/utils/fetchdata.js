let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let api = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url, true);
        xhttp.onreadystatechange = (event) => {
            if (xhttp.readyState === 4) {


                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText)) :
                    reject(new Error('Error', url))

            }
        }
        xhttp.send();

    });


}

module.exports = fetchData;