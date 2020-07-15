// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’,‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


var cognomi = ['Bianchi','Rossi','Duzioni','Balsano','Verdi'];
var cognomeUtente = prompt('Inserisci il cognome');
var numeri = RegExp('[0-9]' );
var carSpec = RegExp('[!@#$%^&*()+=,./{}|:<>?]');
  if ((numeri.test(cognomeUtente) == true) || (carSpec.test(cognomeUtente) == true) || (cognomeUtente == ''))  {
    document.getElementById('let').innerHTML = "Inserisci di nuovo il cognome"
  } else{
    cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1).toLowerCase();
    // console.log(cognomeUtente);
     cognomi.push(cognomeUtente);
     cognomi.sort();

    console.log(cognomi);

    var posizione = cognomi.indexOf(cognomeUtente);
    console.log('La posizione "umana" ',posizione + 1);

   dex=document.getElementById('print');
   console.log('Una frase',dex);

    for(var i = 0; i < cognomi.length;i++) {
      dex.innerHTML +=  '<li>' + cognomi[i] + '</li>';
    }
  }



  //controllo
  // do {
  //   var cognome = prompt('Inserisci il cognome')
  // }while (cognome.length<=0);
