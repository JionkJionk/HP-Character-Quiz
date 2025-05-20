document.getElementById('quizForm').addEventListener('submit', function(event) {
	event.preventDefault(); // Stop the page from reloading

	const scores = {
		harry: 0,
		hermione: 0,
		ron: 0
	};

	const formData = new FormData(this);
	for (let pair of formData.entries()) {
		const answer = pair[1];
		scores[answer]++;
	}

	let topCharacter = '';
	let topScore = -1;
	for (let character in scores) {
		if (scores[character] > topScore) {
			topScore = scores[character];
			topCharacter = character;
		}
	}

	const results = {
		harry: "You're Harry Potter! Brave, determined, and a natural leader.",
		hermione: "You're Hermione Granger! Smart, curious, and always prepared.",
		ron: "You're Ron Weasley! Loyal, funny, and a true friend."
	};

	document.getElementById('result').innerText = results[topCharacter];
});