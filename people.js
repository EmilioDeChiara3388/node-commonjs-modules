//console.log("Funzioni?");

const names = require("./names");
const yourHobbies = require("./hobbies")

//console.log(emilio);
//console.log(yourHobbies("basket", "cinema", "tv"));

function people(){
    const emilio = names("Emilio", "De Chiara");

    const emiliosHobbies = yourHobbies("Serie tv", "Basket", "Lettura")

    const newPerson = {...emilio, ...emiliosHobbies}

    return newPerson
}

console.log(people());
 
