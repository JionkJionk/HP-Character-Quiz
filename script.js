let characterPoints = {};
let currentIndex = 0;
const questionsPerPage = 3;

// Likert-style questions
const questions = [
  {
    question: "I value rules and structure.",
    answers: [
      { label: "Strongly Agree", value: "HG", weight: 2 },
      { label: "Agree", value: "MM", weight: 1 },
      { label: "Neutral", value: "RW", weight: 1 },
      { label: "Disagree", value: "HP", weight: 1 },
      { label: "Strongly Disagree", value: "DM", weight: 2 }
    ]
  },
  {
    question: "I act on my emotions without thinking.",
    answers: [
      { label: "Strongly Agree", value: "HP", weight: 2 },
      { label: "Agree", value: "DM", weight: 1 },
      { label: "Neutral", value: "RW", weight: 1 },
      { label: "Disagree", value: "HG", weight: 1 },
      { label: "Strongly Disagree", value: "SS", weight: 2 }
    ]
  },
  {
    question: "I like to solve problems logically.",
    answers: [
      { label: "Strongly Agree", value: "HG", weight: 2 },
      { label: "Agree", value: "AD", weight: 1 },
      { label: "Neutral", value: "HP", weight: 1 },
      { label: "Disagree", value: "RW", weight: 1 },
      { label: "Strongly Disagree", value: "RH", weight: 2 }
    ]
  },
  {
    question: "I am often underestimated by others.",
    answers: [
      { label: "Strongly Agree", value: "NL", weight: 2 },
      { label: "Agree", value: "SS", weight: 1 },
      { label: "Neutral", value: "RW", weight: 1 },
      { label: "Disagree", value: "DM", weight: 1 },
      { label: "Strongly Disagree", value: "AD", weight: 2 }
    ]
  }
];

function renderLikertQuestions() {
  const container = document.getElementById('likertQuestions');
  if (!container) return;

  container.innerHTML = '';

  const endIndex = currentIndex + questionsPerPage;
  const pageQuestions = questions.slice(currentIndex, endIndex);

  pageQuestions.forEach((q, i) => {
    const qEl = document.createElement('div');
    qEl.classList.add('question');
    qEl.innerHTML = `<h3>${q.question}</h3>`;

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('likert-options');

    q.answers.forEach((a, idx) => {
      const id = `q${currentIndex + i}-opt${idx}`;
      optionsDiv.innerHTML += `
        <label class="likert-option">
          <input type="radio" name="q${currentIndex + i}" value="${a.value}" data-weight="${a.weight}" required> ${a.label}
        </label>`;
    });

    qEl.appendChild(optionsDiv);
    container.appendChild(qEl);
  });
}

function assignPoints(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[type="radio"]:checked');

  inputs.forEach(input => {
    const character = input.value;
    const weight = parseInt(input.dataset.weight) || 1;
    if (!characterPoints[character]) {
      characterPoints[character] = 0;
    }
    characterPoints[character] += weight;
  });

  localStorage.setItem('characterPoints', JSON.stringify(characterPoints));
}

document.addEventListener('DOMContentLoaded', () => {
  const likertForm = document.getElementById('likertQuizForm');
  const scenarioForm = document.getElementById('scenarioQuizForm');
  const resultDisplay = document.getElementById('resultDisplay');

  if (likertForm) {
    renderLikertQuestions();
    likertForm.addEventListener('submit', e => {
      e.preventDefault();
      assignPoints('likertQuizForm');

      currentIndex += questionsPerPage;
      if (currentIndex < questions.length) {
        renderLikertQuestions();
      } else {
        window.location.href = 'scenario.html';
      }
    });
  }

  if (scenarioForm) {
    scenarioForm.addEventListener('submit', e => {
      e.preventDefault();
      assignPoints('scenarioQuizForm');
      window.location.href = 'result.html';
    });
  }

  if (resultDisplay) {
    const stored = localStorage.getItem('characterPoints');
    if (stored) {
      const points = JSON.parse(stored);
      let bestCharacter = '';
      let max = -1;
      for (const [char, score] of Object.entries(points)) {
        if (score > max) {
          max = score;
          bestCharacter = char;
        }
      }

      resultDisplay.textContent = bestCharacter
        ? `${bestCharacter} — your magical match!`
        : 'No character found.';
    }
  }
});
