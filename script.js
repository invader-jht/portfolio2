document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll(".theme-btn");
  const savedTheme = localStorage.getItem("jobair_theme") || "midnight";

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("jobair_theme", theme);
    themeButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });
  }

  applyTheme(savedTheme);

  themeButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
  });

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  const roles = [
    "Software Engineering Student",
    "Aspiring Data Scientist",
    "Problem Solver & Developer"
  ];
  const typingEl = document.getElementById("typingText");
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      typingEl.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1600);
        return;
      }
    } else {
      typingEl.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 45 : 85);
  }
  typeLoop();

  const toast = document.getElementById("toast");
  function copyEmail() {
    navigator.clipboard.writeText("jobairhossain29200@gmail.com").then(() => {
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2200);
    });
  }

  document.getElementById("copyEmailHero").addEventListener("click", copyEmail);
  document.getElementById("copyEmailContact").addEventListener("click", copyEmail);

  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      projectCards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.style.display = match ? "flex" : "none";
      });
    });
  });

  const projectDetails = {
    ecowaste: {
      category: "Full-Stack Marketplace & System Architecture",
      title: "EcoWaste & Marketplace",
      overview:
        "A resource-matching platform connecting waste generators with recyclers and buyers through structured discovery and transaction workflows.",
      highlights: [
        "Architected normalized MySQL relational schemas to handle waste listings, user matching, order lifecycles, and rating workflows.",
        "Modeled end-to-end system workflows using UML sequence, activity, and state diagrams.",
        "Implemented structured search, categorization, and filtering queries to streamline resource discovery."
      ],
      tags: ["Python", "Java", "MySQL", "HTML5", "CSS3", "JavaScript", "UML"]
    },
    event: {
      category: "Database-Driven Management Application",
      title: "Event Management System",
      overview:
        "A centralized software system designed to streamline event scheduling, attendee registration, resource allocation, and participation tracking.",
      highlights: [
        "Engineered modular OOP architecture separating event scheduling, participant records, and administrative operations.",
        "Designed relational database tables in MySQL with foreign-key constraints and structured queries for capacity reporting.",
        "Implemented input validation, role-based workflows, and structured event data logging."
      ],
      tags: ["Java", "MySQL", "Object-Oriented Programming (OOP)"]
    }
  };

  const modal = document.getElementById("projectModal");
  const closeModal = document.getElementById("closeModal");

  document.querySelectorAll(".open-modal").forEach((btn) => {
    btn.addEventListener("click", () => {
      const data = projectDetails[btn.dataset.project];
      if (!data) return;
      document.getElementById("modalCategory").textContent = data.category;
      document.getElementById("modalTitle").textContent = data.title;
      document.getElementById("modalOverview").textContent = data.overview;

      const list = document.getElementById("modalHighlights");
      list.innerHTML = data.highlights.map((item) => `<li>${item}</li>`).join("");

      const tags = document.getElementById("modalTags");
      tags.innerHTML = data.tags.map((tag) => `<span class="mini-tag">${tag}</span>`).join("");

      modal.classList.add("open");
    });
  });

  closeModal.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });

  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      item.classList.toggle("open");
      btn.querySelector(".faq-icon").textContent = item.classList.contains("open") ? "−" : "+";
    });
  });

  const chatToggle = document.getElementById("chatToggle");
  const chatWindow = document.getElementById("chatWindow");
  const closeChat = document.getElementById("closeChat");
  const chatMessages = document.getElementById("chatMessages");

  const quickAnswers = {
    education:
      "Jobair is studying B.Sc. in Software Engineering at Daffodil International University (CGPA: 3.93 / 4.00, graduating Dec 2028). He completed HSC at Noakhali Govt College (GPA 4.25/5.00) and SSC at Noakhali Zilla School (GPA 5.00/5.00).",
    skills:
      "His stack includes Python, Java, C, JavaScript, MySQL, HTML5, CSS3, Git, GitHub, VS Code, and Linux, plus core CS foundations.",
    projects:
      "He has built EcoWaste & Marketplace (Full-Stack & UML architecture) and an Event Management System (Java & MySQL OOP application).",
    goal:
      "Jobair is focused on programming and problem-solving, with a career goal to become a Data Scientist."
  };

  chatToggle.addEventListener("click", () => chatWindow.classList.toggle("open"));
  closeChat.addEventListener("click", () => chatWindow.classList.remove("open"));

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const key = chip.dataset.q;
      const userBubble = document.createElement("div");
      userBubble.className = "user-msg";
      userBubble.textContent = chip.textContent;

      const botBubble = document.createElement("div");
      botBubble.className = "bot-msg";
      botBubble.textContent = quickAnswers[key];

      chatMessages.appendChild(userBubble);
      chatMessages.appendChild(botBubble);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});