//ESERCIZIO 1

//Lista Email (Array)
var listaEmail = ["alessandro@mail.com", "andrea@mail.com", "damiano@mail.com", "laura@mail.com", "marco@mail.com", "alex.ixs@mail.com"];

//Variabile sulla quale effettuare la verifica
var specialMail = false;

// Chiede l'email dell'utente
var tuaEmail = prompt('Qual\'è la tua Email');

// Verifica la lista (Cicle)
for ( var i = 0; i < listaEmail.length; i++ ) {
  if(listaEmail[i] === tuaEmail) {
    specialMail = true;
  }
}

//Da accesso se l'email utente è presente sulla lista
if(specialMail) {
  alert('Access granted');
} else {
  alert('You shall not pass!')
}

// FINE ESERCIZIO 1
