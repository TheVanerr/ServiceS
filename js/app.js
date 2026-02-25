// ============================================================
//  app.js    Makine bazli ariza rehberi
// ============================================================

//  DOM 
const sidebar        = document.getElementById('sidebar');
const mainContent    = document.getElementById('main-content');
const openSidebarBtn = document.getElementById('open-sidebar');
const closeSidebarBtn= document.getElementById('close-sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const welcomeScreen  = document.getElementById('welcome-screen');
const machineScreen  = document.getElementById('machine-screen');
const machineTitle   = document.getElementById('machine-title');
const faultList      = document.getElementById('fault-list');
const noFaults       = document.getElementById('no-faults');
const machineListEl  = document.getElementById('machine-list');
const welcomeMachines= document.getElementById('welcome-machines');

//  Sidebar: Makine Listesini Olustur 
Object.entries(machineData).forEach(([key, machine]) => {
  const btn = document.createElement('button');
  btn.className = 'machine-btn w-full text-left px-3 py-2.5 rounded-lg border border-transparent ' +
    'text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 transition-all text-sm font-medium ' +
    'flex items-center gap-2.5';
  btn.dataset.key = key;
  btn.innerHTML = `<span class="text-base">${machine.icon}</span>${machine.label}`;
  btn.addEventListener('click', () => {
    showMachine(key);
    if (window.innerWidth < 1024) closeSidebarFn();
  });
  machineListEl.appendChild(btn);
});

//  Karsılama: Makine Kartları 
Object.entries(machineData).forEach(([key, machine]) => {
  const card = document.createElement('button');
  card.className = 'bg-slate-800 rounded-xl p-5 border border-slate-700 ' +
    'hover:border-amber-500/50 hover:bg-slate-700/60 transition-all flex flex-col items-center gap-2';
  card.innerHTML = `
    <span class="text-3xl">${machine.icon}</span>
    <span class="font-bold text-amber-400 text-lg">${machine.label}</span>
    <span class="text-xs text-slate-500">${machine.faults.length} ariza</span>`;
  card.addEventListener('click', () => showMachine(key));
  welcomeMachines.appendChild(card);
});

//  Makine Sayfasini Goster 
function showMachine(key) {
  const machine = machineData[key];
  if (!machine) return;

  // Aktif butonu vurgula
  document.querySelectorAll('.machine-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.key === key);
  });

  machineTitle.textContent = machine.label;
  faultList.innerHTML = '';

  if (!machine.faults || machine.faults.length === 0) {
    noFaults.classList.remove('hidden');
  } else {
    noFaults.classList.add('hidden');
    machine.faults.forEach((fault, fi) => {
      faultList.appendChild(buildFaultCard(fault, fi));
    });
  }

  welcomeScreen.classList.add('hidden');
  machineScreen.classList.remove('hidden');
  machineScreen.classList.add('fade-in');
  setTimeout(() => machineScreen.classList.remove('fade-in'), 300);
}

//  Ariza Karti Olustur 
function buildFaultCard(fault, fi) {
  const wrapper = document.createElement('div');
  wrapper.className = 'bg-slate-800 rounded-xl border border-slate-700 overflow-hidden';

  // Ariza baslik satirı
  const header = document.createElement('div');
  header.className = 'fault-header flex items-start gap-3 p-4 select-none';
  header.innerHTML = `
    <span class="flex-shrink-0 mt-0.5 w-7 h-7 bg-red-500/20 text-red-400 rounded-lg
                 flex items-center justify-center font-bold text-sm">${fi + 1}</span>
    <p class="flex-1 font-semibold text-slate-100 leading-snug">${fault.title}</p>
    <svg class="fault-arrow w-5 h-5 text-slate-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>`;

  // Sebep listesi (kapali)
  const body = document.createElement('div');
  body.className = 'fault-body';

  if (fault.causes && fault.causes.length > 0) {
    const inner = document.createElement('div');
    inner.className = 'border-t border-slate-700 divide-y divide-slate-700/60';

    fault.causes.forEach((cause, ci) => {
      inner.appendChild(buildCauseRow(cause, ci));
    });

    body.appendChild(inner);
  }

  // Acma/kapama
  const arrow = header.querySelector('.fault-arrow');
  header.addEventListener('click', () => {
    const isOpen = body.classList.toggle('open');
    arrow.classList.toggle('open', isOpen);
  });

  wrapper.appendChild(header);
  wrapper.appendChild(body);
  return wrapper;
}

//  Sebep Satiri Olustur 
function buildCauseRow(cause, ci) {
  const row = document.createElement('div');
  row.className = 'cause-row';

  // Sebep baslik
  const causeHeader = document.createElement('div');
  causeHeader.className = 'flex items-start gap-3 px-4 py-3 select-none';
  causeHeader.innerHTML = `
    <span class="flex-shrink-0 mt-0.5 w-6 h-6 bg-amber-500/20 text-amber-400 rounded-md
                 flex items-center justify-center text-xs font-bold">${ci + 1}</span>
    <p class="flex-1 text-sm text-slate-300 leading-snug">${cause.title}</p>
    <svg class="cause-arrow w-4 h-4 text-slate-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>`;

  // Cozum paneli
  const solutionPanel = document.createElement('div');
  solutionPanel.className = 'cause-solution';

  if (cause.solution) {
    solutionPanel.innerHTML = `
      <div class="mx-4 mb-3 p-4 bg-green-500/10 border border-green-500/25 rounded-xl">
        <p class="text-xs font-semibold text-green-400 uppercase tracking-wide flex items-center gap-1.5 mb-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Cozum Onerisi
        </p>
        <p class="text-sm text-slate-300 leading-relaxed">${cause.solution}</p>
      </div>`;
  }

  // Acma/kapama
  const causeArrow = causeHeader.querySelector('.cause-arrow');
  causeHeader.addEventListener('click', () => {
    const isOpen = solutionPanel.classList.toggle('open');
    causeArrow.classList.toggle('open', isOpen);
  });

  row.appendChild(causeHeader);
  row.appendChild(solutionPanel);
  return row;
}

//  Mobil Sidebar 
function openSidebarFn() {
  sidebar.style.transform = 'translateX(0)';
  sidebarOverlay.classList.remove('hidden');
}
function closeSidebarFn() {
  sidebar.style.transform = 'translateX(-100%)';
  sidebarOverlay.classList.add('hidden');
}

if (openSidebarBtn)  openSidebarBtn.addEventListener('click', openSidebarFn);
if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebarFn);
if (sidebarOverlay)  sidebarOverlay.addEventListener('click', closeSidebarFn);

//  Responsive 
function handleResize() {
  if (window.innerWidth >= 1024) {
    sidebar.style.transform = 'translateX(0)';
    mainContent.style.marginLeft = '15rem'; // w-60
    sidebarOverlay.classList.add('hidden');
  } else {
    sidebar.style.transform = 'translateX(-100%)';
    mainContent.style.marginLeft = '0';
  }
}
window.addEventListener('resize', handleResize);
handleResize();
