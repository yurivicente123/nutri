document.addEventListener("DOMContentLoaded", function () {
  // Selecionando as seções que queremos animar
  const partnersSection = document.querySelector('.partners');
  const aboutSection = document.querySelector('.about');
  const servicesSection = document.querySelector('.services');
  const visionSection = document.querySelector('.vision');
  const missionSection = document.querySelector('.mission');
  
  // Flags para verificar se a animação já foi executada
  let hasAnimatedPartners = false;
  let hasAnimatedAbout = false;
  let hasAnimatedServices = false;
  let hasAnimatedVision = false;
  let hasAnimatedMission = false;

  // Função para verificar se o elemento está visível na tela
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  // Função de animação GSAP
  function animateSections() {
    // Animando a seção de Parceiros
    if (isInViewport(partnersSection) && !hasAnimatedPartners) {
      gsap.fromTo(".partners h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo(".carousel-container img", { opacity: 0, x: -100 }, { opacity: 1, x: 0, stagger: 0.2, duration: 1 });
      hasAnimatedPartners = true; // Marcar como animado
    }

    // Animando a seção de Sobre Mim
    if (isInViewport(aboutSection) && !hasAnimatedAbout) {
      gsap.fromTo(".about h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo(".about p", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });
      gsap.fromTo(".about-image", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });
      hasAnimatedAbout = true; // Marcar como animado
    }

    // Animando a seção de Visão
    if (isInViewport(visionSection) && !hasAnimatedVision) {
      gsap.fromTo(".vision h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo(".vision p", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });
      gsap.fromTo(".vision-image", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });
      hasAnimatedVision = true; // Marcar como animado
    }

    // Animando a seção de Missão
    if (isInViewport(missionSection) && !hasAnimatedMission) {
      gsap.fromTo(".mission h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo(".mission p", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });
      gsap.fromTo(".mission-image", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });
      hasAnimatedMission = true; // Marcar como animado
    }

    // Animando a seção de Serviços
    if (isInViewport(servicesSection) && !hasAnimatedServices) {
      gsap.fromTo(".services h2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo(".card", { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.3, duration: 1 });
      hasAnimatedServices = true; // Marcar como animado
    }
  }

  // Executar animações durante o scroll
  window.addEventListener('scroll', animateSections);

  // Verificar se as seções estão visíveis quando a página é carregada
  animateSections();
});

document.addEventListener("DOMContentLoaded", () => {
  // Animação para o título da seção Hero
  gsap.fromTo(
    ".hero-content h1", 
    { x: -200, opacity: 0 }, // Posição inicial e opacidade
    { x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Posição final e opacidade
  );

  // Animação para o parágrafo da seção Hero
  gsap.fromTo(
    ".hero-content p", 
    { x: -200, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 } // Pequeno atraso
  );

  // Animação para o botão da seção Hero
  gsap.fromTo(
    ".hero-content .btn-primary", 
    { x: -200, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.6 } // Atraso no botão
  );

  // Animação para a imagem da seção Hero
  gsap.fromTo(
    ".hero-image img", 
    { x: 200, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.3 } // Atraso para a imagem
  );
});

// Selecione o contêiner onde as imagens serão inseridas
const container = document.getElementById('images-container');

// Crie 100 instâncias da classe 'konoha' e adicione ao contêiner
for (let i = 0; i < 100; i++) {
  const img = document.createElement('img');  // Cria uma nova tag <img>
  img.src = '/folha.png';                    // Define o caminho da imagem
  img.alt = 'folha';                          // Define o texto alternativo
  img.classList.add('konoha');                // Adiciona a classe 'konoha'
  container.appendChild(img);                 // Adiciona a imagem ao contêiner
}
