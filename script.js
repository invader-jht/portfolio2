const PROFILE = {
  name: "Jobair Hossain",
  email: "jobairhossain29200@gmail.com",
  github: "https://github.com/invader-jht",
  typingRoles: [
    "Software Engineering Student",
    "Aspiring Data Scientist",
    "Problem Solver & Developer"
  ],
  skillCategories: [
    {
      title: "Programming Languages",
      subtitle: "Core Logic & Scripting",
      items: ["Python", "Java", "C", "JavaScript"]
    },
    {
      title: "Web & Database",
      subtitle: "Frontend & Relational Storage",
      items: ["HTML5", "CSS3", "MySQL"]
    },
    {
      title: "Developer Tools & OS",
      subtitle: "Version Control & Environment",
      items: ["Git", "GitHub", "Visual Studio Code", "Linux"]
    }
  ],
  projects: [
    {
      id: "ecowaste-marketplace",
      title: "EcoWaste & Marketplace",
      filterTag: "Marketplace & Architecture",
      category: "Full-Stack Marketplace & System Architecture",
      overview: "A resource-matching platform connecting waste generators with recyclers and buyers through structured discovery and transaction workflows.",
      techStack: ["Python", "Java", "MySQL", "HTML5", "CSS3", "JavaScript", "UML"],
      repoUrl: "https://github.com/invader-jht",
      highlights: [
        "Normalized MySQL relational schemas for waste listings, matching, order lifecycles, and ratings.",
        "UML sequence, activity, and state diagrams for search-and-match, payment verification, and handover workflows.",
        "Structured search and filtering queries to streamline resource discovery and maintain data integrity."
      ]
    },
    {
      id: "event-management",
      title: "Event Management System",
      filterTag: "OOP & Management",
      category: "Database-Driven Management Application",
      overview: "A centralized software system designed to streamline event scheduling, attendee registration, resource allocation, and participation tracking.",
      techStack: ["Java", "MySQL", "Object-Oriented Programming (OOP)"],
      repoUrl: "https://github.com/invader-jht",
      highlights: [
        "Modular OOP architecture separating event scheduling, participant records, and admin operations.",
        "MySQL relational tables with foreign-key constraints and attendance/capacity queries.",
        "Input validation and role-based workflows for reliable event administration."
      ]
    }
  ],
  faqs: [
    {
      question: "What is your target career role?",
      answer: "I want to be a Data Scientist. As a Software Engineering student at Daffodil International University (graduating December 2028), I am building strong programming, problem-solving, and relational database skills to support data-driven solutions."
    },
    {
      question: "Which programming languages and tools do you use?",
      answer: "My programming languages include Python, Java, C, and JavaScript. For web and database work, I use HTML5, CSS3, and MySQL, alongside Git, GitHub, Visual Studio Code, and Linux."
    },
    {
      question: "What projects have you built so far?",
      answer: "I have worked on EcoWaste & Marketplace (a resource-matching platform with normalized MySQL schemas and UML workflows) and an Event Management System built with Java OOP and MySQL."
    },
    {
      question: "Which spoken languages can you communicate in?",
      answer: "I speak English, Bangla, and Hindi."
    },
    {
      question: "Are you open to internships or collaboration?",
      answer: "Yes! I am open to internships, research projects, and collaborative software or data-focused initiatives. You can reach me at jobairhossain29200@gmail.com."
    }
  ],
  assistantQA: [
    {
      label: "Target Role",
      answer: "Jobair's target role is: Want to be Data Scientist, backed by his B.Sc. in Software Engineering studies at Daffodil International University (graduating December 2028)."
    },
    {
      label: "Education Background",
      answer: "He is pursuing a B.Sc. in Software Engineering at Daffodil International University (2025 – Dec 2028), after completing HSC at Noakhali Govt College and SSC at Noakhali Zilla School."
    },
    {
      label: "Technical Skills",
      answer: "Programming Languages: Python, Java, C, JavaScript. Web & Database: HTML5, CSS3, MySQL. Tools & OS: Git, GitHub, Visual Studio Code, Linux."
    },
    {
      label: "Featured Projects",
      answer: "EcoWaste & Marketplace (resource-matching platform with MySQL & UML) and Event Management System (Java OOP & MySQL application)."
    },
    {
      label: "Spoken Languages & Contact",
      answer: "Languages: English, Bangla, Hindi. Email: jobairhossain29200@gmail.com | GitHub: github.com/invader-jht"
    }
  ]
};

const THEME_KEY = 'jobair_portfolio_theme_v3';
let currentTheme = localStorage.getItem(THEME_KEY) || 'midnight';
let activeProjectFilter = 'All';
let toastTimer = null;

