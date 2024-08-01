function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (id === 'dynamic-header') {
                updateHeaderHeight();
            }
            if (id === 'dynamic-navbar') {
                updateActiveLink(); // Appel pour mettre à jour le lien actif après le chargement de la navbar
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

function updateHeaderHeight() {
    const header = document.querySelector('header');
    if (header) {
        const headerHeight = header.offsetHeight;
        document.documentElement.style.setProperty('--h-header', `${headerHeight}px`);
        //alert(`Hauteur du header: ${headerHeight}px`);
    } else {
        console.error('Header element not found');
    }
}

function updateActiveLink() {
    // Récupérer l'URL actuelle
    var currentPath = window.location.pathname;

    // Sélectionner tous les liens de navigation
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Boucler à travers les liens pour trouver celui qui correspond à l'URL actuelle
    navLinks.forEach(function(link) {
        // Récupérer le chemin de chaque lien
        var linkPath = new URL(link.href).pathname;

        // Comparer le chemin de l'URL actuelle avec celui du lien
        if (linkPath === currentPath) {
            // Ajouter la classe 'active' au lien correspondant
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadComponent('dynamic-header', 'header.html');
    loadComponent('dynamic-navbar', 'navbar.html');
    loadComponent('dynamic-footer', 'footer.html');
});

window.addEventListener('load', function() {
    // Call updateHeaderHeight to ensure the header height is accurate after all components are loaded
    updateHeaderHeight();
});
