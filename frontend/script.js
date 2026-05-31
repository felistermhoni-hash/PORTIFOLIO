function showSection(sectionId, element){

  // hide all sections
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    section.classList.remove("active");
  });

  // show selected section
  document.getElementById(sectionId)
  .classList.add("active");

  // remove active from menu
  const navItems = document.querySelectorAll(".nav");

  navItems.forEach(item => {
    item.classList.remove("active");
  });

  // active clicked menu
  element.classList.add("active");
}