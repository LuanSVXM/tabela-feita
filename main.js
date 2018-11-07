import {elementos} from './elementos.js'
const tbody = document.querySelector('tbody');
const Nf1 = [0,2,10,18,36,54,86]
const Nf2 = [3,11,19,37,55,87]
for (let i = 0; i < tbody.children.length && i < Nf1.length; i++) {
    const tr = tbody.children[i];
    const td = document.createElement('td');
    const div = document.createElement('div');
    const span1 = document.createElement("span")
    const span2 = document.createElement("span")
    const span3 = document.createElement("span")
    span1.textContent = elementos[Nf1[i]].atomico
    span2.textContent = elementos[Nf1[i]].sigla
    span3.textContent = elementos[Nf1[i]].nome
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    div.className = "quadrado"
    td.appendChild(div);
    td.className = "F1"
    tr.appendChild(td);
  }
  for (let i = 0; i < tbody.children.length && i < Nf2.length; i++) {
    const tr = tbody.children[i];
    const td = document.createElement('td');
    const div = document.createElement('div');
    const span1 = document.createElement("span")
    const span2 = document.createElement("span")
    const span3 = document.createElement("span")
    span1.textContent = elementos[Nf2[i]].atomico
    span2.textContent = elementos[Nf2[i]].sigla
    span3.textContent = elementos[Nf2[i]].nome
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    div.className = "quadrado"
    td.appendChild(div);
    td.className = "F2"
    tr.appendChild(td);
  }
