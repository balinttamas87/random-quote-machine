"use strict";

(function () {

	var arrayOfQuotes = [{author: "Elon Musk1", quote: "1Brand is just a perception, and perception will match reality over time. Sometimes it will be ahead, other times it will be behind. But brand is simply a collective impression some have about a product."},
		{author: "Elon Musk2", quote: "2Patience is a virtue, and I'm learning patience. It's a tough lesson."},
		{author: "Elon Musk3", quote: "3When something is important enough, you do it even if the odds are not in your favor."},
		{author: "Elon Musk4", quote: "4I would like to die on Mars. Just not on impact."},];

	var lastQuote = "";
	var btnNewQuote = document.getElementById("btnNewQuote");
	var quote = document.getElementById("quote");
	var author = document.getElementById("author");
	var btnTwitterShare = document.getElementById("twitter-share-button");

	btnNewQuote.addEventListener("click", showNewQuote, false);
	btnNewQuote.addEventListener("click", updateQuoteToTweet, false);

	function showQuoteAndAuthor (theRandomQuote,theAuthorOfRandomQuote) {
		quote.innerHTML = theRandomQuote;
		quote.style.visibility = "visible";
		author.innerHTML = theAuthorOfRandomQuote;
		author.style.visibility = "visible";
	}

		function updateQuoteToTweet () {
		btnTwitterShare.setAttribute("href", "https://twitter.com/intent/tweet?text=" + encodeURI(lastQuote));
	}

	function showNewQuote () {
		// if randomQuote is not defined here than I get undefined returned
		var randomIndexOfArray = Math.floor(Math.random() * arrayOfQuotes.length);
		var randomQuote = arrayOfQuotes[randomIndexOfArray].quote;
		var authorOfRandomQuote = arrayOfQuotes[randomIndexOfArray].author;

		if (lastQuote === randomQuote) {
			showNewQuote();
		}
		else if (lastQuote !== randomQuote) {
			console.log( randomQuote );
			showQuoteAndAuthor(randomQuote, authorOfRandomQuote);
			lastQuote = randomQuote;
		}
	}
})();