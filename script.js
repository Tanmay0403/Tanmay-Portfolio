function toggleMenu(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );
  
    sections.forEach((section) => observer.observe(section));
  });
  