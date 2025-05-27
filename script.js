const TOTAL_QUESTIONS = 4; // update this to total number of all questions on likert + scenario combined

let characterPoints = {};

// Helper: Count how many questions are answered in the current form
function countAnsweredQuestions(form) {
  const questionNames = new Set();
  const inputs = form.querySelectorAll('input[type="radio"]');
  inputs.forEach(input => questionNames.add(input.name));
  
  let answeredCount = 0;
  questionNames.forEach(name => {
    if (form.querySelector(`input[name="${name}"]:checked`)) {
      answeredCount++;
    }
  });
  return answeredCount;
}

// Update progress bar function
function updateProgressBar(form) {
  const answered = countAnsweredQuestions(form);
  const progressPercent = (answered / TOTAL_QUESTIONS) * 100;
  const progressFill = form.querySelector('#progressFill');
  if (progressFill) {
    progressFill.style.width = progressPercent + '%';
  }
}

// Assign points from checked inputs on the current page
function assignPoints(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[type="radio"]:checked');
  
  // Load existing points from localStorage or reset
  const storedPoints = localStorage.getItem('characterPoints');
  characterPoints = storedPoints ? JSON.parse(storedPoints) : {};
  
  inputs.forEach(input => {
    const val = input.value; // format "Character:Points"
    const [character, pointsStr] = val.split(':');
    const points = parseInt(pointsStr, 10);
    if (!characterPoints[character]) {
      characterPoints[character] = 0;
    }
    characterPoints[character] += points;
  });

  localStorage.setItem('characterPoints', JSON.stringify(characterPoints));
}

document.addEventListener('DOMContentLoaded', () => {
  const likertForm = document.getElementById('likertQuizForm');
  const scenarioForm = document.getElementById('scenarioQuizForm');
  const resultDisplay = document.getElementById('resultDisplay');

  if (likertForm) {
    // Real-time progress update on radio change
    likertForm.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', () => updateProgressBar(likertForm));
    });
    
    updateProgressBar(likertForm);

    likertForm.addEventListener('submit', e => {
      e.preventDefault();
      const answered = countAnsweredQuestions(likertForm);
      const questionCount = new Set([...likertForm.querySelectorAll('input[type="radio"]')].map(input => input.name)).size;
      if (answered < questionCount) {
        alert('Please answer all questions before continuing.');
        return;
      }
      assignPoints('likertQuizForm');
      window.location.href = 'scenario.html';
    });
  }

  if (scenarioForm) {
    // Real-time progress update on radio change
    scenarioForm.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', () => updateProgressBar(scenarioForm));
    });
    
    updateProgressBar(scenarioForm);

    scenarioForm.addEventListener('submit', e => {
      e.preventDefault();
      const answered = countAnsweredQuestions(scenarioForm);
      const questionCount = new Set([...scenarioForm.querySelectorAll('input[type="radio"]')].map(input => input.name)).size;
      if (answered < questionCount) {
        alert('Please answer all questions before submitting.');
        return;
      }
      assignPoints('scenarioQuizForm');
      window.location.href = 'result.html';
    });
  }

  if (resultDisplay) {
    // Show final result
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
