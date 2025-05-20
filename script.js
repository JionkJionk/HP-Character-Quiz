// Define the characters and their "personality points"
const characters = {
	harry: { name: "Harry Potter", description: "Brave, loyal, and always ready to fight for what’s right.", score: 0 },
	hermione: { name: "Hermione Granger", description: "Smart, logical, and values knowledge above all.", score: 0 },
	ron: { name: "Ron Weasley", description: "Kind-hearted, loyal, and a great friend in tough times.", score: 0 },
	draco: { name: "Draco Malfoy", description: "Proud, ambitious, and values status and family heritage.", score: 0 }
};

// Connect to the form
const quizForm = document.getElementById("quiz-form");

// When the form is submitted
quizForm.addEventListener("submit", function (event) {
	event.preventDefault(); // stop the page from refreshing

	// Reset all scores
	for (let key in characters) {
		characters[key].score = 0;
}

	// Get all selected answers
	const answers = new FormData(quizForm);
	
	for (let [question, characterKey] of answers.entries()) {
		if (characters[characterKey]) {
			characters[characterKey].score++;
		}
	}

	// Find the character with the highest score
	let topCharacter = null;
	let maxScore = 0;

	for (let key in characters) {
		if (characters[key].score > maxScore) {
			topCharacter = characters[key];
			maxScore = characters[key].score;
		}
	}

	// Show the result
	const resultDiv = document.getElementById("result");
	if (topCharacter) {
		resultDiv.innerHTML = `
			<h2 class="result-title">You are most like ${topCharacter.name}!</h2>
			<p class="result-description">${topCharacter.description}</p>
		`;
	} else {
		resultDiv.innerHTML = `<p>Please answer all the questions.</p>`;
	}
});
