/* ============================================
   Química Revisada — Interactive Logic
   ============================================ */

// ========== NAVBAR ==========
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .hero');
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});

// ========== PARTICLES ==========
(function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = window.innerWidth < 768 ? 10 : 22;
    const colors = ['#00d4aa', '#7c5cfc', '#00b4d8'];
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (Math.random() * 8 + 6) + 's';
        p.style.animationDelay = (Math.random() * 5) + 's';
        const size = (Math.random() * 3 + 1) + 'px';
        p.style.width = size;
        p.style.height = size;
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(p);
    }
})();

// ========== REVEAL ON SCROLL ==========
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 60);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });
revealElements.forEach(el => revealObserver.observe(el));

// ========== COUNTER ANIMATION ==========
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const duration = 1800;
        const increment = target / (duration / 16);
        let current = 0;
        const update = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };
        update();
    });
}

const heroEl = document.querySelector('.hero');
const counterObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateCounters();
        counterObs.unobserve(heroEl);
    }
}, { threshold: 0.3 });
counterObs.observe(heroEl);

// ========== VIDEO FILTERS ==========
const filterBtns = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        videoCards.forEach(card => {
            if (filter === 'all' || card.dataset.topic === filter) {
                card.classList.remove('hidden');
                card.style.display = '';
            } else {
                card.classList.add('hidden');
                card.style.display = 'none';
            }
        });
    });
});

// ========== QUIZ ENGINE ==========
const QUIZ_LENGTH = 10;
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = [];

const quizStart = document.getElementById('quizStart');
const quizBody = document.getElementById('quizBody');
const quizResults = document.getElementById('quizResults');
const quizReview = document.getElementById('quizReview');
const startBtn = document.getElementById('startQuiz');
const prevBtn = document.getElementById('prevQuestion');
const nextBtn = document.getElementById('nextQuestion');
const finishBtn = document.getElementById('finishQuiz');
const retryBtn = document.getElementById('retryQuiz');
const reviewBtn = document.getElementById('reviewQuiz');
const retryFromReviewBtn = document.getElementById('retryFromReview');
const backToResultsBtn = document.getElementById('backToResults');

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function startQuiz() {
    currentQuestions = shuffle(QUESTIONS_DB).slice(0, Math.min(QUIZ_LENGTH, QUESTIONS_DB.length));
    currentIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(-1);

    quizStart.style.display = 'none';
    quizResults.style.display = 'none';
    quizReview.style.display = 'none';
    quizBody.style.display = 'block';
    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    const total = currentQuestions.length;

    document.getElementById('progressFill').style.width = ((currentIndex + 1) / total * 100) + '%';
    document.getElementById('progressText').textContent = `${currentIndex + 1} / ${total}`;
    document.getElementById('questionNumber').textContent = `Questão ${currentIndex + 1}`;
    document.getElementById('questionTopic').textContent = q.topic;
    document.getElementById('questionText').textContent = q.text;

    const opts = document.getElementById('questionOptions');
    opts.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D', 'E'];
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (userAnswers[currentIndex] === i) btn.classList.add('selected');
        btn.innerHTML = `<span class="option-label">${labels[i]}</span><span>${opt}</span>`;
        btn.addEventListener('click', () => selectOption(i));
        opts.appendChild(btn);
    });

    prevBtn.disabled = currentIndex === 0;
    if (currentIndex === total - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        finishBtn.style.display = 'none';
    }
}

function selectOption(index) {
    userAnswers[currentIndex] = index;
    document.querySelectorAll('.option-btn').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}

prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; renderQuestion(); } });
nextBtn.addEventListener('click', () => { if (currentIndex < currentQuestions.length - 1) { currentIndex++; renderQuestion(); } });

function finishQuiz() {
    let correct = 0;
    currentQuestions.forEach((q, i) => { if (userAnswers[i] === q.answer) correct++; });
    const total = currentQuestions.length;
    const pct = Math.round((correct / total) * 100);

    quizBody.style.display = 'none';
    quizResults.style.display = 'block';

    const icon = document.getElementById('resultsIcon');
    const title = document.getElementById('resultsTitle');
    icon.className = 'results-icon';

    if (pct >= 80) { icon.classList.add('great'); icon.innerHTML = '<i class="fas fa-trophy"></i>'; title.textContent = '🎉 Excelente!'; }
    else if (pct >= 60) { icon.classList.add('good'); icon.innerHTML = '<i class="fas fa-star"></i>'; title.textContent = '👏 Muito bem!'; }
    else if (pct >= 40) { icon.classList.add('ok'); icon.innerHTML = '<i class="fas fa-thumbs-up"></i>'; title.textContent = '💪 Continue estudando!'; }
    else { icon.classList.add('low'); icon.innerHTML = '<i class="fas fa-book"></i>'; title.textContent = '📚 Hora de revisar!'; }

    document.getElementById('resultsDetail').textContent = `Você acertou ${correct} de ${total} questões (${pct}%)`;
    document.getElementById('scoreText').textContent = pct + '%';

    // Animate circle
    const circ = 2 * Math.PI * 52;
    const offset = circ - (pct / 100) * circ;
    const fill = document.getElementById('scoreFillCircle');
    const svg = fill.closest('svg');
    if (!svg.querySelector('defs')) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        grad.id = 'scoreGradient';
        grad.innerHTML = '<stop offset="0%" stop-color="#00d4aa"/><stop offset="100%" stop-color="#7c5cfc"/>';
        defs.appendChild(grad);
        svg.prepend(defs);
    }
    fill.style.strokeDasharray = circ;
    fill.style.strokeDashoffset = circ;
    setTimeout(() => { fill.style.strokeDashoffset = offset; }, 100);
}

function showReview() {
    quizResults.style.display = 'none';
    quizReview.style.display = 'block';

    const list = document.getElementById('reviewList');
    list.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D', 'E'];

    currentQuestions.forEach((q, i) => {
        const ok = userAnswers[i] === q.answer;
        const item = document.createElement('div');
        item.className = `review-item ${ok ? 'correct-item' : 'wrong-item'}`;

        let ans = '';
        if (ok) {
            ans = `<p class="review-answer">✅ Sua resposta: <strong>${labels[userAnswers[i]]}) ${q.options[userAnswers[i]]}</strong></p>`;
        } else {
            const ua = userAnswers[i] >= 0 ? `${labels[userAnswers[i]]}) ${q.options[userAnswers[i]]}` : 'Não respondida';
            ans = `<p class="review-answer">❌ Sua resposta: <strong>${ua}</strong></p>
             <p class="review-answer">✅ Correta: <strong>${labels[q.answer]}) ${q.options[q.answer]}</strong></p>`;
        }

        item.innerHTML = `
      <div class="review-question-header">
        <span class="review-question-number">Questão ${i + 1} — ${q.topic}</span>
        <span class="review-result-badge ${ok ? 'correct-badge' : 'wrong-badge'}">${ok ? 'Acertou' : 'Errou'}</span>
      </div>
      <p class="review-question-text">${q.text}</p>
      ${ans}
      <div class="review-explanation"><strong>📖 Explicação:</strong> ${q.explanation}</div>
    `;
        list.appendChild(item);
    });
}

startBtn.addEventListener('click', startQuiz);
finishBtn.addEventListener('click', finishQuiz);
retryBtn.addEventListener('click', startQuiz);
reviewBtn.addEventListener('click', showReview);
retryFromReviewBtn.addEventListener('click', startQuiz);
backToResultsBtn.addEventListener('click', () => {
    quizReview.style.display = 'none';
    quizResults.style.display = 'block';
});
