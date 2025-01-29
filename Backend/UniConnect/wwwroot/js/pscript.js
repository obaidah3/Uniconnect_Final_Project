document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
            element.classList.add('fade-in');
        }, index * 300); 
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const fadeInTexts = document.querySelectorAll('.fade-in-text');
    let delay = 0;

    fadeInTexts.forEach((text, index) => {
        text.style.animationDelay = `${delay}s`;
        text.classList.add('fade-in-text');
        delay += 0.5; 
    });
});
