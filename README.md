# Eze Technologies - Tienda Gamer y Tecnológica

Bienvenido a **Eze Technologies**, una tienda web de gadgets y tecnología con estilo gamer.  
Este proyecto incluye una navegación completa, carrito de compras funcional y formulario de compra.

---

## Estructura de archivos

```
ezequielpagina/
│
├── index.html         # Página principal
├── gadgets.html       # Catálogo de productos
├── carrito.html       # Carrito de compras
├── compra.html        # Formulario de compra
├── contacto.html      # Formulario de contacto
├── styles.css         # Estilos globales y gamer
└── scripts.js         # Funcionalidad JS (carrito, compra, contacto)
```

---

## Descripción de las páginas

- **index.html**  
  Página principal con presentación de la tienda y carrusel de gadgets destacados.

- **gadgets.html**  
  Catálogo de productos con botones para "Agregar al carrito" y "Comprar".  
  Cada producto muestra nombre, descripción, imagen y precio.

- **carrito.html**  
  Muestra los productos agregados al carrito.  
  Incluye botón para vaciar el carrito y para finalizar la compra.

- **compra.html**  
  Formulario para ingresar datos de envío y pago (nombre, dirección, tarjeta, vencimiento, CVV).

- **contacto.html**  
  Formulario para enviar consultas o mensajes a la tienda.

---

## Funcionalidad principal

- **Carrito de compras:**  
  - Los productos se agregan al carrito usando `localStorage`.
  - El carrito se muestra dinámicamente en `carrito.html`.
  - Botón para vaciar el carrito.

- **Compra rápida:**  
  - El botón "Comprar" agrega el producto al carrito y redirige a `compra.html`.

- **Formulario de compra:**  
  - Solicita datos personales y de tarjeta para finalizar la compra.

- **Formulario de contacto:**  
  - Valida los campos y muestra un mensaje de confirmación.

- **Navegación:**  
  - Menú superior en todas las páginas para moverse entre secciones.

- **Estilo gamer:**  
  - Colores neón, degradados y tipografía futurista (`Orbitron`).

---

## Instalación y uso

1. **Descarga o clona el repositorio.**
2. Abre la carpeta `ezequielpagina` en Visual Studio Code.
3. Usa la extensión **Live Server** o abre `index.html` directamente en tu navegador.
4. Navega entre las páginas usando el menú superior.

---

## Personalización

- **Agregar productos:**  
  Edita `gadgets.html` y agrega más secciones de productos con los botones y atributos correspondientes.

- **Modificar estilos:**  
  Cambia los colores, fuentes o efectos en `styles.css`.

- **Mejorar funcionalidad:**  
  Amplía el código en `scripts.js` para agregar más lógica (eliminar productos individuales, sumar totales, etc.).

---

## Créditos

Desarrollado por Ezequiel Molina.  
Iconos e imágenes de productos usados solo como ejemplo.

---

## Licencia

Este proyecto es solo para fines educativos y demostrativos.
