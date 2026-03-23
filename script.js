/* ============================================
   Química Revisada — SPA Engine + Gamificação
   ============================================ */

// ========== STATE ==========
const DEFAULT_STATE = {
  xp: 0,
  streak: 0,
  lastStudyDate: null,
  videosCompleted: {},
  videoQuizScores: {},
  trailProgress: {},
  achievements: [],
  quizHistory: [],
  simuladoHighScore: 0,
  materialsAccessed: {}
};

function loadState() {
  try {
    const s = localStorage.getItem('qr_progress');
    return s ? { ...DEFAULT_STATE, ...JSON.parse(s) } : { ...DEFAULT_STATE };
  } catch { return { ...DEFAULT_STATE }; }
}

function saveState(state) {
  try { localStorage.setItem('qr_progress', JSON.stringify(state)); } catch {}
}

let state = loadState();

// ========== GAMIFICATION HELPERS ==========
function getLevel(xp) {
  const levels = GAMIFICATION.levels;
  let lvl = levels[0];
  for (const l of levels) { if (xp >= l.minXP) lvl = l; }
  return lvl;
}

function getNextLevel(xp) {
  const levels = GAMIFICATION.levels;
  for (const l of levels) { if (xp < l.minXP) return l; }
  return null;
}

function getLevelProgress(xp) {
  const current = getLevel(xp);
  const next = getNextLevel(xp);
  if (!next) return 100;
  const range = next.minXP - current.minXP;
  const progress = xp - current.minXP;
  return Math.min(100, Math.round((progress / range) * 100));
}

function addXP(amount) {
  const oldLevel = getLevel(state.xp);
  state.xp += amount;
  const newLevel = getLevel(state.xp);
  saveState(state);
  updateNavXP();
  showToast(`+${amount} XP`, 'xp');
  if (newLevel.name !== oldLevel.name) {
    setTimeout(() => {
      showToast(`🎉 Nível: ${newLevel.icon} ${newLevel.name}!`, 'level-up');
      fireConfetti();
    }, 600);
  }
  checkAchievements();
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastStudyDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (state.lastStudyDate === yesterday) {
    state.streak++;
  } else if (state.lastStudyDate !== today) {
    state.streak = 1;
  }
  state.lastStudyDate = today;
  saveState(state);
}

function getTrailProgress(trailId) {
  const trail = TRILHAS.find(t => t.id === trailId);
  if (!trail) return 0;
  const total = trail.videos.length;
  const done = trail.videos.filter(v => state.videosCompleted[v.id]).length;
  return total > 0 ? Math.round((done / total) * 100) : 0;
}

function isTrailComplete(trailId) {
  return getTrailProgress(trailId) === 100;
}

function getCompletedVideosCount() {
  return Object.keys(state.videosCompleted).filter(k => state.videosCompleted[k]).length;
}

function getCompletedTrailsCount() {
  return TRILHAS.filter(t => !t.isSpecial && isTrailComplete(t.id)).length;
}

function checkAchievements() {
  const videosCompleted = getCompletedVideosCount();
  const trailsCompleted = getCompletedTrailsCount();
  const checks = {
    first_video: videosCompleted >= 1,
    first_trail: trailsCompleted >= 1,
    streak_3: state.streak >= 3,
    streak_7: state.streak >= 7,
    xp_500: state.xp >= 500,
    xp_1000: state.xp >= 1000,
    videos_5: videosCompleted >= 5,
    videos_10: videosCompleted >= 10,
    all_trails: trailsCompleted === TRILHAS.filter(t => !t.isSpecial).length,
    simulado_80: state.simuladoHighScore >= 80
  };

  GAMIFICATION.achievements.forEach(a => {
    if (!state.achievements.includes(a.id) && checks[a.id]) {
      state.achievements.push(a.id);
      saveState(state);
      setTimeout(() => {
        showToast(`🏅 Conquista: ${a.title}!`, 'achievement');
      }, 400);
    }
  });
}

// ========== NAV XP UPDATE ==========
function updateNavXP() {
  const lvl = getLevel(state.xp);
  const pct = getLevelProgress(state.xp);
  const badge = document.getElementById('navLevelBadge');
  const name = document.getElementById('navLevelName');
  const fill = document.getElementById('navXpFill');
  if (badge) badge.textContent = lvl.icon;
  if (name) name.textContent = `${lvl.name} · ${state.xp} XP`;
  if (fill) fill.style.width = pct + '%';
}

// ========== TOAST ==========
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}

// ========== CONFETTI ==========
function fireConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const pieces = [];
  const colors = ['#00d4aa', '#7c5cfc', '#ffd93d', '#ff6b6b', '#00b4d8', '#6bcb77'];

  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 200,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      rot: Math.random() * 360,
      rotV: (Math.random() - 0.5) * 10
    });
  }

  let frames = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04;
      p.rot += p.rotV;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - frames / 120);
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frames++;
    if (frames < 130) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.style.display = 'none';
    }
  }
  animate();
}

// ========== NAVBAR ==========
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ========== ROUTER ==========
function getRoute() {
  const hash = window.location.hash || '#/';
  return hash.slice(1);
}

function navigateTo(path) {
  window.location.hash = path;
}

