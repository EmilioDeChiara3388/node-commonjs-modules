let hobbies = [];
function yourHobbies(hobbyOne, hobbyTwo, hobbyThree){
    this.hobbyOne = hobbyOne;
    this.hobbyTwo = hobbyTwo;
    this.hobbyThree = hobbyThree;
}

const giulio = new yourHobbies ("basket", "lettura", "cinema");
hobbies.push(giulio.hobbyOne, giulio.hobbyTwo, giulio.hobbyThree);
console.log(hobbies);
