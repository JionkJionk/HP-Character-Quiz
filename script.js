document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Sample scoring map for demonstration (2 questions)
  const scores = {
    HP: 0, HG: 0, RW: 0, DM: 0, NL: 0, AD: 0, MM: 0, RH: 0, SS: 0
  };

  const answers = {
    q1: {
      a: { HP: 3, RW: 2, NL: 2 },
      b: { HP: 2, RW: 1 },
      c: {},
      d: { SS: 1 },
      e: { DM: 2 }
    },
    q2: {
      a: { HG: 2, MM: 2 },
      b: { HG: 1 },
      c: {},
      d: { RW: 1 },
      e: { HP: 1 }
    }
  };

  const formData = new FormData(document.getElementById("quizForm"));
  for (const [q, val] of formData.entries()) {
    const pointMap = answers[q]?.[val];
    if (pointMap) {
      for (const char in pointMap) {
        scores[char] += pointMap[char];
      }
    }
  }

  const result = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  localStorage.setItem("resultCharacter", result);
  window.location.href = "result.html";
});
