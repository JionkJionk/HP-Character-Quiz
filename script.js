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
    a: { HP:2, HG:2, RW:2, DM:0, NL:1, AD:2, MM:1, RH:1, SS:0 },
    b: { HP:1, HG:1, RW:1, DM:0, NL:2, AD:1, MM:2, RH:2, SS:0 },
    c: { HP:0, HG:0, RW:0, DM:0, NL:1, AD:0, MM:1, RH:1, SS:0 },
    d: { HP:0, HG:0, RW:0, DM:1, NL:0, AD:0, MM:0, RH:0, SS:1 },
    e: { HP:0, HG:0, RW:0, DM:2, NL:0, AD:0, MM:0, RH:0, SS:2 }
  },
  q2: {
    a: { HP:2, HG:2, RW:2, DM:0, NL:1, AD:2, MM:2, RH:0, SS:2 },
    b: { HP:1, HG:1, RW:1, DM:0, NL:2, AD:1, MM:1, RH:0, SS:1 },
    c: { HP:0, HG:0, RW:0, DM:0, NL:1, AD:0, MM:0, RH:1, SS:0 },
    d: { HP:0, HG:0, RW:0, DM:1, NL:0, AD:0, MM:0, RH:2, SS:0 },
    e: { HP:0, HG:0, RW:0, DM:2, NL:0, AD:0, MM:0, RH:1, SS:0 }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quizForm");
  if (form) {
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
