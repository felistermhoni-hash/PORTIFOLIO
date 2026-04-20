function showSection(sectionId, element){

  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.remove("active"));

  document.getElementById(sectionId).classList.add("active");

  const items = document.querySelectorAll(".nav");
  items.forEach(i => i.classList.remove("active"));

  element.classList.add("active");
}