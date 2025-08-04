// Wait until page is fully loaded before hiding preloader
window.addEventListener('load', function () {
    setTimeout(function () {
        var preloader = document.getElementById('preloader');
        if (preloader)
            preloader.style.display = 'none';
    }, 6000); // 6 seconds minimum
});
// 🌙 Dark/Light Mode Toggle
var modeToggle = document.getElementById('mode-toggle');
var darkMode = true;
if (modeToggle) {
    modeToggle.innerHTML = '🌙';
    modeToggle.onclick = function () {
        darkMode = !darkMode;
        document.body.classList.toggle('light-mode', !darkMode);
        modeToggle.innerHTML = darkMode ? '🌙' : '☀️';
    };
}
// 🔗 Smooth Scroll for Nav Links
var navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        if (targetId) {
            var section = document.querySelector(targetId);
            section === null || section === void 0 ? void 0 : section.scrollIntoView({ behavior: 'smooth' });
            navLinks.forEach(function (l) { return l.classList.remove('active'); });
            this.classList.add('active');
        }
    });
});
// 📁 Portfolio Filtering
var filterBtns = document.querySelectorAll('.filter-btn');
var portfolioCards = document.querySelectorAll('.portfolio-card');
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { return b.classList.remove('active'); });
        this.classList.add('active');
        var filter = this.getAttribute('data-filter');
        portfolioCards.forEach(function (card) {
            var category = card.dataset.category;
            card.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
        });
    });
});
// 🖼️ Portfolio Modal
var modal = document.getElementById('portfolio-modal');
var modalImg = document.querySelector('.modal-img');
var modalCaption = document.querySelector('.modal-caption');
var modalClose = document.querySelector('.modal-close');
portfolioCards.forEach(function (card) {
    card.addEventListener('click', function () {
        var _a;
        var img = this.querySelector('img');
        var caption = this.querySelector('.portfolio-info h3');
        if (modal && modalImg && modalCaption && img && caption) {
            modal.classList.add('active');
            modalImg.src = img.src;
            modalCaption.textContent = (_a = caption.textContent) !== null && _a !== void 0 ? _a : '';
        }
    });
});
modalClose === null || modalClose === void 0 ? void 0 : modalClose.addEventListener('click', function () { return modal.classList.remove('active'); });
window.addEventListener('click', function (e) {
    if (e.target === modal)
        modal.classList.remove('active');
});
// 💬 Testimonials Slider
var slides = document.querySelectorAll('.testimonial-slide');
var prevBtn = document.querySelector('.testimonial-prev');
var nextBtn = document.querySelector('.testimonial-next');
var slider = document.querySelector('.testimonials-slider');
var currentSlide = 0;
var autoPlayInterval;
function showSlide(index) {
    slides.forEach(function (slide, i) {
        slide.classList.toggle('active', i === index);
    });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
function startAutoPlay() {
    autoPlayInterval = window.setInterval(nextSlide, 4000);
}
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}
if (slides.length) {
    showSlide(currentSlide);
    startAutoPlay();
    prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', function () {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    });
    nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', function () {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });
    slider === null || slider === void 0 ? void 0 : slider.addEventListener('mouseenter', stopAutoPlay);
    slider === null || slider === void 0 ? void 0 : slider.addEventListener('mouseleave', startAutoPlay);
}
// 📩 Contact Form Dummy Submit
var contactForm = document.querySelector('.contact-form');
contactForm === null || contactForm === void 0 ? void 0 : contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! (Form not actually submitted)');
    contactForm.reset();
});
// ⌨️ Typewriter Effect
var typewriterText = document.querySelector('.typewriter-text');
var texts = ['Am Web Developer', 'Am Freelancer', 'Am AI Expert'];
var textIndex = 0;
var charIndex = 0;
var isDeleting = false;
function typeWriter() {
    var current = texts[textIndex];
    if (isDeleting) {
        typewriterText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    }
    else {
        typewriterText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }
    var delay = isDeleting ? 100 : 150;
    if (!isDeleting && charIndex === current.length) {
        delay = 2000;
        isDeleting = true;
    }
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 500;
    }
    setTimeout(typeWriter, delay);
}
typeWriter();
// 🔎 Scroll Reveal Effect
var revealSections = document.querySelectorAll('section, footer');
function revealOnScroll() {
    var winHeight = window.innerHeight;
    revealSections.forEach(function (section) {
        var top = section.getBoundingClientRect().top;
        if (top < winHeight - 80) {
            section.classList.add('active');
        }
        else {
            section.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
