let characterPoints = {};

function assignPoints(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[type="radio"]:checked');

  if (inputs.length < form.querySelectorAll('input[type="radio"]').length / 5) {
    alert("Please answer all questions.");
    return false;
  }

  inputs.forEach(input => {
    const [char, weight] = input.value.split(':');
    if (!characterPoints[char]) characterPoints[char] = 0;
    characterPoints[char] += parseInt(weight);
  });

  localStorage.setItem('characterPoints', JSON.stringify(characterPoints));
  return true;
}

document.addEventListener('DOMContentLoaded', () => {
  const likertForm = document.getElementById('likertQuizForm');
  const scenarioForm = document.getElementById('scenarioQuizForm');
  const resultDisplay = document.getElementById('resultDisplay');

  if (likertForm) {
    likertForm.addEventListener('submit', e => {
      e.preventDefault();
      if (assignPoints('likertQuizForm')) {
        window.location.href = 'scenario.html';
      }
    });
  }

  if (scenarioForm) {
    scenarioForm.addEventListener('submit', e => {
      e.preventDefault();
      if (assignPoints('scenarioQuizForm')) {
        window.location.href = 'result.html';
      }
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
