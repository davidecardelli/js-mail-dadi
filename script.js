/** ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
:avviso: NOTE:
è vietato utilizzare il metodo includes()
La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
L'esito del controllo deve essere stampato in pagina
-----------------------------------------------------------------
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"ù
6. Il tuo codice ti sembra troppo complicato? probabilmente ti stai complicando la vita! **/

// ESERCIZIO NUMERO 1:

let resultPlayer1 = document.getElementById('resultPlayer1');
let resultPlayer2 = document.getElementById('resultPlayer2');

resultPlayer1 = Math.floor(Math.random() * 6 + 1);
resultPlayer2 = Math.floor(Math.random() * 6 + 1);

document.getElementById('resultPlayer1').innerText = resultPlayer1;
document.getElementById('resultPlayer2').innerText = resultPlayer2;

const player1Win = 'Il giocatore 1 ha vinto';
const player2Win = 'Il giocatore 2 ha vinto';
const draw = 'Parità';

let finalResult = draw;

if (resultPlayer1 > resultPlayer2) {
    finalResult = player1Win
}  
else if (resultPlayer2 > resultPlayer1) {
    finalResult = player2Win
}

document.getElementById('finalResult').innerText = finalResult;


// -----------------------------------------------------------------