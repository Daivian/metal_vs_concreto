
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bu-button').addEventListener('click', function() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Ocultar el botón inicial y mostrar el contenido principal
        document.getElementById('initial-button-container').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    });

    document.getElementById('bu-button-hidden').addEventListener('click', function() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
});


