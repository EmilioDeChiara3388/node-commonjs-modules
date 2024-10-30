//console.log("Funzioni?");

const names = require("./names");
const yourHobbies = require("./hobbies")



//console.log(emilio);

//console.log(yourHobbies("basket", "cinema", "tv"));

const {firstName, lastName} = names();
const {hobbies} = yourHobbies()
function people(){
    return person = {
        firstName,
        lastName,
        hobbies
    }
        
    
}
 console.log(people());
 
