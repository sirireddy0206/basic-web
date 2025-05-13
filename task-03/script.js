// ========== Quiz Logic ==========
const questions = [
    {
      question: "What does CSS stand for?",
      options: {
        A: "Computer Style Sheets",
        B: "Cascading Style Sheets",
        C: "Creative Style Syntax"
      },
      correct: "B"
    },
    {
      question: "Which language runs in a web browser?",
      options: {
        A: "Python",
        B: "C",
        C: "JavaScript"
      },
      correct: "C"
    }
  ];
  
  let currentQuestion = 0;
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
  
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
  
    for (const [key, value] of Object.entries(q.options)) {
      const btn = document.createElement("button");
      btn.textContent = `${key}. ${value}`;
      btn.onclick = () => checkAnswer(key);
      btn.className = "option-btn";
      optionsDiv.appendChild(btn);
    }
  
    document.getElementById("result").textContent = "";
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    const resultText = selected === correct ? "✅ Correct!" : "❌ Incorrect!";
    document.getElementById("result").textContent = resultText;
  
    setTimeout(() => {
      currentQuestion = (currentQuestion + 1) % questions.length;
      loadQuestion();
    }, 1500);
  }
  
  loadQuestion();
  
  // ========== API: Joke Generator ==========
  function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        document.getElementById("joke").textContent = `${data.setup} — ${data.punchline}`;
      })
      .catch(() => {
        document.getElementById("joke").textContent = "😢 Couldn't load a joke.";
      });
  }
  