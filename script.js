const questions = [
  {
    text: "You follow school rules even when no one is watching.",
    values: { HG: 2, MM: 2, HP: -1, DM: -2 }
  },
  {
    text: "You'd risk getting into trouble to help a friend.",
    values: { HP: 2, RW: 2, DM: -1, MM: -1 }
  },
  {
    text: "You enjoy being the center of attention.",
    values: { DM: 2, HP: 1, RW: -1, SS: -2 }
  },
  {
    text: "You’re often underestimated but prove others wrong.",
    values: { NL: 2, HP: 1, RH: 1, SS: 1 }
  }
  // Add more questions here
];

const characters = ['HP', 'HG', 'RW', 'DM', 'NL', 'AD', 'MM', 'RH', 'SS'];

const form = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');

// Generate the full form with all questions at once
questions.forEach((q, index) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('question-block');
  wrapper.innerHTML = `
    <p class="question-text">${q.text}</p>
    <div class="answer-row left">
      <span class="agree-label">Agree</span>
      ${[5, 4, 3, 2, 1].map((val, i) => `
        <label>
          <input type="radio" name="q${index}" value="${val}" />
          <span class="bubble size-${val}"></span>
        </label>
      `).join('')}
    </div>
    <div class="answer-row right">
      ${[1, 2, 3, 4, 5].map((val, i) => `
        <label>
          <input type="radio" name="q${index}" value="${-val}" />
          <span class="bubble size-${val}"></span>
        </label>
      `).join('')}
      <span class="disagree-label">Disagree</span>
    </div>
  `;
  form.appendChild(wrapper);
});

// Enable submit only when all questions are answered
form.addEventListener('change', () => {
  const allAnswered = questions.every((_, i) => form[`q${i}`].value !== '');
  submitBtn.disabled = !allAnswered;
});

submitBtn.addEventListener('click', () => {
  const scores = Object.fromEntries(characters.map(c => [c, 0]));

  questions.forEach((q, i) => {
    const val = parseInt(form[`q${i}`].value);
    for (const [char, score] of Object.entries(q.values)) {
      scores[char] += score * val;
    }
  });

  const resultChar = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const descriptions = {
    HP: "You're brave, loyal, and always willing to do what's right—even when it's hard.",
    HG: "You're smart, driven, and care deeply about fairness and doing your best.",
    RW: "You're loyal, funny, and always there when your friends need you.",
    DM: "You're confident, ambitious, and not afraid to speak your mind.",
    NL: "You're quiet but powerful, and you grow stronger with every challenge.",
    AD: "You're wise, calm, and always one step ahead.",
    MM: "You're strict but fair, and always stand up for what you believe in.",
    RH: "You're kind-hearted, brave, and love creatures big and small.",
    SS: "You're complex, intelligent, and more heroic than most people realize."
  };

  localStorage.setItem('result', resultChar);
  localStorage.setItem('description', descriptions[resultChar]);
  window.location.href = 'result.html';
});
