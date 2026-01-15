const LS_KEY = "quiz_state_v3";

/* =========================
   أدوات مساعدة
   ========================= */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* =========================
   جمع كل أجزاء الأسئلة
   ========================= */
function getPart(i) {
  try {
    return eval(`typeof questionsPart${i} !== "undefined" ? questionsPart${i} : undefined`);
  } catch (e) {
    return undefined;
  }
}

function buildQuestions() {
  const all = [];
  let misses = 0;

  for (let i = 1; i <= 5000; i++) {
    const part = getPart(i);

    if (Array.isArray(part) && part.length) {
      all.push(...part);
      misses = 0;
    } else {
      misses++;
      if (misses >= 50) break;
    }
  }

  return all;
}

/* =========================
   الحالة
   ========================= */
let questions = [];
let currentQuestion = 0;
let answers = [];
let score = 0;

/* =========================
   عناصر الصفحة
   ========================= */
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const progressTextEl = document.getElementById("progressText");
const scoreTextEl = document.getElementById("scoreText");
const pillTextEl = document.getElementById("pillText");
const barFillEl = document.getElementById("barFill");
const feedbackEl = document.getElementById("feedback");

/* =========================
   حفظ / استرجاع
   ========================= */
function recomputeScore() {
  score = answers.reduce((acc, a) => acc + (a && a.correct ? 1 : 0), 0);
}

function saveState() {
  localStorage.setItem(
    LS_KEY,
    JSON.stringify({
      questions,
      currentQuestion,
      answers
    })
  );
}

function loadState() {
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) {
    questions = shuffleArray(buildQuestions());
    return;
  }

  const data = JSON.parse(raw);

  if (Array.isArray(data.questions)) {
    questions = data.questions;
  } else {
    questions = shuffleArray(buildQuestions());
  }

  currentQuestion = data.currentQuestion || 0;
  answers = data.answers || [];

  recomputeScore();
}

function resetQuiz() {
  questions = shuffleArray(buildQuestions());
  currentQuestion = 0;
  answers = [];
  score = 0;
  saveState();
}

/* =========================
   UI
   ========================= */
function updateHeader() {
  const total = questions.length;
  const idx = currentQuestion + 1;

  progressTextEl.innerText = `${idx} / ${total}`;
  scoreTextEl.innerText = `${score} / ${total}`;
  pillTextEl.innerText = `Question ${idx}`;

  const pct = total ? Math.round((idx / total) * 100) : 0;
  barFillEl.style.width = `${pct}%`;
}

function lockOptions(disabled) {
  [...optionsEl.children].forEach(b => (b.disabled = disabled));
}

function renderQuestion() {
  if (!questions.length) return;

  const q = questions[currentQuestion];
  updateHeader();

  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  feedbackEl.innerText = "";

  const savedAnswer = answers[currentQuestion];

  (q.options || []).forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    if (savedAnswer) {
      btn.disabled = true;

      if (opt === savedAnswer.selected) {
        btn.classList.add(savedAnswer.correct ? "correct" : "wrong");
      }

      if (!savedAnswer.correct && opt === q.answer) {
        btn.classList.add("correct");
      }
    } else {
      btn.onclick = () => handleAnswer(btn, opt);
    }

    optionsEl.appendChild(btn);
  });

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = false;

  saveState();
}

/* =========================
   الإجابة
   ========================= */
function handleAnswer(button, selected) {
  const correctAnswer = questions[currentQuestion].answer;
  lockOptions(true);

  const isCorrect = selected === correctAnswer;
  answers[currentQuestion] = { selected, correct: isCorrect };

  recomputeScore();
  updateHeader();
  saveState();

  if (isCorrect) {
    button.classList.add("correct");
    setTimeout(goNext, 600);
  } else {
    button.classList.add("wrong");
    feedbackEl.innerText = `Correct Answer: ${correctAnswer}`;

    [...optionsEl.children].forEach(b => {
      if (b.innerText === correctAnswer) b.classList.add("correct");
    });
  }
}

/* =========================
   تنقل
   ========================= */
function goNext() {
  if (currentQuestion >= questions.length - 1) {
    resetQuiz();
  } else {
    currentQuestion++;
  }
  saveState();
  renderQuestion();
}

function goPrev() {
  if (currentQuestion > 0) {
    currentQuestion--;
    saveState();
    renderQuestion();
  }
}

/* =========================
   تشغيل
   ========================= */
nextBtn.onclick = goNext;
prevBtn.onclick = goPrev;

loadState();
renderQuestion();
