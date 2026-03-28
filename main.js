const projectList = document.querySelector("#project-list");
const toolRows = document.querySelector("#tool-rows");

function renderProjects() {
  const projects = window.portfolioData.projects
    .map(
      (project) => `
        <article class="project-item">
          <div class="project-meta">
            <span>${project.type}</span>
            <h3>${project.title}</h3>
          </div>
          <div class="project-body">
            <span>Suggested structure</span>
            <p>${project.summary}</p>
            <ul class="project-tags">
              ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
          </div>
        </article>
      `,
    )
    .join("");

  projectList.innerHTML = projects;
}

function renderTools() {
  const toolkit = window.portfolioData.toolkit
    .map(
      (group) => `
        <article class="tool-row">
          <div>
            <h3>${group.title}</h3>
            <p>${group.description}</p>
          </div>
          <ul class="tool-pills">
            ${group.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `,
    )
    .join("");

  toolRows.innerHTML = toolkit;
}

function enableReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

renderProjects();
renderTools();
enableReveal();
