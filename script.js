document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. GESTION DU MENU DÉROULANT CONNEXION ---
    const authToggle = document.getElementById('authToggle');
    const authDropdown = document.getElementById('authDropdown');

    if (authToggle && authDropdown) {
        authToggle.addEventListener('click', function(e) {
            e.preventDefault(); 
            authDropdown.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
            if (!authToggle.contains(e.target) && !authDropdown.contains(e.target)) {
                authDropdown.classList.remove('show');
            }
        });
    }

    // --- 2. GESTION DU MENU BURGER (RESPONSIVE) ---
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');

    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('show-menu');
        });
    }

    // --- 3. EFFET MACHINE À ÉCRIRE (Page d'accueil) ---
    const typewriterContainer = document.getElementById('typewriter-container');
    if (typewriterContainer) {
        const textToType = "> Spécialiste CIEL | Cybersécurité & Infrastructures Réseaux_";
        let index = 0;
        
        const textSpan = document.createElement('span');
        const cursorSpan = document.createElement('span');
        cursorSpan.classList.add('cursor');
        
        typewriterContainer.appendChild(textSpan);
        typewriterContainer.appendChild(cursorSpan);

        function typeWriter() {
            if (index < textToType.length) {
                textSpan.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        }
        setTimeout(typeWriter, 500);
    }

    // --- 4. INTERCEPTION DU FORMULAIRE DE CONTACT ---
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stoppe l'envoi de la page
            
            const container = document.querySelector('.contact-form-container');
            container.innerHTML = `
                <div style="text-align: center; padding: 30px 0;">
                    <h3 style="color: #00ff00;">✔️ Message intercepté !</h3>
                    <p style="color: #fff; margin-top: 15px;">
                        Ceci est une démonstration technique.<br>
                        Pour me contacter, utilisez mon email ou mon LinkedIn !
                    </p>
                    <a href="index.html" class="cv-download" style="display: inline-block; margin-top: 20px;">Retour à l'accueil</a>
                </div>
            `;
        });
    }

    // --- 5. ANIMATIONS D'APPARITION AU SCROLL ---
    const fadeElements = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

});
