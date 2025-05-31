// Sample questions with answers and character points
const questions = [
  {
    text: "I would risk getting in trouble to stand up for a friend.",
    answers: [
      { value: "a", points: { HP: 2, RW: 2, NL: 1 } },
      { value: "b", points: { HG: 1, MM: 1, AD: 1 } },
      { value: "c", points: {} },
      { value: "d", points: { DM: 2, SS: 1 } },
      { value: "e", points: { RH: 1 } }
    ]
  },
  {
    text: "I prefer to have a plan before doing something new.",
    answers: [
      { value: "a", points: { HG: 3, MM: 2, AD: 2 } },
      { value: "b", points: { NL: 1, RH: 1 } },
      { value: "c", points: {} },
      { value: "d", points: { RW: 1, HP: 1 } },
      { value: "e", points: { DM: 2, SS: 2 } }
    ]
  },
  {
    text: "I tend to stick to the rules unless I absolutely need to break them.",
    answers: [
      { value: "a", points: { MM: 3, AD: 3 } },
      { value: "b", points: { HG: 1, NL: 1 } },
      { value: "c", points: {} },
      { value: "d", points: { RW: 1, HP: 1 } },
      { value: "e", points: { DM: 2, SS: 2 } }
    ]
  },
  {
    text: "I always try to understand the deeper truth behind every situation.",
    answers: [
      { value: "a", points: { AD: 3, SS: 2, HG: 1 } },
      { value: "b", points: { MM: 1, HP: 1 } },
      { value: "c", points: {} },
      { value: "d", points: { DM: 1, RW: 1 } },
      { value: "e", points: { NL: 1 } }
    ]
  }
];

let currentQuestionIndex = 0;
let scores = {
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

const questionText = document.getElementById("question-text");
const answerForm = document.getElementById("answer-form");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const currentQ = questions[currentQuestionIndex];
  questionText.textContent = currentQ.text;

  // Clear previous answers
  const inputs = answerForm.querySelectorAll('input[type="radio"]');
  inputs.forEach(input => {
    input.checked = false;
  });

  nextBtn.disabled = true;
}

answerForm.addEventListener("change", () => {
  nextBtn.disabled = false;
});

answerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const selected = answerForm.answer.value;
  const currentQ = questions[currentQuestionIndex];
  const selectedAnswer = currentQ.answers.find(ans => ans.value === selected);

  // Add points for selected answer
  for (const [char, pts] of Object.entries(selectedAnswer.points)) {
    scores[char] += pts;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    // Save scores to localStorage and redirect to result page
    localStorage.setItem("hpQuizScores", JSON.stringify(scores));
    window.location.href = "result.html";
  }
});

// Initialize first question on load
loadQuestion();
