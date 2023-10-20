// Agregar desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
  });
  
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop,
      });
    }
  }
  
  // Animación de entrada para secciones
  const sections = document.querySelectorAll('section');
  
  const sectionOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px',
  };
  
  function sectionCallback(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
  
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
  
      observer.unobserve(entry.target);
    });
  }
  
  const sectionObserver = new IntersectionObserver(sectionCallback, sectionOptions);
  
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    sectionObserver.observe(section);
  });
  