// Active menu

export const links = document.querySelectorAll('[data-toggle="tab"]');
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});



