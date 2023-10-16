let myAge = 39
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge)

let bonusPoints = 50
console.log(bonusPoints)
bonusPoints = bonusPoints + 50
console.log(bonusPoints)
bonusPoints = bonusPoints - 75
console.log(bonusPoints)
bonusPoints = bonusPoints + 45
console.log(bonusPoints)

// need a count variable
// listen for clicks on button
// increment count
// update the count on web page

let count = 0;

function increment() {
    count +=1
    document.getElementById("count-el").innerText = count
}