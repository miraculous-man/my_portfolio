// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle ? themeToggle.querySelector('i') : null;

const applyTheme = (theme) => {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        document.body.classList.remove('dark-mode');
        if (icon) icon.classList.replace('fa-sun', 'fa-moon');
    }
};

const savedTheme = localStorage.getItem('theme');
if (savedTheme) applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        const theme = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        
        if (icon) {
            if (isDark) {
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
        }
    });
}

// Initialize AOS
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
}

// GSAP Hero Animation
if (typeof gsap !== 'undefined') {
    gsap.from(".profile-img", {
        duration: 1.5,
        scale: 0.5,
        opacity: 0,
        ease: "back.out(1.7)"
    });

    gsap.from(".hero-section h1", {
        duration: 1.2,
        x: -100,
        opacity: 0,
        ease: "power4.out",
        delay: 0.2
    });
    
    gsap.from(".hero-section .lead, .hero-section p, .hero-section .btn", {
        duration: 1.2,
        y: 30,
        opacity: 0,
        ease: "power4.out",
        stagger: 0.2,
        delay: 0.5
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
        
        setTimeout(() => {
            if (formStatus) {
                formStatus.classList.remove('d-none', 'alert', 'alert-danger');
                formStatus.classList.add('alert', 'alert-success');
                formStatus.innerText = 'Thank you! Your message has been sent successfully.';
                
                setTimeout(() => {
                    formStatus.classList.add('d-none');
                }, 5000);
            }
            
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            contactForm.reset();
        }, 1500);
    });
}
