// Total questions across both quizzes:
const TOTAL_QUESTIONS = 5; // 3 in likert.html + 2 in scenario.html

let characterPoints = {};

// Helper to update localStorage and object
function addPoints(character, points) {
  if (!characterPoints[character]) {
    characterPoints[character] = 0;
  }
  characterPoints[character] += points;
  localStorage.setItem('characterPoints', JSON.stringify(characterPoints));
}

// Parse value like "Harry:5" into {character, points}
function parseValue(val) {
  const [character, ptsStr] = val.split(':');
  return { character, points: Number(ptsStr) };
}

// Validate all questions answered
function validateForm(form) {
  const radios = form.querySelectorAll('input[type="radio"]');
  const names = new Set();
  radios.forEach(radio => names.add(radio.name));
  for (const name of names) {
    const checked = form.querySelector(`input[name="${name}"]:checked`);
    if (!checked) return false;
  }
  return true;
}

// Update progress bar, counting answered questions across pages
function updateProgressBar(form, progressFill) {
  const radios = form.querySelectorAll('input[type="radio"]');
  const names = new Set();
  radios.forEach(radio => names.add(radio.name));

  let answeredCount = 0;
  names.forEach(name => {
    if (form.querySelector(`input[name="${name}"]:checked`)) {
      answeredCount++;
    }
  });

  // Calculate how many questions user has answered in total (including previous page)
  let prevAnswered = Number(localStorage.getItem('answeredCount')) || 0;
  // If on likert.html, progress counts q answered here only
  // If on scenario.html, add previous (likert) count from localStorage

  let currentPageAnswered = answeredCount;
  let totalAnswered = currentPageAnswered;

  // We check the page to decide how to count totalAnswered for progress bar
  if (window.location.pathname.includes('scenario.html')) {
    // Scenario page adds previously answered questions (stored in localStorage)
    totalAnswered = prevAnswered + currentPageAnswered;
  }

  // Update bar width
  const percent = (totalAnswered / TOTAL_QUESTIONS) * 100;
  progressFill.style.width = `${percent}%`;
}

// Assign points from the form
function assignPoints(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[type="radio"]:checked');
  
  inputs.forEach(input => {
    const { character, points } = parseValue(input.value);
    addPoints(character, points);
  });

  // Update answered questions count for progress bar across pages
  const answeredCount = inputs.length;
  let prevAnswered = Number(localStorage.getItem('answeredCount')) || 0;

  // If on scenario.html, add to previous
  if (window.location.pathname.includes('scenario.html')) {
    localStorage.setItem('answeredCount', prevAnswered + answeredCount);
  } else if (window.location.pathname.includes('likert.html')) {
    // On likert page, reset answeredCount to current (start fresh)
    localStorage.setItem('answeredCount', answeredCount);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const likertForm = document.getElementById('likertQuizForm');
  const scenarioForm = document.getElementById('scenarioQuizForm');
  const resultDisplay = document.getElementById('resultDisplay');
  const progressFill = document.getElementById('progressFill');

  if (likertForm) {
    updateProgressBar(likertForm, progressFill);

    likertForm.addEventListener('change', () => {
      updateProgressBar(likertForm, progressFill);
    });

    likertForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateForm(likertForm)) {
        alert('Please answer all questions before continuing.');
        return;
      }
      assignPoints('likertQuizForm');
      window.location.href = 'scenario.html';
    });
  }

  if (scenarioForm
