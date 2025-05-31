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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quizForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const answers = {};
      new FormData(form).forEach((value, key) => {
        answers[key] = value;
      });

      // Dummy logic to demo one character
      let topCharacter = "HG";
      let description = "You're clever, logical, and passionate about learning — just like Hermione Granger.";

      sessionStorage.setItem("resultChar", topCharacter);
      sessionStorage.setItem("resultDesc", description);
      window.location.href = "result.html";
    });
  } else {
    const resultChar = sessionStorage.getItem("resultChar");
    const resultDesc = sessionStorage.getItem("resultDesc");
    document.getElementById("result-character").innerText = characterMap[resultChar] || "Unknown";
    document.getElementById("result-description").innerText = resultDesc || "Description not found.";
  }
});
