document.addEventListener('DOMContentLoaded', function() {
    const authToggle = document.getElementById('authToggle');
    const authDropdown = document.getElementById('authDropdown');

    if (authToggle && authDropdown) {
        // 1. Ouvre/Ferme le menu déroulant au clic sur le bouton
        authToggle.addEventListener('click', function(e) {
            e.preventDefault(); 
            authDropdown.classList.toggle('show');
        });

        // 2. Ferme le menu si l'utilisateur clique n'importe où ailleurs
        document.addEventListener('click', function(e) {
            if (!authToggle.contains(e.target) && !authDropdown.contains(e.target)) {
                authDropdown.classList.remove('show');
            }
        });
    }
});