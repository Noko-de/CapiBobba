$(document).ready(function () {

    /* POPOVERS & TOOLTIPS */
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggerList.forEach(el => new bootstrap.Popover(el));

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));

    /* INTERACCIONES UI */
    $("h1").on("click", function () {
        $(this).css({ color: "#ff23bd" });
    });

    // Ocultar / mostrar carta
    $("#carta").on("dblclick", function () {
        $(".container-carta").fadeToggle();
    });

    /* BOTÓN VOLVER ARRIBA */
    const btnTop = document.getElementById("btnTop");

    window.addEventListener("scroll", () => {
        btnTop.style.display = window.scrollY > 200 ? "flex" : "none";
    });

    btnTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* CARRITO DE COMPRAS */
    let carrito = [];
    let total = 0;

    // 🔴 EXPUESTO A HTML
    window.agregarAlCarrito = function (nombre, precio) {
        carrito.push({ nombre, precio });
        renderCarrito();
    };

    // 🔴 EXPUESTO A HTML
    window.eliminarItem = function (index) {
        carrito.splice(index, 1);
        renderCarrito();
    };

    function renderCarrito() {
        const lista = document.getElementById("listaCarrito");
        const totalSpan = document.getElementById("totalCarrito");
        const contador = document.getElementById("contadorCarrito");

        if (!lista || !totalSpan || !contador) return;

        lista.innerHTML = "";
        total = 0;

        carrito.forEach((item, index) => {
            total += item.precio;
            lista.innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${item.nombre}
                    <div>
                        $${item.precio}
                        <button class="btn btn-sm btn-danger ms-3"
                            onclick="eliminarItem(${index})">✕</button>
                    </div>
                </li>
            `;
        });

        totalSpan.textContent = total;
        contador.textContent = carrito.length;
    }

});