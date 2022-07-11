// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

console.log('ok', Vue);

const greeting = new Vue({
    el: "#greeting",
    data: {
        saluto: "Hello!",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hello_smile.png"
    }
});

console.log(greeting.saluto);
