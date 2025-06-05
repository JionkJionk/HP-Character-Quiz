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

const characterDescriptions = {
  HP: `You are brave, determined, and loyal. You often take actions without thinking it through, but you trust your instincts to guide you in the right direction. You care about your friends, and you are willing to put yourself in danger to protect them. Like Harry, you carry a strong sense of justice and are not afraid to stand up for what is right.`,
  
  HG: `You are intelligent, hardworking, and curious. You always seek to learn and understand more, and you use your knowledge to help others. You are sometimes a perfectionist and overthinker, but you are loyal to your friends and those you trust, and you speak up for them even if it puts you in trouble. Like Hermione, you believe that knowledge is power and are not afraid to speak up for justice.`,
  
  RW: `You are loyal, funny, and sometimes a bit insecure. You may doubt yourself at times, but you are brave and step up when it truly matters. Like Ron, you seek attention and success, you value friendship deeply and would go out of your way to help your friends in need. You are often humorous and care for your friends, even if you fight with them sometimes.`,
  
  NL: `You are kindhearted, and timid, but surprisingly brave in important situations. You may not always be confident about your own strengths, but when your friends need you, you find the courage to stand up. You try to do what is right, even if it is hard. Not to get attention, but because you have a strong sense of justice. Like Neville, people may underestimate you, but deep down, you are much stronger than you realize.`,
  
  DM: `You are confident, ambitious, and care a lot about how others see you. You like to have power and sometimes act tough to get it. You appear cold-hearted and strong, but deep down, you care for your close friends and are very loyal to the people you look up to. You are always determined to achieve what you want. Like Malfoy, you may seem heartless, but you care for your friends. You are very persistent and try your best to fulfil your ambition.`,
  
  AD: `You are wise, patient, and thoughtful. You are always looking at the bigger picture and thinking deeply before making a decision. You like to help others by guiding them to the right answer, even if you have to keep some secrets from them. You are trusted and respected by many others because you are wise and thoughtful about every choice you make. You enjoy solving problems in creative ways and don’t jump to conclusions. Like Professor Dumbledore, even in the darkest of times, you know how to find happiness.`,
  
  MM: `You are strict, fair, and responsible. You take rules seriously and have high expectations for others. You may be strict, but you care deeply about the people around you and know how to break rules when necessary. You are smart, wise, and have a strong sense of justice. Like Professor McGonagall, you are respected and trusted by the people around you because you are fair and always stand up for what is right.`,
  
  SS: `You are a serious and mysterious person. You do not show your feelings easily and may appear cold and heartless. But deep down, you have a warm heart, and help those around you in danger, even if it means risking your own safety. You may be strict and merciless, but loyal to those who matter to you. Like Professor Snape, people might not always understand you, but you are kindhearted and caring for those you care about.`,
  
  RH: `You are warm, friendly, and loyal. You are sometimes clumsy but have very good intentions in your actions. You enjoy being around animals and nature, and you value honesty and friendship more than anything. You always go out of your way to help your friends no matter what. People feel safe around you because you are very loyal, welcoming, and would never turn your back on someone in need. Like Hagrid, you are a very kind and loyal person, and you are always there to support your friends.`
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
      characterDescriptions[resultChar] || "Description not found.";
  }
});
