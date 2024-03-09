// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const mails = ['pippo1@gmail.com', 'pippo2@gmail.com', 'pippo3@gmail.com', 'pippo4@gmail.com', 'pippo5@gmail.com', 'pippo6@gmail.com', 'pippo7@gmail.com', 'pippo8@gmail.com'];
const userEmail = prompt ('dimmi la tua mail')

// console.log(mails)

let mailFound = false;

// cerco nell'elenco delle mail 
for(let i = 0; i < mails.length; i++) {
    const thisMail = mails[i];
    console.log(thisMail)

    if(thisMail === userEmail) {
        mailFound = true;
    }
}
if(mailFound === true){
    alert('mail accettata')
}
else {
    alert('mail respinta')
}
// console.log(mailFound)