document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = new FormData(this);
  let scores = {
    HP: 0, RW: 0, HG: 0, MM: 0, AD: 0, RH: 0, SS: 0, DM: 0, NL: 0
  };

  // Question 1
  const q1 = form.get("q1");
  if (q1 === "strongly-agree") scores["HG"] += 2;
  else if (q1 === "agree") scores["MM"] += 1;
  else if (q1 === "disagree") scores["RW"] += 1;
  else if (q1 === "strongly-disagree") scores["DM"] += 2;

  // Question 2
  const q2 = form.get("q2");
  if (q2 === "brave") scores["HP"] += 2;
  if (q2 === "clever") scores["HG"] += 2;
  if (q2 === "loyal") scores["RH"] += 2;
  if (q2 === "ambitious") scores["DM"] += 2;

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

  const characterDescriptions = {
    HP: "You’re brave, loyal, and willing to risk it all for your friends. You have a strong moral compass and don’t shy away from danger.",
    RW: "You’re funny, supportive, and value friendship above all. You may doubt yourself sometimes, but your heart is always in the right place.",
    HG: "You’re intelligent, hardworking, and often the voice of reason. You stand up for what’s right—even if it’s not popular.",
    MM: "You’re wise, strict but fair, and deeply loyal to your principles. You don’t back down when defending others.",
    AD: "You’re calm, philosophical, and a true strategist. You see the big picture and guide others with compassion and strength.",
    RH: "You’re warm-hearted, nurturing, and full of love for magical creatures and people alike. You protect those you care about.",
    SS: "You’re complex, disciplined, and incredibly intelligent. Your true emotions may be hidden, but your loyalty runs deep.",
    DM: "You’re ambitious, clever, and care about status—but deep down, you’re still figuring out your place in the world.",
    NL: "You’re gentle, kind, and underestimated. But when it matters most, you rise with surprising strength and bravery."
  };

  // Determine top character
  const topChar = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <strong>You are most like:</strong><br>
    <span style="font-size: 1.6em; font-weight: bold;">${characterNames[topChar]}</span>
    <div class="description">${characterDescriptions[topChar]}</div>
  `;
});
