/** 
 * Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
 * 
 * 
 */

const wrapper = document.getElementById('for-wrapper');

for (let i = 1; i <= 100; i++) {
    // creo il div di riferimento
    let newDiv = document.createElement('div');

    if (i % 3 === 0 && i % 5 === 0) {
        // cambio il contenuto del div appena creato inserendovi il valore dell'indice


        newDiv.innerHTML = "FizzBuzz";
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        newDiv.innerHTML = "Fizz";
        console.log("Fizz");
    } else if (i % 5 === 0) {
        newDiv.innerHTML = "Buzz";
        console.log("Buzz");
    } else {
        console.log(i);
        newDiv.innerHTML = i;
    }

    // aggiungo al div appena creato le classi necessarie
    newDiv.classList.add("box", "m-3", "fs-2");

    // infine aggiungo il div creato al parent al quale voglio aggiungerlo
    wrapper.append(newDiv);

}