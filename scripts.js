
// Fonction pour définir un nouveau titre de page
// Fonction pour mettre à jour le titre de la page
function setPageTitle(newTitle) {
    const titreElement = document.getElementById('titrePresta');
    
    if (titreElement) {
        titreElement.textContent = newTitle;
    } else {
        console.error("L'élément avec l'ID 'titrePresta' n'existe pas.");
    }
}

// Fonction pour gérer la pagination
function updatePagination(currentPage, totalPages) {
    const prevButton = document.getElementById('precendent');
    const nextButton = document.getElementById('suivant');
    const pagePrevious = document.getElementById('pagePrecendent');
    const pageNext = document.getElementById('pageSuivant');
    const pageMaxElements = document.querySelectorAll('.pageMax'); // Récupérer tous les éléments avec la classe .pageMax
    const transmettre = document.getElementById('transmettre'); 
    const pageActuel = document.getElementById('pageActuel');
    const captcha = document.getElementById('captcha');

    // Mettre à jour tous les éléments ayant la classe .pageMax, si des éléments existent
    if (pageMaxElements.length > 0) {
        pageMaxElements.forEach(el => el.textContent = totalPages);
    }

    // Si le bouton Précédent existe
    if (prevButton) {
        if (currentPage === 1) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
            if (pagePrevious) pagePrevious.textContent = currentPage - 1;
        }
    }

    // Si le bouton Suivant et le bouton Transmettre existent
    if (nextButton && transmettre) {
        if (currentPage === totalPages) {
            nextButton.style.display = 'none';
            if (pageActuel) pageActuel.textContent = totalPages;
        } else {
            nextButton.style.display = 'block';
            transmettre.style.display = 'none'; // Masquer le bouton "Transmettre" sur les autres pages
            if (pageNext) pageNext.textContent = currentPage + 1;
            if (captcha) captcha.style.display = 'none'; // Masquer le captcha sur les autres pages
        }
    }

    // Si l'élément pageActuel existe
    if (pageActuel) {
        pageActuel.textContent = currentPage;
    }
}


// Fonction pour remplacer le contenu de l'élément avec l'ID 'titrePresta'
function setTitrePresta(newTitle) {
    // Sélectionner l'élément par son ID
    const titreElement = document.getElementById('titrePage');

    // Vérifier si l'élément existe et remplacer son contenu
    if (titreElement) {
        titreElement.textContent = newTitle;
    }
}
