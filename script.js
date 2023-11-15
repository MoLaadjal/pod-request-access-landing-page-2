document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const emailInput = form.elements.email;
    const emailError = document.getElementById('emailError');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Vérifier si l'e-mail est vide
        if (!emailInput.value.trim()) {
            displayError(emailError, 'Oops! Please add your email');
            return;
        }

        // Vérifier le format de l'e-mail
        if (!isValidEmail(emailInput.value.trim())) {
            displayError(emailError, 'Oops! Please check your email');
            return;
        }

        // Effacer le message d'erreur s'il n'y a pas de problème
        clearError(emailError);

    });

    // Fonction pour valider le format de l'e-mail
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Fonction pour afficher un message d'erreur avec une classe
    function displayError(element, message) {
        element.textContent = message;
        element.classList.add('error'); // Ajoutez la classe 'error'
    }

    // Fonction pour effacer le message d'erreur et la classe
    function clearError(element) {
        element.textContent = '';
        element.classList.remove('error'); // Retirer la classe 'error'
    }
});