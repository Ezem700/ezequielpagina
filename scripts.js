document.addEventListener("DOMContentLoaded", () => {
    // Función para manejar el envío del formulario
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        if(nombre && email && mensaje) {
            alert(`¡Gracias por contactarnos, ${nombre}! Hemos recibido tu mensaje.`);
            form.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
    
    // Función para destacar la navegación actual
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if(link.href === window.location.href) {
            link.style.backgroundColor = '#00cc99';
            link.style.color = '#0e0e0e';
        }
    });
});
