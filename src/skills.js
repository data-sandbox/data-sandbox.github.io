function createSkill(name) {
  const skillCard = document.createElement("div");
  skillCard.classList.add("skill-card");

  const skill = document.createElement("p");
  skill.classList.add("skill-title");
  skill.textContent = name;

  skillCard.appendChild(skill);

  return skillCard;
}

function createSection(name, skillsArray) {
  const Section = document.createElement("div");
  Section.classList.add("skills-section");

  const Title = document.createElement("h3");
  Title.textContent = name;

  const skills = document.createElement("div");
  skills.classList.add("skills-cards");
  skillsArray.forEach((skill) => {
    skills.appendChild(createSkill(skill));
  });

  Section.appendChild(Title);
  Section.append(skills);

  return Section;
}

const backendSkills = [
  "Python",
  "REST API design",
  "Flask",
  "Litestar",
  "Django",
  "UV",
];

const databaseSkills = ["Postgres", "SQL", "DuckDB", "Delta Lake", "DVC"];

const infraSkills = ["Terraform", "Docker", "Docker Compose", "Azure DevOps"];

const testingSkills = ["Pytest", "Pyinstrument", "Locust", "Nox"];

function loadSkills() {
  const skills = document.getElementById("skills-container");

  skills.append(createSection("Backend & APIs", backendSkills));
  skills.append(createSection("Databases & Data Systems", databaseSkills));
  skills.append(createSection("Infrastructure & Deployment", infraSkills));
  skills.append(createSection("Testing & Observability", testingSkills));
}

export default loadSkills;