/* Theme Switcher */
function setTheme(themeName) {
  currentTheme = themeName;
  document.body.setAttribute('data-theme', themeName);
  localStorage.setItem(THEME_KEY, themeName);

  document.querySelectorAll('.theme-pill').forEach(btn => {
    const isActive = btn.getAttribute('data-theme-btn') === themeName;
    if (isActive) {
      btn.style.background = 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))';
      btn.style.color = 'var(--btn-text)';
      btn.style.fontWeight = '700';
    } else {
      btn.style.background = 'transparent';
      btn.style.color = 'var(--text-secondary)';
      btn.style.fontWeight = '500';
    }
  });
}

/* Mobile Menu */
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('hidden');
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.add('hidden');
}

/* Local Photo Live Preview Helper */
function previewLocalPhoto(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const objectUrl = URL.createObjectURL(file);
  const heroImg = document.getElementById('hero-portrait-img');
  const aboutImg = document.getElementById('about-portrait-img');
  if (heroImg) heroImg.src = objectUrl;
  if (aboutImg) aboutImg.src = objectUrl;
  showToast('Profile photo updated!');
}

/* Toast & Clipboard */
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.remove('hidden', '-translate-y-4', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('-translate-y-4', 'opacity-0');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 2600);
}

function copyToClipboard(text, successMsg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (e) {
    showToast('Unable to copy automatically.');
  }
  document.body.removeChild(ta);
}

function copyEmail() {
  copyToClipboard(PROFILE.email, 'Email copied to clipboard!');
}

