function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// Learning Objectives

// Understand function scope
// Know the difference in between the let and const keywords

// Brief
// Using your knowledge about scope and variable declarations in JavaScript, 
// look at the following code snippets and predict what the output or error will be and why. 
// Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

// predict what the output or error will be and why. 


// EPISODE 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };

//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }

//   const verdict = declareMurderer();
//   console.log(verdict);

// PREDICTION:
// Should run ok and verdict should be: The murderer is Miss Scarlet

// Ran code:
// as expected





// EPISODE 2

// const murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// // PREDICTION:
// murderer is a consts so its value 'Professor Plum' cannot be changed
// verdict should be `The murderer is Professor Plum.`
// Ran code:
// code ERRORs out as we try to overwrite a constant variable.

// EPISODE 3
// let murderer = 'Professor Plum';

// const declareMurderer = function () {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// PREDICTION: Errors out with variable is already defined (murderer)? LET should be locked in scope to declareMurderer but it should not be possible for it to have the same name as variable of a higher scope
// Ran code: huh.... so it Allowed for the same name to be used because the scope was only for that block. that said, the original 'murdere' was never overwritten! 


// EPISODE 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function () {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// PREDICTION: based on ep3, this should print 2 lines, FIRST: miss scarlet, proff plum and Colonel mustart, the SECOND line should show 'Suspect three is Mrs. Peacock' because despite having the same names, those variables do not share a scope so are not the same
// Ran code: Woohoo! I was right


// // EPISODE 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function (newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function () {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// // PREDICTION: prints: The weapon is the Revolver. scenario may be a const but its variables's values aren't
// // Ran code:Woohoo! I was right again


// // EPISODE 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';             // should overwrite murderer 

//     const plotTwist = function () {
//         murderer = 'Mrs. White';        
//     }

//     plotTwist();                        // should overwrite murderer again to Mrs. White
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();   // changed to Mrs. White
// const verdict = declareMurderer();
// console.log(verdict);
// // PREDICTION:   `The murderer is Mrs. White.`  
// // Ran code: Woohoo! I was right again,again


// // EPISODE 7
// let murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';                 // overwrites murderer to Mr. Green'

//     const plotTwist = function () {
//         let murderer = 'Colonel Mustard';   // creates murderer Colonel Mustard within scope of plotTwist'

//         const unexpectedOutcome = function () {
//             murderer = 'Miss Scarlet';      // overwrites murderer(s) to 'Miss Scarlet' or throws out an errors as the code does not know which murderer to overwrite?
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// // PREDICTION:  Errors out as 151 tries to overwrite 2 different murderer's ?  OR `The murderer is Miss Scarlet`
// // Ran code: Mr. Green! =
// // explanation being that 151 only applies to the new plotTwis murderer 148, not the episode 7 one.



// EPISODE 8
// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
// };

// const changeScenario = function () {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';

//     const plotTwist = function (room) {
//         if (scenario.room === room) {
//             scenario.murderer = 'Colonel Mustard';
//         }

//         const unexpectedOutcome = function (murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = 'Candle Stick';       //will execute
//             }
//         }

//         unexpectedOutcome('Colonel Mustard');       // 189 will run
//     }

//     plotTwist('Dining Room');       // 184 will run, murd = 'Colonel Mustard' weapon 'Candle Stick'
// }

// const declareWeapon = function () {
//     return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);


// PREDICTION: `The weapon is Candle Stick.`
// Ran code: Great success! Yack-Shie-mash


// // EPISODE 9

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//     let murderer = 'Mrs. Peacock';          // creates a new 'murderer' within the 'if'scope
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// PREDICTION: `The murderer is 'Professor Plum'.
// Ran code: delicious taste of victory!


//EPISODE 10

const scenario = {
    murderer: 'Katie',
    room: 'psd61',
    weapon: 'Scope',
    victim: 'Tim'
};

const students = ["Marek", "Callum", "Tim", "Lucy", "Vishal", "Ben", "Duncan", "Jonny"]
const teachers = ["Ally", "Katie", "Jarrod", "Jennifer"]

const getRandomListValue = function (someList) {
    randomIndex = getRandomInt(someList.length)
    return someList[randomIndex]
}


const changeScenario = function () {
    scenario.murderer = getRandomListValue(teachers);
    if (scenario.murderer === "Ally") {
        let weapon = "Python"
        scenario.murderer = "Katie"
    }
    const plotTwist = function (room) {
        if (scenario.room === room) {
            scenario.murderer = "Jarrod"
            let murderer = "Jennifer"

            const unexpectedOutcome = function (murderer) {
                if (scenario.murderer === murderer) {
                    scenario.weapon = "JS"
                    scenario.murderer = getRandomListValue(teachers)
                }
            }
            unexpectedOutcome("Jarrod")

        }
    }
    scenario.victim = getRandomListValue(students)
    plotTwist("psd61")

}

const playItOut = function () {
    return `${scenario.victim}'s internet connection was destroyed by ${scenario.murderer} who used ${scenario.weapon}.\n${scenario.victim}: "You were behind my poor internet connection today? \n${scenario.murderer}: "No ${scenario.victim}, It was allways me!"`
}

changeScenario();
const verdict = playItOut();
console.log(verdict);

