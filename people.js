//console.log("Funzioni?");

const names = require("./names");
const yourHobbies = require("./hobbies")

const emilio = new names ("Emilio", "De Chiara");

//console.log(emilio);

//console.log(yourHobbies("basket", "cinema", "tv"));

function people(){
    return {
        firstName: names.firstName,
        lastName: names.lastName,
        hobbies: yourHobbies("basket", "cinema", "tv")
    }
}
console.log(people());
