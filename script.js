let characterPoints = {};

function assignPoints(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[type="radio"]:checked');
  
  inputs.forEach(input => {
    const character = input.value;
    if (!characterPoints[character]) {
      characterPoints[character] = 0;
    }
    characterPoints[character]++;
  });

  localStorage.setItem('characterPoints', JSON.stringify(characterPoints));
}

document.addEventListener('DOMContentLoaded', () => {
  const likertForm = document.getElementById('likertQuizForm');
  const scenarioForm = document.getElementById('scenarioQuizForm');
  const resultDisplay = document.getElementById('resultDisplay');

  if (likertForm) {
    likertForm.addEventListener('submit', e => {
      e.preventDefault();
      assignPoints('likertQuizForm');
      window.location.href = 'scenario.html';
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
