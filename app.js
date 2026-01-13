const LS_KEY = "quiz_state_v3";

/* =========================
   جمع كل أجزاء الأسئلة
   questionsPart1..questionsPartN
   ========================= */
function getPart(i) {
  try {
    // يشتغل حتى لو الأجزاء متعرفة بـ const في questions.js
    return eval(`typeof questionsPart${i} !== "undefined" ? questionsPart${i} : undefined`);
  } catch (e) {
    return undefined;
  }
}

function buildQuestions() {
  const all = [];
  let misses = 0;

  // هنمشي من 1 لحد ما نلاقي عدد كبير من أجزاء مش موجودة متتالية
  for (let i = 1; i <= 5000; i++) {
    const part = getPart(i);

    if (Array.isArray(part) && part.length) {
      all.push(...part);
      misses = 0;
    } else {
      misses++;
      if (misses >= 50) break; // لو 50 جزء ورا بعض مش موجودين نوقف
    }
  }

  // ترتيب حسب id
  all.sort((a, b) => (a?.id ?? 0) - (b?.id ?? 0));

  return all;
}

const questions = buildQuestions();
console.log("TOTAL QUESTIONS =", questions.length);

/* =========================
   الحالة
   ========================= */
let currentQuestion = 0;
let answers = []; // answers[index] = { selected: string, correct: boolean }
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
  try {
    localStorage.setItem(
      LS_KEY,
      JSON.stringify({
        currentQuestion,
        answers,
        score
      })
    );
  } catch (e) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;

    const data = JSON.parse(raw);
    if (typeof data.currentQuestion === "number") currentQuestion = data.currentQuestion;
    if (Array.isArray(data.answers)) answers = data.answers;

    recomputeScore();

    // لو المؤشر خارج عدد الأسئلة (مثلاً ملف الأسئلة اتغير)
    if (currentQuestion < 0 || currentQuestion >= questions.length) {
      currentQuestion = 0;
      answers = [];
      recomputeScore();
      saveState();
    }
  } catch (e) {}
}

function resetQuiz() {
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

  if (progressTextEl) progressTextEl.innerText = `${idx} / ${total}`;
  if (scoreTextEl) scoreTextEl.innerText = `${score} / ${total}`;
  if (pillTextEl) pillTextEl.innerText = `Question ${idx}`;

  if (barFillEl) {
    const pct = total ? Math.round((idx / total) * 100) : 0;
    barFillEl.style.width = `${pct}%`;
  }
}

function clearFeedback() {
  if (feedbackEl) feedbackEl.innerText = "";
}

function lockOptions(disabled) {
  [...optionsEl.children].forEach(b => (b.disabled = disabled));
}

function renderQuestion() {
  if (!questions.length) {
    if (questionEl) questionEl.innerText = "No questions found in questions.js";
    if (optionsEl) optionsEl.innerHTML = "";
    if (nextBtn) nextBtn.disabled = true;
    if (prevBtn) prevBtn.disabled = true;
    if (feedbackEl) feedbackEl.innerText = "";
    return;
  }

  const q = questions[currentQuestion];

  updateHeader();
  clearFeedback();

  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  (q.options || []).forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => handleAnswer(btn, opt);
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
  const correct = questions[currentQuestion].answer;

  lockOptions(true);

  if (selected === correct) {
    button.classList.add("correct");

    answers[currentQuestion] = { selected, correct: true };
    recomputeScore();
    updateHeader();
    saveState();

    setTimeout(() => {
      goNext();
    }, 600);
  } else {
    button.classList.add("wrong");

    answers[currentQuestion] = { selected, correct: false };
    recomputeScore();
    updateHeader();
    saveState();

    if (feedbackEl) feedbackEl.innerText = `Correct Answer: ${correct}`;

    [...optionsEl.children].forEach(b => {
      if (b.innerText === correct) b.classList.add("correct");
    });

    setTimeout(() => {
      [...optionsEl.children].forEach(b => {
        b.disabled = false;
        b.classList.remove("wrong", "correct");
      });
      clearFeedback();
      saveState();
    }, 1500);
  }
}

/* =========================
   تنقل
   ========================= */
function goNext() {
  // لو آخر سؤال: ابدأ من الأول (Reset كامل)
  if (currentQuestion >= questions.length - 1) {
    resetQuiz();
    renderQuestion();
    return;
  }

  currentQuestion++;
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
if (nextBtn) nextBtn.onclick = goNext;
if (prevBtn) prevBtn.onclick = goPrev;

loadState();
renderQuestion();