function router() {
  const path = getRoute();
  const app = document.getElementById('appContainer');

  // Update active nav
  document.querySelectorAll('.nav-link').forEach(l => {
    const route = l.dataset.route || '';
    const isActive = (path === '/' && route === 'home') ||
      (path.startsWith('/trilhas') && route === 'trilhas') ||
      (path.startsWith('/trilha') && route === 'trilhas') ||
      (path.startsWith('/video') && route === 'trilhas') ||
      (path.startsWith('/resolucoes') && route === 'resolucoes') ||
      (path.startsWith('/simulado') && route === 'simulado') ||
      (path.startsWith('/progresso') && route === 'progresso');
    l.classList.toggle('active', isActive);
  });

  // Route matching
  if (path === '/' || path === '') {
    renderHome(app);
  } else if (path === '/trilhas') {
    renderTrails(app);
  } else if (path.match(/^\/trilha\/(.+)$/)) {
    const trailId = path.match(/^\/trilha\/(.+)$/)[1];
    renderTrailDetail(app, trailId);
  } else if (path.match(/^\/video\/(.+?)\/(.+)$/)) {
    const [, trailId, videoId] = path.match(/^\/video\/(.+?)\/(.+)$/);
    renderVideoPage(app, trailId, videoId);
  } else if (path === '/simulado') {
    renderSimulado(app);
  } else if (path === '/resolucoes') {
    renderResolutions(app);
  } else if (path === '/progresso') {
    renderProgresso(app);
  } else if (path.match(/^\/resolucao\/(.+?)\/(.+)$/)) {
    const [, trailId, videoId] = path.match(/^\/resolucao\/(.+?)\/(.+)$/);
    renderVideoPage(app, trailId, videoId, true); // Added fourth param for resolution mode
  } else {
    renderHome(app);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  updateNavXP();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash || window.location.hash === '#') {
    window.location.hash = '#/';
  }
  router();
});

// ========== YOUTUBE TRACKING ==========
let ytPlayer = null;
let currentTrackingVideoId = null;

function onYouTubeIframeAPIReady() {
  console.log("YouTube IFrame API Ready");
}

function setupVideoTracking(videoId) {
  currentTrackingVideoId = videoId;
  
  // If player already exists, destroy it to avoid conflicts
  if (ytPlayer) {
    try { ytPlayer.destroy(); } catch(e) {}
    ytPlayer = null;
  }

  // Check if API is loaded
  if (typeof YT === 'undefined' || typeof YT.Player === 'undefined') {
    setTimeout(() => setupVideoTracking(videoId), 500);
    return;
  }

  ytPlayer = new YT.Player('videoFrame', {
    events: {
      'onStateChange': (event) => {
        if (event.data === YT.PlayerState.ENDED) {
          markVideoAsWatched(currentTrackingVideoId);
        }
      }
    }
  });
}

function markVideoAsWatched(videoId) {
  if (!state.videosCompleted[videoId]) {
    state.videosCompleted[videoId] = true;
    saveState(state);
    addXP(GAMIFICATION.xpPerVideoWatch);
    showToast(`+${GAMIFICATION.xpPerVideoWatch} XP: Vídeo assistido por completo!`, 'success');
    
    // Refresh trail progress in UI if on a page that shows it
    const path = getRoute();
    if (path.startsWith('/trilha/')) {
       // On trail detail page, we could refresh, but since it's an overlay or separate page, it's fine
    }
    
    // If the "Watch video" achievement isn't there, it will be checked next time state is reviewed
    checkAchievements();
  }
}

// ========== VIEWS ==========

// ---------- HOME ----------
function renderHome(container) {
  const lvl = getLevel(state.xp);
  const pct = getLevelProgress(state.xp);
  const nextLvl = getNextLevel(state.xp);
  const totalVideos = TRILHAS.reduce((s, t) => s + t.videos.length, 0);
  const completedVideos = getCompletedVideosCount();

  container.innerHTML = `
    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="hero-particles" id="particles"></div>
      <div class="hero-content reveal">
        <div class="hero-badge">🎯 Foco total no ENEM</div>
        <h1>Revise <span class="gradient-text">Química</span> e garanta sua vaga no <span class="gradient-text">ENEM</span></h1>
        <p class="hero-subtitle">Trilhas de estudo gamificadas, vídeos de revisão com quizzes e progresso detalhado. Tudo 100% gratuito!</p>
        
        <div class="hero-level-card">
          <div class="hero-level-icon">${lvl.icon}</div>
          <div class="hero-level-info">
            <span class="hero-level-name">${lvl.name}</span>
            <div class="hero-xp-bar">
              <div class="hero-xp-fill" style="width:${pct}%"></div>
            </div>
            <span class="hero-xp-text">${state.xp} XP${nextLvl ? ` / ${nextLvl.minXP} XP` : ' — Nível máximo!'}</span>
          </div>
          ${state.streak > 0 ? `<div class="hero-streak"><i class="fas fa-fire"></i> ${state.streak} dia${state.streak > 1 ? 's' : ''}</div>` : ''}
        </div>

        <div class="hero-actions">
          <a href="#/trilhas" class="btn btn-primary"><i class="fas fa-route"></i> Começar Trilha</a>
          <a href="#/simulado" class="btn btn-outline"><i class="fas fa-clipboard-check"></i> Fazer Simulado</a>
        </div>
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">${totalVideos}</span>
            <span class="stat-label">Vídeos</span>
          </div>
          <div class="stat">
            <span class="stat-number">${completedVideos}</span>
            <span class="stat-label">Concluídos</span>
          </div>
          <div class="stat">
            <span class="stat-number">${TRILHAS.filter(t => !t.isSpecial).length}</span>
            <span class="stat-label">Trilhas</span>
          </div>
        </div>
      </div>
      <div class="hero-molecule">
        <svg viewBox="0 0 200 200" class="molecule-svg">
          <circle cx="100" cy="60" r="14" class="atom atom-1" />
          <circle cx="60" cy="120" r="10" class="atom atom-2" />
          <circle cx="140" cy="120" r="10" class="atom atom-3" />
          <circle cx="100" cy="160" r="8" class="atom atom-4" />
          <line x1="100" y1="60" x2="60" y2="120" class="bond" />
          <line x1="100" y1="60" x2="140" y2="120" class="bond" />
          <line x1="60" y1="120" x2="100" y2="160" class="bond" />
          <line x1="140" y1="120" x2="100" y2="160" class="bond" />
        </svg>
      </div>
    </section>

    <!-- TRAILS PREVIEW SECTION -->
    <section class="section section-alt" id="trailsPreview">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-route"></i> Trilhas de Estudo</span>
          <h2>Suas <span class="gradient-text">Trilhas ENEM</span></h2>
          <p class="section-desc">Siga as trilhas de conteúdo, assista os vídeos e responda os quizzes para ganhar XP!</p>
        </div>
        <div class="trails-grid">
          ${TRILHAS.map(t => renderTrailCard(t)).join('')}
        </div>
        <div style="text-align:center;margin-top:40px">
          <a href="#/trilhas" class="btn btn-outline"><i class="fas fa-th-large"></i> Ver Todas as Trilhas</a>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    ${renderFooter()}
  `;

  initParticles();
  initReveal();
}

