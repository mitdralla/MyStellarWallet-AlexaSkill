var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon.stellar.org');


// get a list of transactions submitted by a particular account
server.transactions()
    .forAccount('')
    .call()
    .then(function (page) {
        console.log('Page 1: ');
        console.log(page.records);
        return page.next();
    })
    .then(function (page) {
        console.log('Page 2: ');
        console.log(page.records);
    })
    .catch(function (err) {
        console.log(err);
    });