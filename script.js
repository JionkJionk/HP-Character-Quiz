const quizData = [
  {
    question: "I often think before I act, even if it slows me down.",
    options: [
      { text: "Strongly Agree", points: { HG: 2, MM: 2, AD: 2 } },
      { text: "Agree", points: { HG: 1, MM: 1, AD: 1, SS: 1 } },
      { text: "Neutral", points: { SS: 2 } },
      { text: "Disagree", points: { HP: 1, RW: 1, DM: 1, RH: 1, NL: 1, SS: 1 } },
      { text: "Strongly Disagree", points: { HP: 2, RW: 2, DM: 2, RH: 2, NL: 2 } }
    ]
  }
  // Add more questions here
];

const characters = {
  HP: { name: "Harry Potter", house: "gryffindor", img: "harry.jpg", desc: "Brave and selfless, the Boy Who Lived." },
  RW: { name: "Ron Weasley", house: "gryffindor", img: "ron.jpg", desc: "Loyal, funny, and brave under pressure." },
  HG: { name: "Hermione Granger", house: "gryffindor", img: "hermione.jpg", desc: "Brilliant, logical, and fiercely loyal." },
  MM: { name: "Minerva McGonagall", house: "gryffindor", img: "mcgonagall.jpg", desc: "Wise and composed, a true leader." },
  AD: { name: "Albus Dumbledore", house: "gryffindor", img: "dumbledore.jpg", desc: "The kind, powerful headmaster of Hogwarts." },
  RH: { name: "Rubeus Hagrid", house: "gryffindor", img: "hagrid.jpg", desc: "Gentle giant with a big heart." },
  SS: { name: "Severus Snape", house: "slytherin", img: "snape.jpg", desc: "Mysterious and brave in his own way." },
  DM: { name: "Draco Malfoy", house: "slytherin", img: "draco.jpg", desc: "Proud, cunning, and ambitious." },
  NL: { name: "Neville Longbottom", house: "gryffindor", img: "neville.jpg", desc: "Shy but deeply courageous." }
};

function submitQuiz() {
  const form = document.getElementById("quiz-form");
  const formData = new FormData(form);
  const scores = {};

  for (let pair of formData.entries()) {
    const selected = JSON.parse(pair[1]);
    for (const [char, val] of Object.entries(selected)) {
      scores[char] = (scores[char] || 0) + val;
    }
  }

  const topChar = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  localStorage.setItem("resultChar", topChar);
  window.location.href = "result.html";
}

window.onload = () => {
  if (document.getElementById("quiz-form")) {
    const form = document.getElementById("quiz-form");
    quizData.forEach((q, index) => {
      const fieldset = document.createElement("fieldset");
      const legend = document.createElement("legend");
      legend.innerText = q.question;
      fieldset.appendChild(legend);

      q.options.forEach(opt => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "q" + index;
        input.value = JSON.stringify(opt.points);
        label.appendChild(input);
        label.append(" " + opt.text);
        fieldset.appendChild(label);
        fieldset.appendChild(document.createElement("br"));
      });

      form.appendChild(fieldset);
    });
  }

  if (document.getElementById("character-name")) {
    const charKey = localStorage.getItem("resultChar");
    const char = characters[charKey];

    document.getElementById("character-name").innerText = char.name;
    document.getElementById("character-img").src = char.img;
    document.getElementById("character-desc").innerText = char.desc;
    document.getElementById("result-card").classList.add(char.house);
  }
};

function shareResult() {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  alert("Result link copied to clipboard!");
}
