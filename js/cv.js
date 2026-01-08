// AOS Init
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, offset: 50 });
}

// Theme Logic
const toggle = document.getElementById('themeToggle');
const icon = toggle ? toggle.querySelector('i') : null;

const updateTheme = (isDark) => {
    if (isDark) {
        document.body.classList.add('dark-mode');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        if (icon) icon.classList.replace('fa-sun', 'fa-moon');
    }
};

const currentTheme = localStorage.getItem('theme') || 'light';
updateTheme(currentTheme === 'dark');

if (toggle) {
    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateTheme(isDark);
    });
}
