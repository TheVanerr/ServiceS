// ============================================================
//  UYGULAMA MANTIĞI  –  app.js
//  Tüm kategori verilerini birleştirir ve arayüzü yönetir.
//  Bağımlılıklar (sırayla yüklenmelidir):
//    data/mechanical.js   → mechanicalErrors
//    data/electrical.js   → electricalErrors
//    data/sensor.js       → sensorErrors
//    data/communication.js→ communicationErrors
//    data/hydraulic.js    → hydraulicErrors
// ============================================================

// Tüm kategorileri tek bir nesnede birleştir
const errorData = {
  ...mechanicalErrors,
  ...electricalErrors,
  ...sensorErrors,
  ...communicationErrors,
  ...hydraulicErrors
};

// ── DOM Referansları ──────────────────────────────────────────
const sidebar        = document.getElementById('sidebar');
const mainContent    = document.getElementById('main-content');
const openSidebarBtn = document.getElementById('open-sidebar');
const closeSidebarBtn= document.getElementById('close-sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const welcomeScreen  = document.getElementById('welcome-screen');
const errorDetail    = document.getElementById('error-detail');
const backBtn        = document.getElementById('back-btn');

// ── Kategori Aç/Kapat ─────────────────────────────────────────
document.querySelectorAll('.category-header').forEach(header => {
  header.addEventListener('click', () => {
    const category = header.dataset.category;
    const content  = document.querySelector(`[data-category-content="${category}"]`);
    const arrow    = header.querySelector('.category-arrow');

    content.classList.toggle('open');
    arrow.style.transform = content.classList.contains('open')
      ? 'rotate(180deg)'
      : 'rotate(0deg)';
  });
});

// ── Hata Kalemi Tıklama ───────────────────────────────────────
document.querySelectorAll('.error-item').forEach(item => {
  item.addEventListener('click', () => {
    showErrorDetail(item.dataset.error);
    if (window.innerWidth < 1024) closeSidebar();
  });
});

// ── Hata Detayını Göster ──────────────────────────────────────
function showErrorDetail(code) {
  const error = errorData[code];
  if (!error) return;

  document.getElementById('error-icon').textContent        = error.icon;
  document.getElementById('error-code').textContent        = error.code;
  document.getElementById('error-title').textContent       = error.title;
  document.getElementById('error-description').textContent = error.description;

  // Sebepler ve her sebebin altında çözüm önerileri
  document.getElementById('causes-container').innerHTML =
    error.causes.map((cause, i) => `
      <div class="cause-card bg-slate-700/50 rounded-xl border border-slate-600 overflow-hidden"
           style="animation-delay:${i * 0.1}s">
        <div class="flex items-start gap-3 p-4">
          <span class="flex-shrink-0 w-8 h-8 bg-amber-500/20 rounded-lg flex items-center
                       justify-center text-amber-400 font-bold">${i + 1}</span>
          <div class="flex-1">
            <h4 class="font-semibold text-slate-100">${cause.title}</h4>
            <p class="text-sm text-slate-400 mt-1">${cause.desc}</p>
            ${cause.solutions && cause.solutions.length ? `
            <div class="mt-3 space-y-2">
              <p class="text-xs font-semibold text-green-400 uppercase tracking-wide flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Çözüm Önerileri
              </p>
              ${cause.solutions.map(sol => `
                <div class="flex items-start gap-2 bg-green-500/10 rounded-lg px-3 py-2 border border-green-500/20">
                  <span class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center
                               justify-center text-slate-900 text-xs font-bold mt-0.5">✓</span>
                  <p class="text-sm text-slate-300">${sol}</p>
                </div>`).join('')}
            </div>` : ''}
          </div>
        </div>
      </div>`
    ).join('');

  welcomeScreen.classList.add('hidden');
  errorDetail.classList.remove('hidden');

  // Aktif menü kalemi vurgula
  document.querySelectorAll('.error-item').forEach(el => {
    el.classList.toggle('bg-amber-500/20', el.dataset.error === code);
  });
}

// ── Geri Butonu ───────────────────────────────────────────────
backBtn.addEventListener('click', () => {
  errorDetail.classList.add('hidden');
  welcomeScreen.classList.remove('hidden');
  document.querySelectorAll('.error-item').forEach(el => {
    el.classList.remove('bg-amber-500/20');
  });
});

// ── Mobil Sidebar ─────────────────────────────────────────────
function openSidebar() {
  sidebar.style.transform = 'translateX(0)';
  sidebarOverlay.classList.remove('hidden');
}

function closeSidebar() {
  sidebar.style.transform = 'translateX(-100%)';
  sidebarOverlay.classList.add('hidden');
}

if (openSidebarBtn)  openSidebarBtn.addEventListener('click', openSidebar);
if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
if (sidebarOverlay)  sidebarOverlay.addEventListener('click', closeSidebar);

// ── Duyarlı Yeniden Boyutlandırma ────────────────────────────
function handleResize() {
  if (window.innerWidth >= 1024) {
    sidebar.style.transform     = 'translateX(0)';
    mainContent.style.marginLeft = '18rem';
    sidebarOverlay.classList.add('hidden');
  } else {
    sidebar.style.transform     = 'translateX(-100%)';
    mainContent.style.marginLeft = '0';
  }
}

window.addEventListener('resize', handleResize);
handleResize();

// ── Varsayılan Olarak Mekanik Kategorisini Aç ─────────────────
document.querySelector('[data-category-content="mechanical"]').classList.add('open');
document.querySelector('[data-category="mechanical"] .category-arrow').style.transform = 'rotate(180deg)';
