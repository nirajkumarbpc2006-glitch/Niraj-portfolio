/**
 * Niraj Kumar Portfolio - Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Top Scroll Progress Indicator
    const progressBar = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        if (progressBar) progressBar.style.width = `${progress}%`;
    });

    // 2. Mobile Navigation
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle?.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // 3. Scroll Spy Navigation
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');
            const targetLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                targetLink?.classList.add('active');
            } else {
                targetLink?.classList.remove('active');
            }
        });
    });

    // 4. Typewriter Effect
    const typewriter = document.getElementById('typewriter');
    const phrases = [
        "Full-Stack Web Applications.",
        "Scalable MERN Architectures.",
        "Clean Algorithms in Java & C.",
        "Interactive Responsive UIs."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
        if (!typewriter) return;
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 110;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingDelay = 2000; // Pause at full phrase
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingDelay = 400;
        }

        setTimeout(type, typingDelay);
    }
    type();

    // 5. Download Resume Handler
    const resumeBtn = document.getElementById('downloadResumeBtn');
    resumeBtn?.addEventListener('click', () => {
        alert("📄 Niraj Kumar's Resume: B.Tech CSE (Teerthanker Mahaveer University) | Java, C, MERN Stack. Resume preview generated!");
    });

    // 6. Portfolio Contact Form
    const contactForm = document.getElementById('portfolioContactForm');
    const toast = document.getElementById('contactToast');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('pName').value;
            toast.style.display = 'block';
            toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you, <strong>${name}</strong>! Your message has reached Niraj Kumar. I will reply to you as soon as possible.`;
            contactForm.reset();
            setTimeout(() => {
                toast.style.display = 'none';
            }, 6000);
        });
    }
});
