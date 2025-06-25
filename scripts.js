document.addEventListener("DOMContentLoaded", () => {
    // Función para manejar el envío del formulario
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;
            
            if (nombre && email && mensaje) {
                alert(`¡Gracias por contactarnos, ${nombre}! Hemos recibido tu mensaje.`);
                form.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    // Función para destacar la navegación actual
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.backgroundColor = '#00cc99';
            link.style.color = '#0e0e0e';
        }
    });

    // Función para agregar producto al carrito
    function agregarAlCarrito(producto, precio) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push({ producto, precio });
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(`Producto "${producto}" agregado al carrito.`);
    }

    // Evento para "Agregar al carrito"
    document.querySelectorAll('.agregar-carrito').forEach(btn => {
        btn.addEventListener('click', function() {
            agregarAlCarrito(this.dataset.producto, this.dataset.precio);
        });
    });

    // Evento para "Comprar ahora"
    document.querySelectorAll('.comprar-ahora').forEach(btn => {
        btn.addEventListener('click', function() {
            // Guarda el producto en el carrito
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push({ producto: this.dataset.producto, precio: this.dataset.precio });
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Redirige a la página de compra
            window.location.href = 'compra.html';
        });
    });

    // Función para mostrar productos en el carrito (carrito.html)
    function mostrarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const lista = document.getElementById('lista-carrito');
        if (carrito.length === 0) {
            lista.innerHTML = "<li>Tu carrito está vacío.</li>";
        } else {
            lista.innerHTML = carrito.map(item => `<li>${item.producto} - $${item.precio}</li>`).join('');
        }
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
        localStorage.removeItem('carrito'); // Elimina la clave "carrito" de localStorage
        const lista = document.getElementById('lista-carrito');
        lista.innerHTML = "<li>Tu carrito está vacío.</li>";
        alert('El carrito ha sido vaciado.');
    }

    // Llama a mostrarCarrito si estás en carrito.html
    if (window.location.pathname.includes('carrito.html')) {
        mostrarCarrito();

        // Evento para el botón "Vaciar carrito"
        const botonVaciar = document.getElementById('vaciar-carrito');
        if (botonVaciar) {
            botonVaciar.addEventListener('click', vaciarCarrito);
        }
    }
});