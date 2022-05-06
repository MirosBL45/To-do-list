var forma = document.getElementById('addForm');
var lista = document.getElementById('listaSvega');
var filter = document.getElementById('filterko');

forma.addEventListener('submit', dodajGa);
lista.addEventListener('click', brisiGa);
filter.addEventListener('keyup', filtriraj);
lista.addEventListener('click', promeniGa);

function dodajGa(e) {
    e.preventDefault();
    var rec = document.createElement('li');
    rec.className = 'itemLir';
    var provera = document.getElementById('enterNew').value.trim();
    var textEnter = document.createTextNode(document.getElementById('enterNew').value);
    if (provera == '') {
        alert('You have to enter some input')
    } else {
        rec.appendChild(textEnter);
        console.log(rec);
        var dugme = document.createElement('button');
        dugme.className = 'deleteB';
        dugme.appendChild(document.createTextNode('X'));
        rec.appendChild(dugme);
        lista.appendChild(rec);
    }
    document.getElementById('enterNew').value = '';
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

function promeniGa(klik) {

    function radiIzmenu() {
        if (klik.target.classList.contains('itemLir')) {
            if (confirm('Are you sure for changing this item?')) {
                var komeDodajes = klik.target;
                var promenaTexta = document.createElement('input');
                promenaTexta.className = 'promenaUn';
                promenaTexta.setAttribute("id", "changeText");
                promenaTexta.placeholder = 'Change text...';
                komeDodajes.appendChild(promenaTexta);
                lista.appendChild(komeDodajes);
                //make button for confirm change
                var promenaDugme = document.createElement('button');
                promenaDugme.className = 'promenaDug';
                promenaDugme.setAttribute("id", "changeButton");
                promenaDugme.appendChild(document.createTextNode('Confirm changing'));
                komeDodajes.appendChild(promenaDugme);
                lista.appendChild(komeDodajes);
    
    
                var menjalica = document.getElementById('changeButton');
                menjalica.addEventListener('click', zavrsiGa);
    
    
                function zavrsiGa() {
                    var novaRec = document.getElementById('changeText');
                    var provera = document.getElementById('changeText').value.trim();
                    if (provera == '') {
                        alert('You have to enter some input')
                    } else {
                        var parentic = novaRec.parentElement;
                        parentic.innerText = novaRec.value;
                        //parentic je glavni, njemu dodati dugme za brisanje
                        var dugme = document.createElement('button');
                        dugme.className = 'deleteB';
                        dugme.appendChild(document.createTextNode('X'));
                        parentic.appendChild(dugme);
                    }                
                }
            }
        }
    }
    
    // const iznadElem = klik.parentElement;
    if (klik.target.classList.contains('promenaUn')) {
        radiIzmenu();
    } else {
        if (document.getElementById('changeButton') !== null) {
            if (klik.target.classList.contains('deleteB')) {
                return
            } else {
                alert('Warning, You can change one item by one');
            }            
        } else {
            radiIzmenu()
        }
    }
}