function renderTrailCard(trail) {
  const progress = getTrailProgress(trail.id);
  const completed = trail.videos.filter(v => state.videosCompleted[v.id]).length;
  const total = trail.videos.length;
  const isComplete = progress === 100;

  const isSpecial = trail.id === 'resolucoes-comentadas';
  const url = isSpecial ? '#/resolucoes' : `#/trilha/${trail.id}`;

  return `
    <a href="${url}" class="trail-card reveal" style="--trail-color:${trail.color}">
      <div class="trail-card-header">
        <div class="trail-icon-wrap" style="background:${trail.color}15;color:${trail.color}">
          <i class="${trail.icon}"></i>
        </div>
        ${isComplete && !isSpecial ? '<div class="trail-complete-badge"><i class="fas fa-check-circle"></i></div>' : ''}
      </div>
      <h3>${trail.title}</h3>
      <p>${trail.description}</p>
      ${!isSpecial ? `
      <div class="trail-progress">
        <div class="trail-progress-bar">
          <div class="trail-progress-fill" style="width:${progress}%;background:${trail.color}"></div>
        </div>
        <span class="trail-progress-text">${completed}/${total} vídeos · ${progress}%</span>
      </div>
      ` : `
      <div class="trail-action-hint" style="margin-top: auto; color: ${trail.color}; font-weight: 600; font-size: 0.9rem;">
        Ir para Resoluções <i class="fas fa-arrow-right"></i>
      </div>
      `}
    </a>
  `;
}

