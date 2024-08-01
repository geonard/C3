
window.onload = function() {
// Sélectionner l'élément header
const header = document.querySelector('header');

// Obtenir la hauteur de l'élément header
const headerHeight = header.offsetHeight;


// Définir la variable CSS avec la hauteur du header
document.documentElement.style.setProperty('--h-header', `${headerHeight}px`);

// Afficher la hauteur dans une alerte alert(`Hauteur du header: ${headerHeight}px`);
};

document.addEventListener("DOMContentLoaded", function() {
  var headerElement = document.getElementById("dynamic-header");
  if (headerElement) {
      headerElement.innerHTML = `
      <header class="container-fluid d-none d-md-block">
          <div class="container">
              <div class="grid-header">
                  <!-- Colonne 1: Logo -->
                  <div class="logo-club">
                      <h1>CLUB AUTO</h1>
                  </div>

                  <!-- Colonne 2: Adresse -->
                  <div class="address">
                      <img src="images/icone-adresse.png" class="iconContacts img-fluid" alt="Adresse Icon">
                      <div class="ms-2">
                          <h2 class="mb-1"><b>ADRESSE :</b></h2>
                          <h3 class="m-0">AVENUE CHARLES DE GAULLE</h3>
                          <h3 class="m-0">75000 PARIS</h3>
                      </div>
                  </div>

                  <!-- Colonne 3: Téléphone -->
                  <div class="phone">
                      <img src="images/icon-telephone.png" class="iconContacts img-fluid" alt="Téléphone Icon">
                      <div class="ms-2">
                          <h2 class="mb-1">TELEPHONE :</h2>
                          <h3 class="m-0">06 95 90 74 27</h3>
                      </div>
                  </div>

                  <!-- Colonne 4: Ouverture -->
                  <div class="opening-hours">
                      <div>
                          <div class="d-flex align-items-center">
                              <h2 class="mb-0"><b>OUVERTURE :</b></h2>
                              <h3 class="ms-2 mb-0">Du Lundi au Samedi</h3>
                          </div>
                          <div class="d-flex align-items-center">
                              <h2 class="mb-0"><b>HORAIRES :</b></h2>
                              <h3 class="mb-0">De 9h à 17h</h3>
                          </div>
                      </div>
                  </div>

                  <!-- Colonne 5: Réseaux sociaux -->
                  <div class="social-media">
                      <img src="images/facebook.jpg" class="iconGAFAM img-fluid me-2" alt="Facebook Icon" />
                      <div style="width: 40px;"></div>
                      <img src="images/twitter.jpg" class="iconGAFAM img-fluid" alt="Twitter Icon" />
                  </div>
              </div>
          </div>
      </header>
      `;
  }
});
