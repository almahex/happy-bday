let count = 0;

function flipCard(card) {
	if (count === 0) {
		card.classList.add('first-card');
	} else if (count === 1) {
		card.classList.replace('first-card', 'second-card');
	}
}

function getCard(card) {
	if (card.classList.contains("deck")){
		return card;
	} else {
		return false;
	}
}

document.addEventListener('click', function(e) {
	card = getCard(e.target);
	if (card != false) {
		flipCard(card);
		count += 1;
	} else {
		console.log("Please, click the card.");
	}
});