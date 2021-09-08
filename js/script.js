Descrizione:
/** 
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/

/**
* FUNZIONI
*/


/**
 * PROGRAMMA PRINCIPALE
 */
var studente = [
    {
        "nome": "Andrea",
        "cognome": "Fiorentino",
        "eta": 22
    }
];
for (var key in studente){
    console.log("I dati dello studente sono",studente[key])
};

var studenti = [
    {
        "nome": "Francesco",
        "cognome": "De Santis",
        "eta": 17
    },
    {
        "nome": "Salvatore",
        "cognome": "Capasa",
        "eta": 18
    },
    {
        "nome": "Valentino",
        "cognome": "Valentini",
        "eta": 15
    }
]
for(i=0; i< studenti.length; i++){
    console.log("Nome e cognome studente:",studenti[i].nome, studenti[i].cognome);
}
var nuovoStudente = {
    "nome": prompt("Inserire il nome dello studente"),
    "cognome": prompt("Inserire il cognome dello studente"),
    "eta": prompt("Inserire l'età dello studente")
};
studenti.push(nuovoStudente);
console.log("Gli studenti sono:",studenti);
