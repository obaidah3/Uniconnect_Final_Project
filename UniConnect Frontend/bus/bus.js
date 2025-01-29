document.addEventListener('DOMContentLoaded', function () {
    const h2Element = document.querySelector('.main h2');
  
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      
      
      h2Element.style.transform = `translateY(${scrollY * 0.5}px)`;
      h2Element.style.opacity = `${1 - scrollY / 400}`; 
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const mainSection = document.querySelector('.main');
    const h2Element = document.querySelector('.main h2');
    const body = document.body;
  
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
     
      const scaleValue = 1 + scrollY / 1000; // Gradual increase in size
      h2Element.style.transform = `scale(${scaleValue}) translateY(${scrollY * 0.2}px)`;
      
      
      mainSection.style.backgroundPositionY = `${scrollY * 0.5}px`;
  
      if (scrollY < windowHeight / 2) {
        body.style.backgroundColor = '#f4f4f4';
      } else if (scrollY < windowHeight) {
        body.style.backgroundColor = '#ffe6e6';
      } else {
        body.style.backgroundColor = '#ffd1dc';
      }
    });
  });
  
    