// ---------- TRAILS LIST ----------
function renderTrails(container) {
  container.innerHTML = `
    <section class="section page-section">
      <div class="container">
        <div class="page-back">
          <a href="#/" class="btn-back"><i class="fas fa-arrow-left"></i> Início</a>
        </div>
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-route"></i> Trilhas de Estudo ENEM</span>
          <h2>Todas as <span class="gradient-text">Trilhas</span></h2>
          <p class="section-desc">Complete cada trilha assistindo todos os vídeos e respondendo os quizzes.</p>
        </div>
        <div class="trails-grid">
          ${TRILHAS.map(t => renderTrailCard(t)).join('')}
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
  initReveal();
}

// ---------- TRAIL DETAIL ----------
function renderTrailDetail(container, trailId) {
  const trail = TRILHAS.find(t => t.id === trailId);
  if (!trail) { navigateTo('/trilhas'); return; }

  const progress = getTrailProgress(trail.id);

  container.innerHTML = `
    <section class="section page-section">
      <div class="container">
        <div class="page-back">
          <a href="#/trilhas" class="btn-back"><i class="fas fa-arrow-left"></i> Trilhas</a>
        </div>
        <div class="trail-detail-header reveal">
          <div class="trail-detail-icon" style="background:${trail.color}15;color:${trail.color}">
            <i class="${trail.icon}"></i>
          </div>
          <div class="trail-detail-info">
            <h2>${trail.title}</h2>
            <p>${trail.description}</p>
            <div class="trail-progress" style="max-width:400px">
              <div class="trail-progress-bar">
                <div class="trail-progress-fill" style="width:${progress}%;background:${trail.color}"></div>
              </div>
              <span class="trail-progress-text">${progress}% concluído</span>
            </div>
            ${trail.resolutions?.length > 0 ? `
              <div style="margin-top: 15px;">
                <a href="#/resolucoes" class="btn btn-outline btn-sm" style="border-color:${trail.color}; color:${trail.color}; padding: 6px 12px; font-size: 0.85rem;">
                  <i class="fas fa-video"></i> Ver Resoluções de Questões
                </a>
              </div>
            ` : ''}
          </div>
        </div>
        <div class="video-list">
          ${trail.videos.map((v, i) => {
            const done = state.videosCompleted[v.id];
            const score = state.videoQuizScores[v.id];
            return `
              <a href="#/video/${trail.id}/${v.id}" class="video-list-item reveal ${done ? 'completed' : ''}">
                <div class="video-list-number">${String(i + 1).padStart(2, '0')}</div>
                <div class="video-list-thumb">
                  <img src="https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg" alt="${v.title}" loading="lazy">
                  <div class="video-list-play"><i class="fas fa-play"></i></div>
                </div>
                <div class="video-list-info">
                  <h3>${v.title}</h3>
                  <p>${v.description}</p>
                  <div class="video-list-meta">
                    <span><i class="fas fa-clock"></i> ${v.duration}</span>
                    <span><i class="fas fa-signal"></i> ${v.difficulty}</span>
                    ${done ? `<span class="video-done-badge"><i class="fas fa-check"></i> Concluído</span>` : ''}
                    ${score !== undefined ? `<span class="video-score-badge">${score}/5 ⭐</span>` : ''}
                  </div>
                </div>
                <div class="video-list-arrow"><i class="fas fa-chevron-right"></i></div>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
  initReveal();
}

// ---------- VIDEO PAGE ----------
function renderVideoPage(container, trailId, videoId, isResolution = false) {
  const trail = TRILHAS.find(t => t.id === trailId);
  if (!trail) { navigateTo('/trilhas'); return; }
  
  let video;
  if (isResolution) {
    video = trail.resolutions.find(v => v.id === videoId);
  } else {
    video = trail.videos.find(v => v.id === videoId);
  }
  
  if (!video) { 
    if (isResolution) navigateTo('/resolucoes');
    else navigateTo(`/trilha/${trailId}`); 
    return; 
  }

  const questions = isResolution ? [] : (VIDEO_QUESTIONS[videoId] || []);
  const alreadyDone = state.videosCompleted[videoId];

  container.innerHTML = `
    <section class="section page-section">
      <div class="container">
        <div class="page-back">
          <a href="${isResolution ? '#/resolucoes' : `#/trilha/${trailId}`}" class="btn-back">
            <i class="fas fa-arrow-left"></i> ${isResolution ? 'Resoluções' : trail.title}
          </a>
        </div>

        <div class="video-layout reveal">
          <div class="video-main">
            <div class="video-player">
              <iframe 
                id="videoFrame"
                src="https://www.youtube.com/embed/${video.youtubeId}?${video.playlistId ? `list=${video.playlistId}&` : ''}enablejsapi=1" 
                title="${video.title}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>

            <div class="video-page-info">
              <h1>${isResolution ? `<span class="badge-res"><i class="fas fa-chalkboard-teacher"></i> Resolução</span> ` : ''}${video.title}</h1>
              <p>${video.description}</p>
              <div class="video-page-meta">
                <span><i class="fas fa-clock"></i> ${video.duration}</span>
                ${!isResolution ? `<span><i class="fas fa-signal"></i> ${video.difficulty}</span>` : ''}
                <span style="color:${trail.color}"><i class="${trail.icon}"></i> ${trail.title}</span>
              </div>
            </div>
          </div>

          ${(isResolution ? trail.resolutions.filter(res => res.playlist === video.playlist) : trail.videos)?.length > 0 ? `
          <aside class="video-sidebar">
            <div class="sidebar-title">
              <i class="fas fa-list-ol"></i> Playlist
            </div>
            <div class="sidebar-list">
              ${(isResolution ? trail.resolutions.filter(res => res.playlist === video.playlist) : trail.videos).map(v => `
                <a href="#/${isResolution ? 'resolucao' : 'video'}/${trail.id}/${v.id}" class="sidebar-item ${v.id === videoId ? 'active' : ''}">
                  <div class="sidebar-thumb">
                    <img src="https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg" alt="${v.title}">
                    ${v.id === videoId ? '<div class="sidebar-active-indicator"><i class="fas fa-play"></i></div>' : ''}
                  </div>
                  <div class="sidebar-info">
                    <h4>${v.title}</h4>
                    <div class="sidebar-meta">
                      <span><i class="fas fa-clock"></i> ${v.duration}</span>
                      ${state.videosCompleted[v.id] ? '<span style="color:var(--accent-1)"><i class="fas fa-check-circle"></i></span>' : ''}
                    </div>
                  </div>
                </a>
              `).join('')}
            </div>
          </aside>
          ` : ''}
        </div>

        ${video.pdfLink ? `
        <div class="video-material reveal">
          <div class="vm-card">
            <div class="vm-icon"><i class="fas fa-file-pdf"></i></div>
            <div class="vm-info">
              <h3>Material de Apoio</h3>
              <p>Resumo em PDF para aprofundar seus estudos sobre este tema.</p>
            </div>
            <div class="vm-actions">
              <button class="btn btn-outline" onclick="openMaterialReader('${video.pdfLink}', '${video.id}')">
                <i class="fas fa-book-open"></i> Modo Leitura
              </button>
              <a href="${video.pdfLink.replace('/preview', '/view')}" target="_blank" class="btn btn-ghost">
                <i class="fas fa-download"></i> Baixar
              </a>
            </div>
          </div>
        </div>
        ` : ''}

        ${questions.length > 0 ? `
        <div class="video-quiz reveal" id="videoQuiz">
          <div class="video-quiz-header">
            <h2><i class="fas fa-question-circle"></i> Quiz — Teste seus Conhecimentos</h2>
            <p>Responda as 5 questões abaixo sobre o conteúdo do vídeo. Cada acerto vale <strong>${GAMIFICATION.xpPerCorrectAnswer} XP</strong>!</p>
          </div>
          <div class="video-quiz-questions" id="quizQuestions">
            ${questions.map((q, i) => `
              <div class="vq-item" data-qi="${i}">
                <div class="vq-number">Questão ${i + 1}</div>
                <p class="vq-text">${q.text}</p>
                <div class="vq-options">
                  ${q.options.map((opt, oi) => `
                    <button class="vq-option" data-qi="${i}" data-oi="${oi}">
                      <span class="vq-label">${'ABCDE'[oi]}</span>
                      <span>${opt}</span>
                    </button>
                  `).join('')}
                </div>
                <div class="vq-feedback" id="feedback-${i}" style="display:none"></div>
              </div>
            `).join('')}
          </div>
          <div class="video-quiz-actions" id="quizActions">
            <button class="btn btn-primary btn-lg" id="submitVideoQuiz" ${alreadyDone ? '' : ''}>
              <i class="fas fa-check-circle"></i> Verificar Respostas
            </button>
          </div>
          <div class="video-quiz-result" id="quizResult" style="display:none"></div>
        </div>
        ` : ''}

      </div>
    </section>
    ${renderFooter()}
  `;

  initReveal();
  initVideoQuiz(trailId, videoId, questions);
  setupVideoTracking(videoId);
}

function initVideoQuiz(trailId, videoId, questions) {
  const answers = new Array(questions.length).fill(-1);

  document.querySelectorAll('.vq-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi = parseInt(btn.dataset.qi);
      const oi = parseInt(btn.dataset.oi);
      answers[qi] = oi;
      document.querySelectorAll(`.vq-option[data-qi="${qi}"]`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  const submitBtn = document.getElementById('submitVideoQuiz');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      let correct = 0;
      questions.forEach((q, i) => {
        const feedbackEl = document.getElementById(`feedback-${i}`);
        const isCorrect = answers[i] === q.answer;
        if (isCorrect) correct++;

        // Show feedback
        feedbackEl.style.display = 'block';
        feedbackEl.className = `vq-feedback ${isCorrect ? 'vq-correct' : 'vq-wrong'}`;
        feedbackEl.innerHTML = `
          <div class="vq-fb-status">${isCorrect ? '✅ Correto!' : `❌ Incorreto — Resposta: ${'ABCDE'[q.answer]}) ${q.options[q.answer]}`}</div>
          <div class="vq-fb-explanation"><strong>📖 Explicação:</strong> ${q.explanation}</div>
        `;

        // Highlight options
        document.querySelectorAll(`.vq-option[data-qi="${i}"]`).forEach(b => {
          const oi = parseInt(b.dataset.oi);
          b.disabled = true;
          if (oi === q.answer) b.classList.add('correct');
          else if (oi === answers[i] && !isCorrect) b.classList.add('wrong');
        });
      });

      // Result summary
      const resultEl = document.getElementById('quizResult');
      const pct = Math.round((correct / questions.length) * 100);
      resultEl.style.display = 'block';
      resultEl.innerHTML = `
        <div class="vq-result-card ${pct >= 60 ? 'vq-result-good' : 'vq-result-needs-work'}">
          <div class="vq-result-score">${correct}/${questions.length}</div>
          <div class="vq-result-text">${pct >= 80 ? '🎉 Excelente!' : pct >= 60 ? '👏 Muito bem!' : pct >= 40 ? '💪 Continue estudando!' : '📚 Revise o vídeo!'}</div>
          <div class="vq-result-xp">+${correct * GAMIFICATION.xpPerCorrectAnswer} XP${correct === questions.length ? ` + ${GAMIFICATION.xpBonusAllCorrect} XP bônus!` : ''}</div>
        </div>
      `;

      submitBtn.style.display = 'none';

      // Award XP
      updateStreak();
      let totalXP = correct * GAMIFICATION.xpPerCorrectAnswer;
      if (correct === questions.length) {
        totalXP += GAMIFICATION.xpBonusAllCorrect;
        if (!state.achievements.includes('perfect_quiz')) {
          state.achievements.push('perfect_quiz');
          saveState(state);
          setTimeout(() => showToast('🏅 Conquista: Nota Máxima!', 'achievement'), 800);
        }
      }

      // Quiz scores are saved, but video completion is now handled by YouTube API
      state.videoQuizScores[videoId] = correct;

      // Check trail complete
      const trail = TRILHAS.find(t => t.id === trailId);
      const trailWasComplete = isTrailComplete(trailId);
      saveState(state);
      if (!trailWasComplete && isTrailComplete(trailId)) {
        totalXP += GAMIFICATION.xpBonusTrailComplete;
        setTimeout(() => showToast(`🏁 Trilha "${trail.title}" concluída! +${GAMIFICATION.xpBonusTrailComplete} XP`, 'achievement'), 1200);
      }

      addXP(totalXP);

      resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
}

// ---------- SIMULADO ----------
function renderSimulado(container) {
  container.innerHTML = `
    <section class="section page-section section-alt">
      <div class="container">
        <div class="page-back">
          <a href="#/" class="btn-back"><i class="fas fa-arrow-left"></i> Início</a>
        </div>
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-clipboard-check"></i> Teste seus conhecimentos</span>
          <h2>Simulado <span class="gradient-text">ENEM</span></h2>
          <p class="section-desc">Questões no estilo ENEM para você treinar e chegar preparado na prova.</p>
        </div>
        <div class="quiz-container reveal" id="quizContainer">
          <div class="quiz-start" id="quizStart">
            <div class="quiz-start-icon"><i class="fas fa-brain"></i></div>
            <h3>Pronto para testar seus conhecimentos?</h3>
            <p>O simulado contém <strong>10 questões</strong> de Química no estilo ENEM, sorteadas aleatoriamente. Ao final, veja sua pontuação e revise os erros!</p>
            <div class="quiz-topics">
              <span><i class="fas fa-atom"></i> Atomística</span>
              <span><i class="fas fa-link"></i> Ligações</span>
              <span><i class="fas fa-balance-scale"></i> Estequiometria</span>
              <span><i class="fas fa-flask"></i> Soluções</span>
              <span><i class="fas fa-fire"></i> Termoquímica</span>
              <span><i class="fas fa-bolt"></i> Eletroquímica</span>
              <span><i class="fas fa-leaf"></i> Orgânica</span>
            </div>
            <button class="btn btn-primary btn-lg" id="startQuiz"><i class="fas fa-rocket"></i> Iniciar Simulado</button>
          </div>
          <div class="quiz-body" id="quizBody" style="display:none">
            <div class="quiz-progress">
              <div class="quiz-progress-bar"><div class="quiz-progress-fill" id="progressFill"></div></div>
              <span class="quiz-progress-text" id="progressText">1 / 10</span>
            </div>
            <div class="quiz-question" id="quizQuestion">
              <div class="question-header">
                <span class="question-number" id="questionNumber">Questão 1</span>
                <span class="question-topic" id="questionTopic">Tema</span>
              </div>
              <p class="question-text" id="questionText"></p>
              <div class="question-options" id="questionOptions"></div>
            </div>
            <div class="quiz-nav">
              <button class="btn btn-outline" id="prevQuestion" disabled><i class="fas fa-arrow-left"></i> Anterior</button>
              <button class="btn btn-primary" id="nextQuestion">Próxima <i class="fas fa-arrow-right"></i></button>
              <button class="btn btn-primary btn-finish" id="finishQuiz" style="display:none"><i class="fas fa-check-circle"></i> Finalizar</button>
            </div>
          </div>
          <div class="quiz-results" id="quizResults" style="display:none">
            <div class="results-icon" id="resultsIcon"><i class="fas fa-trophy"></i></div>
            <h3 id="resultsTitle">Parabéns!</h3>
            <div class="results-score">
              <div class="score-circle" id="scoreCircle">
                <svg viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" class="score-bg" />
                  <circle cx="60" cy="60" r="52" class="score-fill" id="scoreFillCircle" />
                </svg>
                <span class="score-text" id="scoreText">0%</span>
              </div>
            </div>
            <p class="results-detail" id="resultsDetail"></p>
            <div class="results-actions">
              <button class="btn btn-primary" id="retryQuiz"><i class="fas fa-redo"></i> Refazer Simulado</button>
              <button class="btn btn-outline" id="reviewQuiz"><i class="fas fa-search"></i> Revisar Respostas</button>
            </div>
          </div>
          <div class="quiz-review" id="quizReview" style="display:none">
            <h3><i class="fas fa-clipboard-list"></i> Revisão das Respostas</h3>
            <div class="review-list" id="reviewList"></div>
            <div class="review-actions">
              <button class="btn btn-outline" id="backToResults"><i class="fas fa-arrow-left"></i> Voltar</button>
              <button class="btn btn-primary" id="retryFromReview"><i class="fas fa-redo"></i> Refazer Simulado</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
  initReveal();
  initSimulado();
}

function initSimulado() {
  const QUIZ_LENGTH = 10;
  let currentQuestions = [];
  let currentIndex = 0;
  let userAnswers = [];

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
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizReview').style.display = 'none';
    document.getElementById('quizBody').style.display = 'block';
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
      btn.addEventListener('click', () => {
        userAnswers[currentIndex] = i;
        document.querySelectorAll('.option-btn').forEach((o, j) => o.classList.toggle('selected', j === i));
      });
      opts.appendChild(btn);
    });
    document.getElementById('prevQuestion').disabled = currentIndex === 0;
    document.getElementById('nextQuestion').style.display = currentIndex === total - 1 ? 'none' : 'inline-flex';
    document.getElementById('finishQuiz').style.display = currentIndex === total - 1 ? 'inline-flex' : 'none';
  }

  function finishQuiz() {
    let correct = 0;
    currentQuestions.forEach((q, i) => { if (userAnswers[i] === q.answer) correct++; });
    const total = currentQuestions.length;
    const pct = Math.round((correct / total) * 100);

    document.getElementById('quizBody').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    const icon = document.getElementById('resultsIcon');
    const title = document.getElementById('resultsTitle');
    icon.className = 'results-icon';
    if (pct >= 80) { icon.classList.add('great'); icon.innerHTML = '<i class="fas fa-trophy"></i>'; title.textContent = '🎉 Excelente!'; }
    else if (pct >= 60) { icon.classList.add('good'); icon.innerHTML = '<i class="fas fa-star"></i>'; title.textContent = '👏 Muito bem!'; }
    else if (pct >= 40) { icon.classList.add('ok'); icon.innerHTML = '<i class="fas fa-thumbs-up"></i>'; title.textContent = '💪 Continue estudando!'; }
    else { icon.classList.add('low'); icon.innerHTML = '<i class="fas fa-book"></i>'; title.textContent = '📚 Hora de revisar!'; }

    document.getElementById('resultsDetail').textContent = `Você acertou ${correct} de ${total} questões (${pct}%)`;
    document.getElementById('scoreText').textContent = pct + '%';

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

    // Save and award XP
    updateStreak();
    if (pct > state.simuladoHighScore) state.simuladoHighScore = pct;
    state.quizHistory.push({ date: new Date().toISOString(), score: pct, correct, total });
    saveState(state);
    addXP(correct * 10);
    checkAchievements();
  }

  function showReview() {
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizReview').style.display = 'block';
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

  document.getElementById('startQuiz').addEventListener('click', startQuiz);
  document.getElementById('finishQuiz').addEventListener('click', finishQuiz);
  document.getElementById('retryQuiz').addEventListener('click', startQuiz);
  document.getElementById('reviewQuiz').addEventListener('click', showReview);
  document.getElementById('retryFromReview').addEventListener('click', startQuiz);
  document.getElementById('backToResults').addEventListener('click', () => {
    document.getElementById('quizReview').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
  });
  document.getElementById('prevQuestion').addEventListener('click', () => {
    if (currentIndex > 0) { currentIndex--; renderQuestion(); }
  });
  document.getElementById('nextQuestion').addEventListener('click', () => {
    if (currentIndex < currentQuestions.length - 1) { currentIndex++; renderQuestion(); }
  });
}

// ---------- PROGRESSO ----------
function renderProgresso(container) {
  const lvl = getLevel(state.xp);
  const pct = getLevelProgress(state.xp);
  const nextLvl = getNextLevel(state.xp);
  const completedVideos = getCompletedVideosCount();
  const totalVideos = TRILHAS.reduce((s, t) => s + t.videos.length, 0);
  const completedTrails = getCompletedTrailsCount();

  const allAchievements = GAMIFICATION.achievements.map(a => {
    const unlocked = state.achievements.includes(a.id);
    return `
      <div class="achievement-card ${unlocked ? 'unlocked' : 'locked'}">
        <div class="achievement-icon">${a.icon}</div>
        <div class="achievement-info">
          <h4>${a.title}</h4>
          <p>${a.desc}</p>
        </div>
        ${unlocked ? '<div class="achievement-check"><i class="fas fa-check-circle"></i></div>' : '<div class="achievement-lock"><i class="fas fa-lock"></i></div>'}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <section class="section page-section">
      <div class="container">
        <div class="page-back">
          <a href="#/" class="btn-back"><i class="fas fa-arrow-left"></i> Início</a>
        </div>
        <div class="section-header reveal" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px;">
          <div>
            <span class="section-tag"><i class="fas fa-chart-line"></i> Seu desempenho</span>
            <h2>Meu <span class="gradient-text">Progresso</span></h2>
          </div>
          <button class="btn btn-primary" onclick="sendEmailReport()" style="margin-bottom: 5px;">
            <i class="fas fa-paper-plane"></i> Enviar para o Professor
          </button>
        </div>

        <!-- Stats overview -->
        <div class="progress-stats reveal">
          <div class="progress-stat-card">
            <div class="psc-icon" style="background:rgba(0,212,170,0.1);color:#00d4aa"><i class="fas fa-bolt"></i></div>
            <div class="psc-value">${state.xp}</div>
            <div class="psc-label">XP Total</div>
          </div>
          <div class="progress-stat-card">
            <div class="psc-icon" style="background:rgba(124,92,252,0.1);color:#7c5cfc"><i class="fas fa-graduation-cap"></i></div>
            <div class="psc-value">${lvl.icon} ${lvl.name}</div>
            <div class="psc-label">Nível</div>
          </div>
          <div class="progress-stat-card">
            <div class="psc-icon" style="background:rgba(255,107,107,0.1);color:#ff6b6b"><i class="fas fa-fire"></i></div>
            <div class="psc-value">${state.streak}</div>
            <div class="psc-label">Dias de Streak</div>
          </div>
          <div class="progress-stat-card">
            <div class="psc-icon" style="background:rgba(255,217,61,0.1);color:#ffd93d"><i class="fas fa-video"></i></div>
            <div class="psc-value">${completedVideos}/${totalVideos}</div>
            <div class="psc-label">Vídeos Concluídos</div>
          </div>
        </div>

        <!-- XP bar -->
        <div class="progress-xp-section reveal">
          <h3>Progresso do Nível</h3>
          <div class="progress-xp-bar-wrap">
            <div class="progress-level-current">${lvl.icon} ${lvl.name}</div>
            <div class="progress-xp-bar-big">
              <div class="progress-xp-fill-big" style="width:${pct}%"></div>
            </div>
            <div class="progress-level-next">${nextLvl ? `${nextLvl.icon} ${nextLvl.name}` : '🏆 Máximo'}</div>
          </div>
          <p class="progress-xp-detail">${state.xp} XP${nextLvl ? ` — faltam ${nextLvl.minXP - state.xp} XP para o próximo nível` : ' — nível máximo alcançado!'}</p>
        </div>

        <!-- Trail progress -->
        <div class="progress-trails-section reveal">
          <h3>Progresso por Trilha</h3>
          <div class="progress-trails-list">
            ${TRILHAS.filter(t => !t.isSpecial).map(t => {
              const tp = getTrailProgress(t.id);
              const done = t.videos.filter(v => state.videosCompleted[v.id]).length;
              return `
                <div class="progress-trail-row">
                  <div class="ptr-icon" style="color:${t.color}"><i class="${t.icon}"></i></div>
                  <div class="ptr-info">
                    <div class="ptr-title">${t.title}</div>
                    <div class="ptr-bar">
                      <div class="ptr-fill" style="width:${tp}%;background:${t.color}"></div>
                    </div>
                  </div>
                  <div class="ptr-pct">${done}/${t.videos.length} · ${tp}%</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Achievements -->
        <div class="progress-achievements-section reveal">
          <h3>Conquistas</h3>
          <p class="progress-ach-subtitle">${state.achievements.length}/${GAMIFICATION.achievements.length} desbloqueadas</p>
          <div class="achievements-grid">
            ${allAchievements}
          </div>
        </div>

        <!-- Quiz history -->
        ${state.quizHistory.length > 0 ? `
        <div class="progress-history-section reveal">
          <h3>Histórico de Simulados</h3>
          <div class="history-list">
            ${state.quizHistory.slice(-10).reverse().map(h => `
              <div class="history-item">
                <span class="history-date">${new Date(h.date).toLocaleDateString('pt-BR')}</span>
                <span class="history-score ${h.score >= 60 ? 'history-pass' : 'history-fail'}">${h.score}%</span>
                <span class="history-detail">${h.correct}/${h.total} acertos</span>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

      </div>
    </section>
    ${renderFooter()}
  `;
  initReveal();
}

// ---------- RESOLUÇÕES ----------
function renderResolutions(container) {
  container.innerHTML = `
    <section class="section page-section">
      <div class="container">
        <div class="page-back">
          <a href="#/" class="btn-back"><i class="fas fa-arrow-left"></i> Início</a>
        </div>
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-video"></i> Reforço de Aprendizagem</span>
          <h2>Resolução de <span class="gradient-text">Questões</span></h2>
          <p class="section-desc">Assista o professor resolvendo questões passo a passo para fixar o conteúdo de cada trilha.</p>
        </div>

        <div class="resolutions-container">
          ${TRILHAS.map(trail => {
            if (!trail.resolutions || trail.resolutions.length === 0) return '';
            return `
              <div class="res-trail-group reveal">
                <div class="res-trail-header">
                  <div class="res-trail-icon" style="background:${trail.color}15; color:${trail.color}">
                    <i class="${trail.icon}"></i>
                  </div>
                  <h3>${trail.title}</h3>
                </div>
                <div class="res-video-grid">
                  ${trail.resolutions.filter((res, idx) => idx === 0 || res.showOnMain).map(res => `
                    <a href="#/resolucao/${trail.id}/${res.id}" class="res-video-card">
                      <div class="res-video-thumb">
                        <img src="https://img.youtube.com/vi/${res.youtubeId}/mqdefault.jpg" alt="${res.title}">
                        <div class="res-video-play"><i class="fas fa-play"></i></div>
                        <div class="res-video-duration">${res.duration}</div>
                      </div>
                      <div class="res-video-info">
                        <h4>${res.title}</h4>
                        <p>${res.description}</p>
                      </div>
                    </a>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
    ${renderFooter()}
  `;
  initReveal();
}

// ---------- FOOTER ----------
function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="#/" class="nav-logo">
              <i class="fas fa-flask"></i>
              <span>Química<span class="accent">Revisada</span></span>
            </a>
            <p>Sua plataforma gamificada de revisão de Química para o ENEM. Revise, pratique e conquiste sua vaga!</p>
          </div>
          <div class="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#/">Início</a></li>
              <li><a href="#/trilhas">Trilhas</a></li>
              <li><a href="#/simulado">Simulado</a></li>
              <li><a href="#/progresso">Meu Progresso</a></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:contato@quimicarevisada.com"><i class="fas fa-envelope"></i> contato@quimicarevisada.com</a></li>
              <li><a href="#"><i class="fab fa-youtube"></i> YouTube</a></li>
              <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Química Revisada. Todos os direitos reservados.</p>
          <div class="visitor-counter" id="visitorCounter">
             <i class="fas fa-chart-line"></i> <span id="visitCount">...</span> visitas
          </div>
        </div>
      </div>
    </footer>
  `;
}

// ========== UTILITIES ==========
function initParticles() {
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
}

function initReveal() {
  setTimeout(() => {
    const els = document.querySelectorAll('.reveal:not(.visible)');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
  }, 50);
}

// ========== VISITOR COUNTER ==========
async function initVisitorCounter() {
  const counterEl = document.getElementById('visitCount');
  if (!counterEl) return;

  try {
    // Increment and get visits for this specific key
    const response = await fetch('https://api.counterapi.dev/v1/profjosederibamar-quimicarevisada/visits/up');
    if (!response.ok) throw new Error('Counter API error');
    
    const data = await response.json();
    const count = data.count || 0;
    
    // Format number (e.g., 1.234)
    counterEl.textContent = new Intl.NumberFormat('pt-BR').format(count);
    document.getElementById('visitorCounter').classList.add('loaded');
  } catch (err) {
    console.error('Visitor Counter failed:', err);
    // Hide counter if it fails to avoid showing "..."
    if (document.getElementById('visitorCounter')) {
        document.getElementById('visitorCounter').style.display = 'none';
    }
  }
}

// ========== MATERIAL READER ==========
function openMaterialReader(url, videoId) {
  // Create modal if it doesn't exist
  let modal = document.getElementById('materialModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'materialModal';
    modal.className = 'material-modal';
    modal.innerHTML = `
      <div class="mm-overlay" onclick="closeMaterialReader()"></div>
      <div class="mm-content">
        <div class="mm-header">
          <div class="mm-title"><i class="fas fa-book-open"></i> Modo Leitura</div>
          <button class="mm-close" onclick="closeMaterialReader()"><i class="fas fa-times"></i></button>
        </div>
        <div class="mm-body">
          <iframe id="mmIframe" src="" frameborder="0"></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const iframe = document.getElementById('mmIframe');
  iframe.src = url;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Award XP if first time
  if (!state.materialsAccessed[videoId]) {
    state.materialsAccessed[videoId] = true;
    saveState(state);
    setTimeout(() => {
      addXP(GAMIFICATION.xpPerMaterialAccess);
      showToast(`+${GAMIFICATION.xpPerMaterialAccess} XP: Material Lido!`, 'xp');
    }, 500);
  }
}

function closeMaterialReader() {
  const modal = document.getElementById('materialModal');
  if (modal) {
    modal.classList.remove('active');
    const iframe = document.getElementById('mmIframe');
    if (iframe) iframe.src = ''; // Stop loading/playing
    document.body.style.overflow = '';
  }
}

// ========== EMAIL REPORTING ==========
async function sendEmailReport() {
  const studentName = prompt("Por favor, insira seu nome completo para o relatório:") || "Estudante";
  
  const reportContent = `
🎓 RELATÓRIO DE DESEMPENHO — QUÍMICA REVISADA
--------------------------------------------------
👤 Estudante: ${studentName}
📊 Pontuação Total (XP): ${state.xp}
🏆 Nível: ${getLevel(state.xp).name}
🔥 Streak Atual: ${state.streak} dias
📽️ Vídeos Concluídos: ${getCompletedVideosCount()}
🏁 Trilhas Concluídas: ${getCompletedTrailsCount()}
📈 Melhor Nota no Simulado: ${state.simuladoHighScore}%

RESUMO POR TRILHA:
--------------------------------------------------
${TRILHAS.filter(t => !t.isSpecial).map(t => {
  const tp = getTrailProgress(t.id);
  const done = t.videos.filter(v => state.videosCompleted[v.id]).length;
  return `• ${t.title}: ${tp}% (${done}/${t.videos.length} vídeos)`;
}).join('\n')}

ÚLTIMOS SIMULADOS:
--------------------------------------------------
${state.quizHistory.length > 0 
  ? state.quizHistory.slice(-5).reverse().map(h => `• ${new Date(h.date).toLocaleDateString('pt-BR')}: ${h.score}% (${h.correct}/${h.total} acertos)`).join('\n')
  : 'Nenhum simulado realizado ainda.'}

--------------------------------------------------
Enviado via Química Revisada em ${new Date().toLocaleString('pt-BR')}
`;

  showToast('Enviando relatório...', 'info');

  const templateParams = {
    nome: "Professor José",
    título: `Relatório de Progresso: ${studentName}`,
    nome_aluno: studentName, // Extra info
    mensagem: reportContent  // Body of the report
  };

  try {
    // Using the Service ID and Template ID provided by the user
    const response = await emailjs.send('default_service', 'template_se5owkn', templateParams);
    
    if (response.status === 200) {
      showToast('✅ Relatório enviado com sucesso!', 'success');
      fireConfetti();
    } else {
      throw new Error('Falha no envio');
    }
  } catch (err) {
    console.error('EmailJS Error:', err);
    // Fallback if template is not configured: show the text so student can copy/paste
    const fallback = confirm('Não foi possível enviar automaticamente. Deseja copiar o relatório para enviar manualmente por WhatsApp ou Email?');
    if (fallback) {
      navigator.clipboard.writeText(reportContent);
      showToast('📋 Relatório copiado para a área de transferência!', 'success');
    }
  }
}

// ========== INITIALIZATION ==========
window.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initVisitorCounter();
  
  // Expose to global for onclick handlers
  window.openMaterialReader = openMaterialReader;
  window.closeMaterialReader = closeMaterialReader;
  window.sendEmailReport = sendEmailReport; // Expose send function
  
  // Navigation handling
  router();
  window.addEventListener('hashchange', router);
});

