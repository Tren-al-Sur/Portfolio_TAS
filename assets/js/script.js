function showMember(memberNumber) {
    // Ocultar todas las tarjetas
    const allCards = document.querySelectorAll('.member-card');
    allCards.forEach(card => {
        card.classList.remove('active');
    });

    // Desactivar todos los círculos
    const allCircles = document.querySelectorAll('.nav-circle');
    allCircles.forEach(circle => {
        circle.classList.remove('active');
    });

    // Mostrar la tarjeta seleccionada
    const selectedCard = document.getElementById(`member-${memberNumber}`);
    const selectedCircle = document.querySelector(`[data-member="${memberNumber}"]`);
    
    if (selectedCard && selectedCircle) {
        selectedCard.classList.add('active');
        selectedCircle.classList.add('active');
    }
}

// Inicializar con el primer miembro activo
document.addEventListener('DOMContentLoaded', function() {
    showMember(1);
});

// Navegación con teclado
document.addEventListener('keydown', function(e) {
    const currentActive = document.querySelector('.nav-circle.active');
    if (!currentActive) return;

    const currentMember = parseInt(currentActive.getAttribute('data-member'));
    let nextMember = currentMember;

    if (e.key === 'ArrowLeft') {
        nextMember = currentMember > 1 ? currentMember - 1 : 5;
    } else if (e.key === 'ArrowRight') {
        nextMember = currentMember < 5 ? currentMember + 1 : 1;
    }

    if (nextMember !== currentMember) {
        showMember(nextMember);
    }
});

fetch("footer.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("footer").innerHTML = data;
});