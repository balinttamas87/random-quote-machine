"use strict"

var arrayOfQuotes = ["Patience is a virtue, and I'm learning patience. It's a tough lesson.", 
"When something is important enough, you do it even if the odds are not in your favor.", 
"I would like to die on Mars. Just not on impact.", 
"Brand is just a perception, and perception will match reality over time. Sometimes it will be ahead, other times it will be behind. But brand is simply a collective impression some have about a product."];
var lastQuote = "";
var btnNewQuote = document.getElementById("btnNewQuote");
var quote = document.getElementById("quote");

btnNewQuote.addEventListener("click", showNewQuote, false);

function showQuote (theRandomQuote) {
	quote.innerHTML = theRandomQuote;
	quote.style.visibility = "visible";
}

function showNewQuote () {
	// if randomQuote is not defined here than I get undefined returned
	var randomQuote = arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)];
	if (lastQuote === randomQuote) {
		showNewQuote();
	}
	else if (lastQuote !== randomQuote) {
		console.log( randomQuote );
		showQuote(randomQuote);
		lastQuote = randomQuote;
	}
}