var forma = document.getElementById('addForm');
var lista = document.getElementById('listaSvega');
var filter = document.getElementById('filterko');

forma.addEventListener('submit', dodajGa);
lista.addEventListener('click', brisiGa);
filter.addEventListener('keyup', filtriraj);

function dodajGa(e) {
    e.preventDefault();
    var rec = document.createElement('li');
    rec.className = 'itemLir';
    var textEnter = document.createTextNode(document.getElementById('enterNew').value);
    rec.appendChild(textEnter);
    console.log(rec);
    var dugme = document.createElement('button');
    dugme.className = 'deleteB';
    dugme.appendChild(document.createTextNode('X'));
    rec.appendChild(dugme);
    lista.appendChild(rec);
}

function brisiGa(ev) {
    if (ev.target.classList.contains('deleteB')) {
        if (confirm('Delete this one?')) {
            var recica = ev.target.parentElement
            lista.removeChild(recica);
        }
    }
}

function filtriraj(e) {
    var textina = e.target.value.toLowerCase();
    var listSingle = lista.getElementsByTagName('li');
    Array.from(listSingle).forEach(function(stavka) {
        var nazivStavke = stavka.firstChild.textContent;
        if (nazivStavke.toLowerCase().indexOf(textina) != -1) {
            stavka.style.display = 'block';
        } else {
            stavka.style.display = 'none';
        }
    })
}