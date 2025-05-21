document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = new FormData(this);
  let scores = {
    HP: 0, RW: 0, HG: 0, MM: 0, AD: 0, RH: 0, SS: 0, DM: 0, NL: 0
  };

  // Question 1 scoring
  const q1 = form.get("q1");
  if (q1 === "strongly-agree") scores["HG"] += 2;
  else if (q1 === "agree") scores["MM"] += 1;
  else if (q1 === "disagree") scores["RW"] += 1;
  else if (q1 === "strongly-disagree") scores["DM"] += 2;

  // Question 2 scoring
  const q2 = form.get("q2");
  if (q2 === "brave") scores["HP"] += 2;
  if (q2 === "clever") scores["HG"] += 2;
  if (q2 === "loyal") scores["RH"] += 2;
  if (q2 === "ambitious") scores["DM"] += 2;

  // Find top character
  const topChar = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

  const characterNames = {
    HP: "Harry Potter",
    RW: "Ron Weasley",
    HG: "Hermione Granger",
    MM: "Minerva McGonagall",
    AD: "Albus Dumbledore",
    RH: "Rubeus Hagrid",
    SS: "Severus Snape",
    DM: "Draco Malfoy",
    NL: "Neville Longbottom"
  };

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `<strong>You are most like:</strong> <br><span style="font-size:1.5em">${characterNames[topChar]}</span>`;
});
