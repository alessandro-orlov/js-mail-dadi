//ESERCIZIO 1: Lista email

//Lista Email (Array)
var listaEmail = ["alessandro@mail.com", "andrea@mail.com", "damiano@mail.com", "laura@mail.com", "marco@mail.com", "alex.ixs@mail.com"];
for ( var i = 0; i < listaEmail.length; i++ ) {
  console.log(listaEmail[i]);
}

//Variabile sulla quale effettuare la verifica
var accessGranted = false;

// Chiede l'email dell'utente
var tuaEmail = prompt('Qual\'è la tua Email? *see console.log');

// Verifica la lista (Cicle)
for ( var i = 0; i < listaEmail.length; i++ ) {
  if(listaEmail[i] === tuaEmail) {
    accessGranted = true;
  }
}

//Da accesso se l'email utente è presente sulla lista
if(accessGranted) {
  alert('Access granted');
} else {
  alert('You shall not pass!')
}
// FINE ESERCIZIO 1

//ESERCIZIO 2: DATI
//Genera il numero per l'utente
var userNumber = Math.floor(Math.random() * 6) + 1;
alert('il numero dell\'utente è: ' + userNumber);

// Genera il numero per il computer
var computerNumber = Math.floor(Math.random() * 6) + 1;
alert('il numero del computer è: ' + computerNumber);

// Verifica il vincitore in base al numero maggiore
if(userNumber > computerNumber) {
  alert('Ha vinto l\'utente');
} else if (userNumber < computerNumber) {
  alert('Ha vinto il computer');
} else {
  alert('DRAW');
}
// FINE ESERCIZIO 2
