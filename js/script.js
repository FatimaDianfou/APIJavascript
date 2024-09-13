// Sélection de la première zone (Zone 1) pour la gestion du clic
const zone1 = document.getElementById('zone1');
zone1.addEventListener('click', () => {
    anime({
        targets: '#zone1', // Cible l'élément avec l'ID zone1
        translateX: 300, // Déplace horizontalement de 300px
        duration: 1000, // Durée de l'animation en millisecondes (1 seconde)
        easing: 'easeInOutQuad' // Utilise une fonction d'animation douce
    });
});

// Sélection de la deuxième zone (Zone 2) pour la gestion du double-clic
const zone2 = document.getElementById('zone2');
zone2.addEventListener('dblclick', () => {
    anime({
        targets: '#zone2', // Cible l'élément avec l'ID zone2
        scale: 1.5, // Agrandit la taille de l'élément par 1.5
        duration: 800, // Durée de l'animation en millisecondes
        easing: 'easeInOutQuad' // Fonction d'animation douce
    });
});

// Sélection de la troisième zone (Zone 3) pour la gestion du passage de la souris
const zone3 = document.getElementById('zone3');
zone3.addEventListener('mouseover', () => {
    anime({
        targets: '#zone3', // Cible l'élément avec l'ID zone3
        rotate: '1turn', // Effectue une rotation complète (360°)
        duration: 1500, // Durée de l'animation en millisecondes
        easing: 'easeInOutQuad' // Fonction d'animation douce
    });
});

// Sélection de la quatrième zone (Zone 4) pour la gestion de l'appui sur une touche du clavier
const zone4 = document.getElementById('zone4');
document.addEventListener('keypress', (event) => {
    if (event.key === 'a') {
        anime({
            targets: '#zone4', // Cible l'élément avec l'ID zone4
            backgroundColor: '#e74c3c', // Change la couleur de fond en rouge
            duration: 800, // Durée de l'animation en millisecondes
            easing: 'easeInOutQuad' // Fonction d'animation douce
        });
    }
});
