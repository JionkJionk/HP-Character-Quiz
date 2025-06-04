const characterMap = {
  HP: "Harry Potter",
  HG: "Hermione Granger",
  RW: "Ron Weasley",
  DM: "Draco Malfoy",
  NL: "Neville Longbottom",
  AD: "Albus Dumbledore",
  MM: "Minerva McGonagall",
  RH: "Rubeus Hagrid",
  SS: "Severus Snape"
};

// Point values from your quiz (so far q1 and q2)
const scoreData = {
  q1: {
    a: { HP:2, HG:1, RW:1, DM:0, NL:1, AD:2, MM:1, RH:1, SS:0 },
    b: { HP:1, HG:2, RW:2, DM:0, NL:2, AD:1, MM:2, RH:2, SS:0 },
    c: { HP:0, HG:1, RW:1, DM:0, NL:1, AD:0, MM:1, RH:1, SS:0 },
    d: { HP:0, HG:0, RW:0, DM:1, NL:0, AD:0, MM:0, RH:0, SS:1 },
    e: { HP:0, HG:0, RW:0, DM:2, NL:0, AD:0, MM:0, RH:0, SS:2 }
  },
  q2: {
    a: { HP:0, HG:2, RW:0, DM:0, NL:1, AD:2, MM:2, RH:0, SS:2 },
    b: { HP:0, HG:1, RW:0, DM:0, NL:2, AD:1, MM:1, RH:0, SS:1 },
    c: { HP:0, HG:0, RW:0, DM:0, NL:1, AD:0, MM:0, RH:0, SS:0 },
    d: { HP:1, HG:0, RW:1, DM:1, NL:0, AD:0, MM:0, RH:1, SS:0 },
    e: { HP:2, HG:0, RW:2, DM:2, NL:0, AD:0, MM:0, RH:2, SS:0 }
  },
  q3: {
    a: { HP:0, HG:2, RW:0, DM:0, NL:1, AD:1, MM:2, RH:0, SS:2 },
    b: { HP:0, HG:1, RW:0, DM:0, NL:2, AD:2, MM:1, RH:0, SS:1 },
    c: { HP:0, HG:0, RW:0, DM:0, NL:1, AD:1, MM:0, RH:0, SS:0 },
    d: { HP:1, HG:0, RW:1, DM:1, NL:0, AD:0, MM:0, RH:1, SS:0 },
    e: { HP:2, HG:0, RW:2, DM:2, NL:0, AD:0, MM:0, RH:2, SS:0 }
  },
  q4: {
    a: { HP:0, HG:2, RW:0, DM:0, NL:1, AD:2, MM:2, RH:0, SS:2 },
    b: { HP:0, HG:1, RW:0, DM:0, NL:2, AD:1, MM:1, RH:0, SS:1 },
    c: { HP:0, HG:0, RW:0, DM:0, NL:1, AD:0, MM:0, RH:0, SS:0 },
    d: { HP:1, HG:0, RW:1, DM:1, NL:0, AD:0, MM:0, RH:1, SS:0 },
    e: { HP:2, HG:0, RW:2, DM:2, NL:0, AD:0, MM:0, RH:2, SS:0 }
  },
  q5: {
    a: { HP:2, HG:0, RW:1, DM:0, NL:0, AD:2, MM:0, RH:2, SS:0 },
    b: { HP:1, HG:0, RW:2, DM:0, NL:0, AD:1, MM:0, RH:1, SS:0 },
    c: { HP:0, HG:0, RW:1, DM:0, NL:0, AD:0, MM:0, RH:0, SS:0 },
    d: { HP:0, HG:1, RW:0, DM:1, NL:1, AD:0, MM:1, RH:0, SS:1 },
    e: { HP:0, HG:2, RW:0, DM:2, NL:2, AD:0, MM:2, RH:0, SS:2 }
  },
  q6: {
    a: { HP:2, HG:2, RW:1, DM:0, NL:2, AD:2, MM:0, RH:2, SS:0 },
    b: { HP:1, HG:1, RW:2, DM:0, NL:1, AD:1, MM:1, RH:1, SS:0 },
    c: { HP:0, HG:0, RW:1, DM:0, NL:0, AD:0, MM:2, RH:0, SS:0 },
    d: { HP:0, HG:0, RW:0, DM:1, NL:0, AD:0, MM:1, RH:0, SS:1 },
    e: { HP:0, HG:0, RW:0, DM:2, NL:0, AD:0, MM:0, RH:0, SS:2 } 
  },
  q7: {
    a: { HP:2, HG:0, RW:0, DM:0, NL:1, AD:2, MM:1, RH:2, SS:2 },
    b: { HP:1, HG:1, RW:1, DM:0, NL:2, AD:1, MM:2, RH:1, SS:1 },
    c: { HP:0, HG:2, RW:2, DM:0, NL:1, AD:0, MM:1, RH:0, SS:0 },
    d: { HP:0, HG:1, RW:1, DM:1, NL:0, AD:0, MM:0, RH:0, SS:0 },
    e: { HP:0, HG:0, RW:0, DM:2, NL:0, AD:0, MM:0, RH:0, SS:0 }
  },
  q8: {
    a: { HP:1, HG:2, RW:0, DM:0, NL:0, AD:2, MM:2, RH:0, SS:2 },
    b: { HP:2, HG:1, RW:0, DM:0, NL:0, AD:1, MM:1, RH:0, SS:1 },
    c: { HP:1, HG:0, RW:0, DM:0, NL:0, AD:0, MM:0, RH:0, SS:0 },
    d: { HP:0, HG:0, RW:1, DM:1, NL:1, AD:0, MM:0, RH:1, SS:0 },
    e: { HP:0, HG:0, RW:2, DM:2, NL:2, AD:0, MM:0, RH:2, SS:0 }
  },
  q9: {
    a: { HP:0, HG:0, RW:0, DM:0, NL:2, AD:0, MM:2, RH:0, SS:2 },
    b: { HP:0, HG:1, RW:0, DM:0, NL:1, AD:0, MM:1, RH:0, SS:1 },
    c: { HP:1, HG:2, RW:1, DM:0, NL:0, AD:0, MM:0, RH:0, SS:0 },
    d: { HP:2, HG:1, RW:2, DM:1, NL:0, AD:1, MM:0, RH:1, SS:0 },
    e: { HP:1, HG:0, RW:1, DM:2, NL:0, AD:2, MM:0, RH:2, SS:0 }
  },
  q10: {
    a: { HP:2, HG:1, RW:2, DM:0, NL:0, AD:2, MM:0, RH:2, SS:0 },
    b: { HP:1, HG:2, RW:1, DM:0, NL:0, AD:1, MM:1, RH:1, SS:0 },
    c: { HP:0, HG:1, RW:0, DM:0, NL:1, AD:0, MM:2, RH:0, SS:0 },
    d: { HP:0, HG:0, RW:0, DM:1, NL:2, AD:0, MM:1, RH:0, SS:1 },
    e: { HP:0, HG:0, RW:0, DM:2, NL:1, AD:0, MM:0, RH:0, SS:2 }
  },
  q11: {
    a: { HP:0, HG:2, RW:2, DM:0, NL:2, AD:2, MM:2, RH:2, SS:0 },
    b: { HP:1, HG:1, RW:1, DM:0, NL:1, AD:1, MM:1, RH:1, SS:0 },
    c: { HP:2, HG:0, RW:0, DM:0, NL:0, AD:0, MM:0, RH:0, SS:0 },
    d: { HP:1, HG:0, RW:0, DM:1, NL:0, AD:0, MM:0, RH:0, SS:1 },
    e: { HP:0, HG:0, RW:0, DM:2, NL:0, AD:0, MM:0, RH:0, SS:2 }
  },
  q12: {
    a: { HP:2, HG:0, RW:2, DM:2, NL:0, AD:2, MM:0, RH:2, SS:0 },
    b: { HP:1, HG:0, RW:1, DM:1, NL:1, AD:1, MM:0, RH:1, SS:1 },
    c: { HP:0, HG:0, RW:0, DM:0, NL:2, AD:0, MM:1, RH:0, SS:2 },
    d: { HP:0, HG:1, RW:0, DM:0, NL:1, AD:0, MM:2, RH:0, SS:1 },
    e: { HP:0, HG:2, RW:0, DM:0, NL:0, AD:0, MM:1, RH:0, SS:0 }
  },
  q13: {
    a: { HP:2, HG:0, RW:1, DM:0, NL:2, AD:2, MM:1, RH:0, SS:0 },
    b: { HP:1, HG:1, RW:2, DM:0, NL:1, AD:1, MM:2, RH:0, SS:0 },
    c: { HP:0, HG:2, RW:1, DM:0, NL:0, AD:0, MM:1, RH:0, SS:0 },
    d: { HP:0, HG:1, RW:0, DM:1, NL:0, AD:0, MM:0, RH:1, SS:1 },
    e: { HP:0, HG:0, RW:0, DM:2, NL:0, AD:0, MM:0, RH:2, SS:2 }
  },
  q14: {
    a: { HP:2, HG:0, RW:0, DM:0, NL:0, AD:2, MM:0, RH:0, SS:1 },
    b: { HP:1, HG:0, RW:0, DM:0, NL:0, AD:1, MM:0, RH:0, SS:2 },
    c: { HP:0, HG:1, RW:0, DM:0, NL:0, AD:0, MM:0, RH:0, SS:1 },
    d: { HP:0, HG:2, RW:1, DM:1, NL:1, AD:0, MM:1, RH:1, SS:0 },
    e: { HP:0, HG:1, RW:2, DM:2, NL:2, AD:0, MM:2, RH:2, SS:0 }
  },
  q15: {
    a: { HP:0, HG:2, RW:0, DM:0, NL:0, AD:2, MM:2, RH:0, SS:2 },
    b: { HP:0, HG:1, RW:0, DM:0, NL:1, AD:1, MM:1, RH:0, SS:1 },
    c: { HP:0, HG:0, RW:0, DM:0, NL:1, AD:0, MM:1, RH:1, SS:0 },
    d: { HP:1, HG:0, RW:1, DM:1, NL:1, AD:0, MM:0, RH:1, SS:0 },
    e: { HP:2, HG:0, RW:2, DM:2, NL:0, AD:0, MM:0, RH:2, SS:0 }
  },
  q16: {
    a: { HP:2, HG:2, RW:0, DM:0, NL:2, AD:2, MM:2, RH:0, SS:2 },
    b: { HP:1, HG:1, RW:0, DM:0, NL:1, AD:1, MM:1, RH:0, SS:1 },
    c: { HP:0, HG:0, RW:1, DM:0, NL:0, AD:0, MM:0, RH:1, SS:0 },
    d: { HP:0, HG:0, RW:2, DM:1, NL:0, AD:0, MM:0, RH:2, SS:0 },
    e: { HP:0, HG:0, RW:1, DM:2, NL:0, AD:0, MM:0, RH:1, SS:0 }
  },
  q17: {
    a: { HP:0, HG:0, RW:2, DM:2, NL:0, AD:0, MM:0, RH:0, SS:1 },
    b: { HP:0, HG:0, RW:1, DM:1, NL:0, AD:0, MM:0, RH:0, SS:2 },
    c: { HP:0, HG:0, RW:0, DM:0, NL:0, AD:0, MM:0, RH:0, SS:1 },
    d: { HP:1, HG:1, RW:0, DM:0, NL:1, AD:1, MM:1, RH:1, SS:0 },
    e: { HP:2, HG:2, RW:0, DM:0, NL:2, AD:2, MM:2, RH:2, SS:0 }
  },
  q18: {
    a: { HP:0, HG:0, RW:2, DM:2, NL:0, AD:0, MM:0, RH:1, SS:2 },
    b: { HP:1, HG:0, RW:1, DM:1, NL:0, AD:0, MM:0, RH:2, SS:1 },
    c: { HP:2, HG:0, RW:0, DM:0, NL:0, AD:0, MM:0, RH:1, SS:0 },
    d: { HP:1, HG:1, RW:0, DM:0, NL:1, AD:1, MM:1, RH:0, SS:0 },
    e: { HP:0, HG:2, RW:0, DM:0, NL:2, AD:2, MM:2, RH:0, SS:0 }
  },
  q19: {
    a: { HP:2, HG:1, RW:0, DM:0, NL:2, AD:2, MM:2, RH:0, SS:0 },
    b: { HP:1, HG:2, RW:0, DM:0, NL:1, AD:1, MM:1, RH:0, SS:0 },
    c: { HP:0, HG:1, RW:0, DM:0, NL:0, AD:0, MM:0, RH:0, SS:0 },
    d: { HP:0, HG:0, RW:1, DM:1, NL:0, AD:0, MM:0, RH:1, SS:1 },
    e: { HP:0, HG:0, RW:2, DM:2, NL:0, AD:0, MM:0, RH:2, SS:2 }
  },
  q20: {
    a: { HP:2, HG:2, RW:0, DM:0, NL:0, AD:2, MM:2, RH:0, SS:0 },
    b: { HP:1, HG:1, RW:0, DM:0, NL:1, AD:1, MM:1, RH:0, SS:0 },
    c: { HP:0, HG:0, RW:0, DM:0, NL:2, AD:0, MM:0, RH:1, SS:0 },
    d: { HP:0, HG:0, RW:1, DM:1, NL:1, AD:0, MM:0, RH:2, SS:1 },
    e: { HP:0, HG:0, RW:2, DM:2, NL:0, AD:0, MM:0, RH:1, SS:2 }
  },
  q21: {
    a: { HP:2, HG:1, RW:2, DM:0, NL:1, AD:1, MM:1, RH:2, SS:1 },
    b: { HP:1, HG:2, RW:1, DM:0, NL:2, AD:2, MM:2, RH:1, SS:2 },
    c: { HP:0, HG:1, RW:0, DM:0, NL:1, AD:1, MM:1, RH:0, SS:1 },
    d: { HP:0, HG:0, RW:0, DM:1, NL:0, AD:0, MM:0, RH:0, SS:0 },
    e: { HP:0, HG:0, RW:0, DM:2, NL:0, AD:0, MM:0, RH:0, SS:0 }
  },
  q22: {
    a: { HP:1, HG:2, RW:0, DM:0, NL:2, AD:2, MM:2, RH:0, SS:0 },
    b: { HP:2, HG:1, RW:0, DM:0, NL:1, AD:1, MM:1, RH:1, SS:0 },
    c: { HP:1, HG:0, RW:1, DM:0, NL:0, AD:0, MM:0, RH:2, SS:0 },
    d: { HP:0, HG:0, RW:2, DM:1, NL:0, AD:0, MM:0, RH:1, SS:1 },
    e: { HP:0, HG:0, RW:1, DM:2, NL:0, AD:0, MM:0, RH:0, SS:2 }
  },
  q23: {
    a: { HP:2, HG:1, RW:0, DM:0, NL:1, AD:2, MM:2, RH:0, SS:2 },
    b: { HP:1, HG:2, RW:1, DM:0, NL:2, AD:1, MM:1, RH:0, SS:1 },
    c: { HP:0, HG:1, RW:2, DM:0, NL:1, AD:0, MM:0, RH:1, SS:0 },
    d: { HP:0, HG:0, RW:1, DM:1, NL:0, AD:0, MM:0, RH:2, SS:0 },
    e: { HP:0, HG:0, RW:0, DM:2, NL:0, AD:0, MM:0, RH:1, SS:0 }
  },
  q24: {
    a: { HP:0, HG:0, RW:0, DM:0, NL:2, AD:2, MM:0, RH:2, SS:1 },
    b: { HP:0, HG:1, RW:0, DM:0, NL:1, AD:1, MM:0, RH:1, SS:2 },
    c: { HP:0, HG:2, RW:1, DM:0, NL:0, AD:0, MM:1, RH:0, SS:1 },
    d: { HP:1, HG:1, RW:2, DM:1, NL:0, AD:0, MM:2, RH:0, SS:0 },
    e: { HP:2, HG:0, RW:1, DM:2, NL:0, AD:0, MM:1, RH:0, SS:0 }
  },
  q25: {
    a: { HP:2, HG:0, RW:0, DM:0, NL:0, AD:2, MM:2, RH:0, SS:2 },
    b: { HP:1, HG:1, RW:0, DM:0, NL:0, AD:1, MM:1, RH:0, SS:1 },
    c: { HP:0, HG:2, RW:1, DM:0, NL:0, AD:0, MM:0, RH:0, SS:0 },
    d: { HP:0, HG:1, RW:2, DM:1, NL:1, AD:0, MM:0, RH:1, SS:0 },
    e: { HP:0, HG:0, RW:1, DM:2, NL:2, AD:0, MM:0, RH:2, SS:0 }
  },
  q26: {
    a: { HP:2, HG:2, RW:0, DM:2, NL:0, AD:2, MM:0, RH:2, SS:2 },
    b: { HP:1, HG:1, RW:0, DM:1, NL:0, AD:1, MM:0, RH:1, SS:1 },
    c: { HP:0, HG:0, RW:0, DM:0, NL:0, AD:0, MM:1, RH:0, SS:0 },
    d: { HP:0, HG:0, RW:1, DM:0, NL:1, AD:0, MM:2, RH:0, SS:0 },
    e: { HP:0, HG:0, RW:2, DM:0, NL:2, AD:0, MM:1, RH:0, SS:0 }
  },
  q27: {
    a: { HP:1, HG:2, RW:0, DM:0, NL:0, AD:2, MM:2, RH:2, SS:2 },
    b: { HP:2, HG:1, RW:0, DM:0, NL:0, AD:1, MM:1, RH:1, SS:1 },
    c: { HP:1, HG:0, RW:0, DM:0, NL:0, AD:0, MM:0, RH:0, SS:0 },
    d: { HP:0, HG:0, RW:1, DM:1, NL:1, AD:0, MM:0, RH:0, SS:0 },
    e: { HP:0, HG:0, RW:2, DM:2, NL:2, AD:0, MM:0, RH:0, SS:0 }
  },
  q28: {
    a: { HP:0, HG:0, RW:0, DM:2, NL:0, AD:0, MM:0, RH:0, SS:2 },
    b: { HP:0, HG:0, RW:1, DM:1, NL:0, AD:0, MM:0, RH:0, SS:1 },
    c: { HP:0, HG:0, RW:2, DM:0, NL:0, AD:0, MM:0, RH:1, SS:0 },
    d: { HP:1, HG:1, RW:1, DM:0, NL:1, AD:1, MM:1, RH:2, SS:0 },
    e: { HP:2, HG:2, RW:0, DM:0, NL:2, AD:2, MM:2, RH:1, SS:0 }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quizForm");
  if (form) {
    const submitBtn = form.querySelector("button[type='submit']");
    const totalQuestions = Object.keys(scoreData).length;

    function checkAllAnswered() {
      const formData = new FormData(form);
      const answeredCount = new Set([...formData.keys()]).size;

      if (answeredCount === totalQuestions) {
        submitBtn.classList.add("ready-to-submit");
        submitBtn.disabled = false;
      } else {
        submitBtn.classList.remove("ready-to-submit");
        submitBtn.disabled = true;
      }
    }

    // Initial check on page load
    checkAllAnswered();

    // Listen for changes to update button style
    form.addEventListener("change", checkAllAnswered);

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const totalScores = {};
      const twoPointCounts = {};

      for (const [qName, choice] of formData.entries()) {
        const points = scoreData[qName]?.[choice];
        if (points) {
          for (const [char, value] of Object.entries(points)) {
            totalScores[char] = (totalScores[char] || 0) + value;
            if (value === 2) {
              twoPointCounts[char] = (twoPointCounts[char] || 0) + 1;
            }
          }
        }
      }

      const maxScore = Math.max(...Object.values(totalScores));
      const tied = Object.keys(totalScores).filter(char => totalScores[char] === maxScore);

      let resultChar = tied[0];
      if (tied.length > 1) {
        const maxTwos = Math.max(...tied.map(char => twoPointCounts[char] || 0));
        resultChar = tied.find(char => (twoPointCounts[char] || 0) === maxTwos) || tied[0];
      }

      sessionStorage.setItem("resultChar", resultChar);
      sessionStorage.setItem("resultDesc", `You are most like ${characterMap[resultChar]}.`);
      window.location.href = "result.html";
    });
  } else {
    const resultChar = sessionStorage.getItem("resultChar");
    const resultDesc = sessionStorage.getItem("resultDesc");
    document.getElementById("result-character").innerText =
      characterMap[resultChar] || "Unknown";
    document.getElementById("result-description").innerText =
      resultDesc || "Description not found.";
  }
});
