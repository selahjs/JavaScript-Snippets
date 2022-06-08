const ul = document.querySelector('.people');
const people = ["Sol","Red","Sumeya"];
let html = ``;
people.forEach(function(person){
  html+= `<li>${person} </li>`;
})
ul.innerHTML = html;