//ESERCIZIO 1

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
