// Descrizione:
// Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


let boxNumeri = document.getElementById('box-numeri');
let messaggio = document.getElementById('messaggio')
let numeri = [];

while (numeri.length < 5) {
    let r = Math.floor(Math.random() * 100) + 1;
    if (numeri.indexOf(r) === -1) numeri.push(r);
}

boxNumeri.innerHTML = numeri;
messaggio.innerHTML = 'memorizza i numeri entro 30 secondi';

setTimeout(clock, 30000, numeri, boxNumeri, messaggio);
function clock(num, box, mes) {
    mes.innerHTML = '';
    box.innerHTML = '';
    let numeriUtente = [];
    let numero = 0;
    for (let i = 0; i < 5; i++) {
        numero = parseInt(prompt('inserisci i numeri visualizzati in ordine'));
        for (let j = 0; j < num.length; j++) {
            if (numero == num[j]) {
                numeriUtente.push(numero);
            }
        }
    }
    mes.innerHTML = 'hai indovinato' + ' ' + numeriUtente.length + ' numeri:'
    box.innerHTML = numeriUtente;
}