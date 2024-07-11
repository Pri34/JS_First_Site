// document.getElementById("count-el").innerText=5

// let a =9
// let b=4
// let count = a + b
// console.log(count)

// let myAge = 19
// humanDogRatio = 7
// myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// BonusPoints=50
// console.log(BonusPoints)
// BonusPoints = BonusPoints + 50
// console.log(BonusPoints)
// BonusPoints = BonusPoints - 75
// console.log(BonusPoints)
// BonusPoints = BonusPoints + 45
// console.log(BonusPoints)


// let count = 5
// // count =3 
// count = count + 2
// count = count + 10
// console.log(count)

//initialize the count as 0
// Listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
//     console.log("The Button was clicked")
// }

//learning to use functions
//setting up the race
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

//Go !!
//Players are running the race
// Race is finished 

//Get ready for a new race

// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)

//repeating the code...hence functions needed here
// function countdown () {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown() //calling the function
// countdown() //calling 2nd time

//writing first function yourself
// function first () {
//     console.log(42)
// }
// first()

//create a function that log outs the sun of all the lap times
// let lap1=34
// let lap2=33
// let lap3=36

// function sum() {
//     let sum=lap1+lap2+lap3
//     console.log(sum)
// }

// sum()

//create a function that increments the laps completed variable with one
//run it three times

// let lapscompleted = 0
// function increment() {
//     lapscompleted = lapscompleted + 1
// }
// increment ()
// increment()
// increment ()

// console.log(lapscompleted)



//SUBWAY COUNTER APP NOW



// let count =0
// function increment() {
//     count=count + 1 
//     document.getElementById("count-el").innerText = count
// }
// function save() {
//     console.log(count)
// }



// BACK TO LEARNING



// Create a variable, message that stores the string " You have three new notifications"

// let username ="Prisha"
// let message="You have three new notifications"
// // console.log(message + username)
// // console.log(message + ", " + username + "!") 
// messageTouser=message + ", " + username + "!"
// console.log(messageTouser)

//Create two varibles, name and greeting. The name variable would store your name,
//and the greeting should store eg "Hi,my name is"
//create a third variable, myGreeting, That contatenates the two strings
// Log myGreeting to the console

// let name = "Prisha"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " " + name 
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints= points + bonusPoints
// console.log(totalPoints) //410

//ans the questions
// console.log(4 + 5) //9
// console.log("2" + "4")  //"24"
// console.log("5" + 1)  //"51"
// console.log(100 + "100")  //"100100"



//SUBWAY COUNTER APP NOW



// let count =0
// function increment() {
//     // Change this to use the plus equal technique you've learned
//     // count=count + 1 
//     count+= 1
//     // document.getElementById("count-el").innerText = count //change the innertext here also like niche kiya
//     document.getElementById("count-el").contentText = count
// }
// let saveEl = document.getElementById("save-el")
// function save() {
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     let saveEl2 = count + " - "
//     // 3. Render the variable in the saveEl using innerText
//     // saveEl.innerText += saveEl2
//     saveEl.textContent += saveEl2
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }

// now set back to zero everytime we hit save


let count =0
function increment() {
    count+= 1
    countEl =document.getElementById("count-el")
    countEl.textContent=count
}
let saveEl = document.getElementById("save-el")
function save() {
    let saveEl2 = count + " - "
    saveEl.textContent += saveEl2
    countEl.textContent= 0 
    count = 0
}

