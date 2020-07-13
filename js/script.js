// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’,‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova


var cognomi = ['Bianchi','Rossi','Duzioni','Balsano','Verdi'];
var cognomeUtente = prompt('Inserisci il cognome');
var patt1 = /[0-9]/g;
  if ( cognomeUtente.match(patt1) )  {
    document.getElementById('let').innerHTML = "Il cognome non puo contenere una lettera"
  } else{
    cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1).toLowerCase();
    // console.log(cognomeUtente);
     cognomi.push(cognomeUtente);
     cognomi.sort();

    console.log(cognomi);

    var posizione = cognomi.indexOf(cognomeUtente);
    console.log('La posizione "umana" ',posizione + 1);


    for(var i = 0; i < cognomi.length;i++) {
      console.log(cognomi[i]);
      document.getElementById('print').innerHTML +=  '<li>' + cognomi[i] + '</li>';
    }
  }
