// Função para abrir o modal de imagem
function openModal(src) {
    document.getElementById('imageModal').style.display = 'block';
    document.getElementById('modalImage').src = src;
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Fechar modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Alternar respostas das questões
function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    answer.classList.toggle('active');
}

// Botão de voltar ao topo
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    const header = document.getElementById('header');
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
        header.classList.add('scrolled');
    } else {
        backToTop.classList.remove('active');
        header.classList.remove('scrolled');
    }
});

// Criar partículas premium para o efeito de fundo
function createParticlesPremium() {
    const particlesContainer = document.getElementById('particles-premium');
    const particleCount = 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle-premium');
        
        // Tamanho aleatório
        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posição aleatória
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Cor aleatória
        const opacity = Math.random() * 0.3 + 0.1;
        particle.style.backgroundColor = `rgba(110, 72, 170, ${opacity})`;
        
        // Duração da animação aleatória
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Delay aleatório
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Efeito de digitação premium
function typeWriterEffect() {
    const typewriterElement = document.querySelector('.typewriter-premium');
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Iniciar após um pequeno delay
        setTimeout(typeWriter, 1000);
    }
}

// Inicializar quando a página carregar
window.onload = function() {
    createParticlesPremium();
    typeWriterEffect();
    
    // Adicionar efeito de brilho premium em elementos específicos
    const glowElements = document.querySelectorAll('.btn, .gallery-item, .media-card, .social-links a, .audio-container, .iframe-container, .qa-section, .profile-img');
    glowElements.forEach(el => el.classList.add('glow-premium'));
    
    // Animação de entrada para elementos
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('section, .gallery-item, .media-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };
    
    // Inicializar elementos com opacidade 0 para animação
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez na inicialização

    // Adicionar efeito de hover magnético nos cards
    const magneticElements = document.querySelectorAll('.media-card, .gallery-item, .btn');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX * 10;
            const deltaY = (y - centerY) / centerY * 10;
            
            this.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
};