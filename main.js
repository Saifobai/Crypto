"use strict";

let urlAPI = 'https://api.cryptonator.com/api/ticker/';

let input = document.getElementById('cryptoInput');
let output = document.getElementById('cryptoOutput');
let replace = document.getElementById('replace');

document.querySelector('form').addEventListener('submit', (e) => {

e.preventDefault();

let value = document.getElementById('dropdown').value;
let value2 = document.getElementById('dropdown2').value;

let url = urlAPI + value + '-' + value2;


fetch(url)
.then(response => response.json())
.then(data => {
let result = data.ticker.price * input.value;
output.value = result.toFixed(2);
console.log(typeof result)
})
.catch(err => console.log(err))
}); 