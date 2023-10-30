function createProject(title, description, repo, liveLink = null) {
  const projCard = document.createElement("div");
  projCard.classList.add("project-container");
  projCard.classList.add("project-card");

  const projTitle = document.createElement("h3");
  projTitle.classList.add("project-title");
  projTitle.textContent = title;

  const projDetails = document.createElement("p");
  projDetails.classList.add("project-details");
  projDetails.textContent = description;

  const projLinks = document.createElement("div");
  projLinks.classList.add("links-container");

  const demoLink = document.createElement("a");
  demoLink.textContent = "👉 Live Demo";
  if (liveLink && liveLink !== "none") {
    demoLink.setAttribute("href", liveLink);
  } else {
    demoLink.setAttribute("href", `https://data-sandbox.github.io/${repo}/`);
  }
  demoLink.setAttribute("target", "_blank");

  const sourceLink = document.createElement("a");
  sourceLink.textContent = "⚛️ Source Code";
  sourceLink.setAttribute("href", `https://github.com/data-sandbox/${repo}/`);
  sourceLink.setAttribute("target", "_blank");

  if (liveLink !== "none") {
    projLinks.appendChild(demoLink);
  }
  projLinks.appendChild(sourceLink);

  projCard.appendChild(projTitle);
  projCard.appendChild(projDetails);
  projCard.appendChild(projLinks);

  return projCard;
}

function loadProjects() {
  const projects = document.getElementById("projects-container");

  projects.appendChild(
    createProject(
      "Energy Dash",
      "⚡️ Interactive dashboard for US monthly energy statistics.",
      "energy-dashboard",
    ),
  );

  projects.appendChild(
    createProject(
      "Etch-a-Sketch",
      "✍️ Modern Etch-a-sketch game using JS, HTML, CSS.",
      "etch-a-sketch",
    ),
  );

  projects.appendChild(
    createProject(
      "Dynamic Single Page",
      "🌮 Restaurant website dynamically rendered by JS.",
      "restaurant",
    ),
  );

  projects.appendChild(
    createProject(
      "Library App",
      "📚 Store your reading list in one place.",
      "library",
    ),
  );

  projects.appendChild(
    createProject(
      "Tic-Tac-Toe",
      "🧩 Tic Tac Toe game built with JS, HTML, CSS.",
      "tic-tac-toe",
    ),
  );

  projects.appendChild(
    createProject(
      "Admin Dashboard",
      "🐱 Responsive dashboard built with grid and flexbox.",
      "admin-dashboard",
    ),
  );

  projects.appendChild(
    createProject(
      "My Website",
      "🚀 Source files for this custom website.",
      "data-sandbox.github.io",
    ),
  );

  projects.appendChild(
    createProject(
      "Bluebikes",
      "🚲 Boston bike demand forecasting with Python and machine learning.",
      "ml-bluebikes-forecasting",
      "none",
    ),
  );

  projects.appendChild(
    createProject(
      "BREWYOU",
      "🍺 Find the perfect brewery for you with Python, machine learning, and NLP.",
      "nlp-brewer-finder",
      "https://brewyou.streamlit.app/",
    ),
  );
}

export default loadProjects;
