function showSection(sectionId, element) {
  let sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.remove("active"));

  document.getElementById(sectionId).classList.add("active");

  let navs = document.querySelectorAll(".nav");
  navs.forEach(nav => nav.classList.remove("active"));

  element.classList.add("active");
}