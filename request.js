const request = require('request-promise');
const http = require('https');

let HEADER = {
    'Accept-Language': 'en-GB',
    "Client-ID": "AEM",
    'User-Agent': 'chrome'
};

function sendRestRequestWithHeader(URI, method, header) {
    let options = {
        uri: URI,
        method: method,
        headers: header,
        resolveWithFullResponse: false
    };
    return request(options).then(function (response) {
        return response;
    });
};

http.get('https://jsonplaceholder.typicode.com/users', (response) => {
    console.log('statusCode:  ' + response.statusCode);
    if (response.statusCode === 200) {
        console.log('Everything is good :)');
    } else {
        console.log('Hm..something comming wrong :(');
    }
});

http.get('https://jsonplaceholder.typicode.com/users', (response) => {
    console.log('contetnType:  ' + response.headers['content-type']);
    if (response.headers['content-type'] === 'application/json; charset=utf-8') {
        console.log('Everything is good :)');
    } else {
        console.log('Hm..something comming wrong :(');
    }
});

sendRestRequestWithHeader('https://jsonplaceholder.typicode.com/users', 'GET', HEADER).then((response) => {
    console.log('USERS:   ' + response);
    if (JSON.parse(response).length === 10) {
        console.log('Everything is good :)')
    } else {
        console.log('Hm..something comming wrong :(')
    }
});