function handleQuickMessage(e) {
  e.preventDefault();
  const name = document.getElementById('msg-name').value.trim();
  const sender = document.getElementById('msg-email').value.trim();
  const subject = document.getElementById('msg-subject').value.trim();
  const body = document.getElementById('msg-body').value.trim();

  const fullBody = `Hi ${PROFILE.name},\n\n${body}\n\nBest regards,\n${name} (${sender})`;
  window.location.href = `mailto:${encodeURIComponent(PROFILE.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
  showToast('Opening your email client...');
}

function copyComposedMessage() {
  const name = document.getElementById('msg-name').value.trim() || 'Visitor';
  const sender = document.getElementById('msg-email').value.trim() || 'Not provided';
  const subject = document.getElementById('msg-subject').value.trim() || 'Portfolio Inquiry';
  const body = document.getElementById('msg-body').value.trim() || '';
  copyToClipboard(`To: ${PROFILE.email}\nSubject: ${subject}\nFrom: ${name} (${sender})\n\n${body}`, 'Message text copied!');
}

/* Animated Typing Subtitle */
function startTypingEffect() {
  const el = document.getElementById('typed-role');
  const roles = PROFILE.typingRoles;
  let roleIdx = 0;
  let charIdx = roles[0].length;
  let isDeleting = true;

  function tick() {
    const currentWord = roles[roleIdx];
    if (isDeleting) {
      charIdx--;
      el.textContent = currentWord.substring(0, charIdx);
      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(tick, 350);
        return;
      }
      setTimeout(tick, 45);
    } else {
      charIdx++;
      el.textContent = currentWord.substring(0, charIdx);
      if (charIdx === currentWord.length) {
        isDeleting = true;
        setTimeout(tick, 2000);
        return;
      }
      setTimeout(tick, 80);
    }
  }

  setTimeout(tick, 1800);
}

/* Render Technical Skills */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  grid.innerHTML = PROFILE.skillCategories.map(cat => `
    <div class="surface-card rounded-2xl p-6 space-y-4">
      <div>
        <h3 class="text-lg font-bold text-main">${cat.title}</h3>
        <p class="text-xs font-mono text-dim mt-0.5">${cat.subtitle}</p>
      </div>
      <div class="flex flex-wrap gap-2 pt-1">
        ${cat.items.map(item => `
          <span class="accent-badge px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold">
            ${item}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* Render Projects & Filters */
function renderProjects() {
  const filtersEl = document.getElementById('project-filters');
  const gridEl = document.getElementById('projects-grid');

  const tags = ['All', ...new Set(PROFILE.projects.map(p => p.filterTag))];
  filtersEl.innerHTML = tags.map(tag => {
    const active = tag === activeProjectFilter;
    return `
      <button type="button" onclick="setProjectFilter('${tag}')" class="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all" style="${
        active
          ? 'background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary)); color: var(--btn-text); border-color: transparent;'
          : 'background-color: var(--bg-card); color: var(--text-secondary); border-color: var(--border-color);'
      }">
        ${tag}
      </button>
    `;
  }).join('');

  const list = activeProjectFilter === 'All'
    ? PROFILE.projects
    : PROFILE.projects.filter(p => p.filterTag === activeProjectFilter);

  gridEl.innerHTML = list.map(proj => `
    <article class="surface-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
      <div class="space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="accent-badge px-2.5 py-1 rounded-lg text-xs font-mono font-medium">${proj.filterTag}</span>
          <span class="text-xs font-mono text-dim">${proj.category}</span>
        </div>

        <h3 class="text-xl sm:text-2xl font-bold text-main">${proj.title}</h3>
        <p class="text-sm text-sub leading-relaxed">${proj.overview}</p>

        <div class="flex flex-wrap gap-1.5 pt-1">
          ${proj.techStack.map(tech => `
            <span class="px-2.5 py-1 rounded-lg text-xs font-mono text-sub border" style="background-color: var(--bg-secondary); border-color: var(--border-color);">
              ${tech}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="pt-6 mt-6 border-t flex flex-wrap items-center justify-between gap-3" style="border-color: var(--border-color);">
        <button type="button" onclick="openDetailModal('${proj.id}')" class="btn-primary px-4 py-2.5 rounded-xl text-xs sm:text-sm inline-flex items-center gap-1.5">
          <span>View Architecture &amp; Details</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>

        <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </article>
  `).join('');
}

function setProjectFilter(tag) {
  activeProjectFilter = tag;
  renderProjects();
}

/* Project Details Modal */
function openDetailModal(projectId) {
  const proj = PROFILE.projects.find(p => p.id === projectId);
  if (!proj) return;

  document.getElementById('detail-category').textContent = proj.category;
  document.getElementById('detail-title').textContent = proj.title;
  document.getElementById('detail-overview').textContent = proj.overview;
  document.getElementById('detail-repo').href = proj.repoUrl;

  document.getElementById('detail-highlights').innerHTML = proj.highlights.map(h => `
    <li class="flex items-start gap-2.5">
      <svg class="w-5 h-5 accent-sec-text shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span class="text-sub leading-relaxed">${h}</span>
    </li>
  `).join('');

  document.getElementById('detail-tech').innerHTML = proj.techStack.map(t => `
    <span class="accent-badge px-3 py-1 rounded-lg text-xs font-mono">${t}</span>
  `).join('');

  const modal = document.getElementById('project-detail-modal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeDetailModal() {
  const modal = document.getElementById('project-detail-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

/* FAQ Accordion */
function renderFAQs() {
  const list = document.getElementById('faq-list');
  list.innerHTML = PROFILE.faqs.map((faq, idx) => `
    <div class="surface-card rounded-2xl overflow-hidden">
      <button type="button" onclick="toggleFAQ(${idx})" class="w-full px-6 py-4 text-left flex items-center justify-between gap-4">
        <span class="text-sm sm:text-base font-bold text-main">${faq.question}</span>
        <svg id="faq-icon-${idx}" class="w-5 h-5 accent-text shrink-0 transition-transform duration-200 ${idx === 0 ? 'rotate-180' : ''}" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div id="faq-body-${idx}" class="${idx === 0 ? '' : 'hidden'} px-6 pb-5 text-sm text-sub leading-relaxed border-t pt-3.5" style="border-color: var(--border-color);">
        ${faq.answer}
      </div>
    </div>
  `).join('');
}

function toggleFAQ(idx) {
  const body = document.getElementById(`faq-body-${idx}`);
  const icon = document.getElementById(`faq-icon-${idx}`);
  body.classList.toggle('hidden');
  icon.classList.toggle('rotate-180');
}

/* Floating Quick Assistant Widget */
function renderAssistantPrompts() {
  const container = document.getElementById('assistant-prompts');
  container.innerHTML = PROFILE.assistantQA.map((item, idx) => `
    <button type="button" onclick="askAssistant(${idx})" class="accent-badge px-2.5 py-1 rounded-lg text-[11px] font-medium hover:opacity-85 transition-opacity text-left">
      ${item.label}
    </button>
  `).join('');
}

function toggleAssistant() {
  document.getElementById('assistant-drawer').classList.toggle('hidden');
}

function askAssistant(idx) {
  const qa = PROFILE.assistantQA[idx];
  if (!qa) return;
  const feed = document.getElementById('assistant-messages');

  const userBubble = document.createElement('div');
  userBubble.className = 'p-2.5 rounded-xl text-right ml-8 font-medium';
  userBubble.style.background = 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))';
  userBubble.style.color = 'var(--btn-text)';
  userBubble.textContent = qa.label;

  const botBubble = document.createElement('div');
  botBubble.className = 'p-3 rounded-xl border text-sub mr-4 leading-relaxed';
  botBubble.style.backgroundColor = 'var(--bg-secondary)';
  botBubble.style.borderColor = 'var(--border-color)';
  botBubble.textContent = qa.answer;

  feed.appendChild(userBubble);
  feed.appendChild(botBubble);
  feed.scrollTop = feed.scrollHeight;
}

/* Scroll Progress Indicator */
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
  document.getElementById('scroll-progress').style.width = `${pct}%`;
});

/* Initialize Application */
window.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  renderSkills();
  renderProjects();
  renderFAQs();
  renderAssistantPrompts();
  startTypingEffect();
});
