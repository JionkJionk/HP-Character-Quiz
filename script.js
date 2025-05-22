<!-- script.js -->
const questions = [
  {
    text: "I often think before I act, even if it slows me down.",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]
  },
  // Add your quiz questions here
];

function submitQuiz() {
  // Dummy character logic for testing
  const result = {
    character: "Harry Potter",
    house: "gryffindor",
    description: "Brave and loyal, always ready to fight for what's right."
  };
  localStorage.setItem("quizResults", JSON.stringify(result));
  window.location.href = `result.html?character=${result.character}`;
}
