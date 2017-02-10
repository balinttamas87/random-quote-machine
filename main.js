"use strict";

(function () {

	var arrayOfQuotes = [{author: "Elon Musk", quote: "Brand is just a perception, and perception will match reality over time. Sometimes it will be ahead, other times it will be behind. But brand is simply a collective impression some have about a product."},
		{author: "Elon Musk", quote: "Patience is a virtue, and I'm learning patience. It's a tough lesson."},
		{author: "Elon Musk", quote: "When something is important enough, you do it even if the odds are not in your favor."},
		{author: "Elon Musk", quote: "I would like to die on Mars. Just not on impact."},
		{author: "Nelson Mandela", quote: "It always seems impossible until it's done."},
		{author: "Johann Wolfgang von Goethe", quote: "It always seems impossible until it's done."},
		{author: "Tony Robbins", quote: "Setting goals is the first step in turning the invisible into the visible."},
		{author: "Aristotle", quote: "Quality is not and act, it is a habit"},
		{author: "George S. Patton", quote: "Accept the challenges so that you can feel the exhilaration of victory."},
		{author: "Mark Twain", quote: "The secret of getting ahead is getting started."},
		{author: "Norman Vincent Peale", quote: "Change your thoughts and you change your world."}];

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