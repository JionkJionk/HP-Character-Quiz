// script.js

// Sample questions and answers with character point mappings
const questions = [
  {
    question: "I enjoy taking risks even if it might get me into trouble.",
    answers: [
      { value: "a", points: { HP: 3, RW: 2, NL: 1 } }, // Strongly agree (large green)
      { value: "b", points: { HP: 2, RW: 1 } },       // Agree (medium green)
      { value: "c", points: {} },                      // Neutral (small beige)
      { value: "d", points: { DM: 2, SS: 1 } },       // Disagree (medium red)
      { value: "e", points: { DM: 3, SS: 2 } },       // Strongly disagree (large red)
    ],
  },
  {
    question: "I like to plan ahead rather than act on impulse.",
    answers: [
      { value: "a", points: { HG: 3, MM: 2, AD: 1 } },
      { value: "b", points: { HG: 2, MM: 1 } },
      { value: "c", points: {} },
      { value: "d", points: { RW: 2, HP: 1 } },
      { value: "e", points: { RW: 3, HP: 2 } },
    ],
  },
  {
    question: "I prefer to stay in the background and avoid attention.",
    answers: [
      { value: "a", points: { NL: 3, RH: 2 } },
      { value: "b", points: { NL: 2 } },
      { value: "c", points: {} },
      { value: "d", points: { HP: 2, AD: 1 } },
      { value: "e", points: { HP: 3, AD: 2 } },
    ],
  },
];

let currentQuestionIndex = 0;
const scores = {
  HP: 0,
  HG: 0,
  RW: 0,
  DM: 0,
  NL: 0,
  AD: 0,
  MM: 0,
  RH: 0,
  SS: 0,
};

const questionTextEl = document.getElementById("question-text");
const answerForm = document.getElementById("answer-form");
const nextBtn = document.getElementById("next-btn");

function loadQuestion(index) {
  const q = questions[index];
  questionTextEl.textContent = q.question;

  // Clear previous answers
  const radios = answerForm.querySelectorAll('input[type="radio"]');
  radios.forEach((r) => {
    r.checked = false;
  });

  // Enable/disable next button
  nextBtn.disabled = true;
}

answerForm.addEventListener("change", (e) => {
  // Enable Next button only if any radio is checked
  const anyChecked = [...answerForm.elements["answer"]].some((el) => el.checked);
  nextBtn.disabled = !anyChecked;
});

answerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get selected answer value
  const selected = [...answerForm.elements["answer"]].find((el) => el.checked);
  if (!selected) {
    alert("Please select an answer before proceeding.");
    return;
  }

  // Add points to scores
  const answerPoints = questions[currentQuestionIndex].answers.find(
    (ans) => ans.value === selected.value
  ).points;

  for (const char in answerPoints) {
    if (scores.hasOwnProperty(char)) {
      scores[char] += answerPoints[char];
    }
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    // Save scores and go to result page
    localStorage.setItem("hpQuizScores", JSON.stringify(scores));
    window.location.href = "result.html";
  }
});

// Initialize first question on page load
window.addEventListener("DOMContentLoaded", () => {
  loadQuestion(currentQuestionIndex);
});
