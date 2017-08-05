"use strict";
// var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var GetCloze = require("./ClozeCard.js");


// inquirer.prompt([
// {
// 	type: "input",
// 	message: "What type of Flash Cards are you using?",
// 	name: "cardName"
// }

// ]).then(function(answers){
// 	// var getBasic = new BasicCard();
// 	// var getCloze = new GetCloze();
// 	// var cardType = cardName;
// 	if(answers.cardName === "basic"){
// 		BasicCard();
// 	}else
// 	if(answers.cardName === "cloze"){
// 		getCloze;
// 	}
	
			var card1 = new GetCloze(" Abraham Lincoln was the president responsible for freeing slaves?", "Abraham Lincoln");
			console.log(card1.text);
			console.log(card1.cloze);
			console.log(card1.partial);
			var card2 = new GetCloze("America was founded in 1776?", "1776");
			console.log(card2.text);
			console.log(card2.cloze);
			console.log(card2.partial);
			var card3 = new GetCloze("George Washington did not sign the Declaration of Independence?", "George Wahsington");
			console.log(card3.text);
			console.log(card3.cloze);
			console.log(card3.partial);
			var card4 = new GetCloze("America landed the first man on the moon in 1969?", "1969");
			console.log(card4.text);
			console.log(card4.cloze);
			console.log(card4.partial);



	// 		inquirer.prompt[(
	// {
	// 	type: "input",
	// 	message: "Which card would you like to display?",
	// 	name: "card"
	// }

	// 	)].then(function(answers){
			var card1 = new BasicCard("What president is responsible for freeing slaves?", "Abraham Lincoln");
			console.log(card1);
			var card2 = new BasicCard("What year what America founded?", "1776");
			console.log(card2);
			var card3 = new BasicCard("Who did not sign the Declaration of Independence?", "George Wahsington");
			console.log(card3);
			var card4 = new BasicCard("In what year did America land the first man on the moon?", "1969");
			console.log(card4);
// 			if(answers === card1){
// 				console.log(card1);
// 			}

// 		});

// };
			// };

// });