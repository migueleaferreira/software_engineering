// Alternar Tema com ícone
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeIcon.classList.replace("bi-brightness-high-fill", "bi-moon-stars-fill");
    } else {
        themeIcon.classList.replace("bi-moon-stars-fill", "bi-brightness-high-fill");
    }
});

// Scroll suave para seções (considerando header fixo)
document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = document.querySelector('header').offsetHeight + 10; // 10px de folga
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});
